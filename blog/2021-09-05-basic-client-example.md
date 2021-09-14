---
title: "Tutorial 1: Basic example"
description: This is my first post on Docusaurus 2
slug: welcome-docusaurus-v2
tags: [tutorial]
hide_table_of_contents: false
---

In this example we will walk through how to use AuthGuard to 
build your own auth server for a simple web application.

<!--truncate-->
## Prerequisites
1. Make sure that you have already followed the instruction on 
how to build an AuthGuard distribution, or that you are using 
a standard distribution.
2. Follow the guideline for the [server setup](/docs/setup).

:::tip Adapt the guideline to your use case

This guideline is written from the perspective of a web application 
which communicates with AuthGuard directly. The same concepts, 
however, are transferrable to other use cases, and you should 
adapt it as such. 

:::

## Scenario
Our scenario will be a simple flow, our goals are:
1. Users can register a username but also their email
2. In the signup page, we inform the user of whether their
   chosen username and email are available or not
3. Users can log in using either their username or email
4. The login process will result in an access token and 
   a refresh token (you can use sessions instead)

### Registration
Before making any calls to create an account, we need first 
an idempotent key. Idempotent keys are there to guarantee 
that duplicate calls will not have any effect. For this purpose 
we will use [uuidv4](https://www.npmjs.com/package/uuidv4) library,
and when your registration page loads, a new idempotent key should 
be generated as `const IDEMPOTENT_KEY = uuidv4()`.

The first step in our registration process is to give the user 
feedback on whether the chosen username exists. For that, 
you need to set the input change event to something like this

```js
async function checkEmail(e) {
    let email = e.target.value;
    let valid = validateEmail(email); // outside the scope of this tutorial
    
    let response = await fetch(`/accounts/email/${email}/exists`)

    if (response.status == 200) {
        displayEmailExistsLabel()
    } 

    // if the response is 404 then it doesn't exist and we're good to go
}

function checkUsername(e) {
    let username = e.target.value;
    let valid = validateUsername(username); // outside the scope of this tutorial

    let response = await fetch(`/credentials/identifiers/${username}/exists`)

    if (response.status == 200) {
        displayUsernameExistsLabel()
    } 

    // if the response is 404 then it doesn't exist and we're good to go
}
```

If everything is good, then we can proceed with creating an account

```js
async function registerButtonClick(e) {
    let email = document.getElementById('email').value;
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let account = {
        email: {
            email: email
        }
    }

    let credentials = {
        identifiers: [
            {
                identifier: email,
                type: "EMAIL"
            },
            {
                identifier: username,
                type: "USERNAME"
            }
        ]
    }

    await register(account, credentials);
}

async function register(account, credentials) {
    const body = {
        account: account,
        credentials: credentials
    };

    let response = await fetch('/accounts/complete', {
            method = 'POST',
            body: JSON.stringify(body),
            headers: {
                'X-IDEMPOTENT-KEY': IDEMPOTENT_KEY
            }
        });

    if (response.status == 200) {
        /*
         * A recommended step is to create a user profile 
         * on your own server to associate an AuthGuard 
         * account with. In the scenario where your client
         * creates account through your server, you can 
         * perform that step first and then use the ID of 
         * the profile as an external ID for AuthGuard.
         */
        createUserProfile();
        redirectToLogin();
    } else if (response.status == 409) {
        let error = await response.json();
        
        if (error.code == 'AC.031') {
            displayEmailExistsLabel()
        } else if (error.code == 'CD.012') {
            displayUsernameExistsLabel();
        } else {
            displayGenericError();
        }
    } else {
        displayGenericError();
    }
}
```

### Login
We can now move on to letting users log in using their credentials.

```js
async function loginButtonClick(e) {
    let identifier = document.getElementById('identifier').value; // username or email
    let password = document.getElementById('password').value;
    let localSessionId = createSessionId(); // a randomly generated client-side session, used to associate multiple login attempts, and token refresh requests together

    let request = {
        identifier: identifier,
        password: password,
        externalSessionId: localSessionId
    }

    let response = await fetch('/auth/authenticate',
        {
            method: 'POST',
            body: JSON.stringify(request)
        }
    );

    if (response.status == 200) {
        let body = await response.json();

        storeTokenAsCookie(body.token);
        storeRefreshToken(body.refreshToken); // use internal storage instead
    } else {
        displayLoginError();
    }
}
```

### Refresh
Access tokens are short-lived, which means that your client 
will need to refresh the token. Possibly multiple times within 
a session. You can either do this periodically, or only if 
a request was made and the response code was 401.

```js
async function refresh() {
    let refreshToken = getRefreshToken();
    let localSessionId = getLocalSessionId(); 

    let request = {
        token: refreshToken,
        externalSessionId: localSessionId
    }

    let response = await fetch('/auth/exchange?from=refreshToken&to=accessToken',
        {
            method: 'POST',
            body: JSON.stringify(request)
        }
    );

    if (response.status == 200) {
        let body = await response.json();

        storeTokenAsCookie(body.token);
        storeRefreshToken(body.refreshToken); 
    } 

    /* 
     * The choice is yours how you want your app to react 
     * if the refresh failed. One of the causes is if the 
     * account was deleted or blocked.
     */
    
}
```

### Updating Credentials and Account
Updating user account information and credentials cannot be 
done using an auth client. Instead, your client will need 
to make a request to your server, which will then issue the 
update request to AuthGuard.

### Password Reset
If a user forgot their password, they can receive a temporary 
password reset token sent to their email. The process is 
fairly straightforward, but it requires your server to make the 
request and not the client, since AuthGuard sends the token 
back in the response. This is a temporary state, and in the 
future AuthGuard will send the token only if the caller is 
an admin client. You can issue a POST request to 
`/credentials/reset_token` with the body

```js
{
    "identifier": "<the user identifier>"
}
```

If the Token Send plugin is part of your distribution, then 
AuthGuard will send the email itself. Otherwise, your 
server will need to send it. Typically, the email will 
contain a URL to a reset page of your own which will 
accept the token as a query parameter;

Once the user has the reset token, in your reset page, you 
can do the following
```js
async function passwordResetButtonClick() {
    let token = getResetToken(); // depends on how it got there
    let password = document.getElementById('password').value;
    let request = {
        resetToken: token,
        plainPassword: password
    }

    let response = await fetch('/credentials/reset',
        {
            method: 'POST',
            body: JSON.strinfigy(request)
        }
    );

    if (response.status == 200) {
        redirectToLogin();
    } else {
        displayError();
    }
}
```


