---
sidebar_position: 8
---
# Authentication Scenarios
Once you have AuthGuard up and running, and had an API key generated, you 
can now start calling AuthGuard to authenticate users. We have two types 
of user authentication based on what is generate: session-based, and 
token-based. We will mention examples for each, and in the end we will 
show how one-time passwords and passwordless login tie into that.

:::info AuthGuard is API-only

Currently, AuthGuard does not provide any user interface, and is purely 
just an API. There is an extension which will take care of that under
development.

:::

## Session Authentication
Session-based authentication is a stateful authentication, where the 
auth server generates a session, stores it somewhere, and then give 
the user back a session ID. We can then get the session information 
from the server every time we need to verify the user's session.

In order to use session-based authentication with AuthGuard, a session 
store must be provided. A session store is part of the data access 
layer cache interfaces, and any cache implementation will have that.

### Configuration
First you need to define some session parameters in the configuration
as follows

```yaml
sessions:
	randomSize: 16 # the size of the session ID (session token) in bytes
	lifeTime: "30m" # how long the session is valid for
```

You must then allow the following exchanges
```yaml
exchange:
	allowed:
		- from: "basic"
		  to: "session"
		- from: "sessionToken"
		  to: "session"
```

The first one will allow you to generate a session for a user using 
their identifier (username, email, or phone number) and password.
While the second one will exchange a session token to the session 
associated with it. Those will only affect the `/auth/exchange` 
endpoint. You can also add the following configuration to use 
`/auth/authenticate`, and `/auth/logout` endpoints.
```yaml
authentication:
	generateToken: "session"
    logoutToken: "session"
```

### Requests
To authenticate a user just send a POST request to the authentication endpoint

`POST /auth/authenticate` 
```json
{
	"identifier": "{{username}}",
    "password": "{{password}}"
}
```

You can add other fields as well such as the user's device ID, user agent,
and IP address.

Then when a user client makes a request to access resources or perform 
actions on them to your server, you can call the exchange endpoint 

`POST /auth/exchange?from=sessionToken&to=session`
```json
{
	"token": "{{sessionToken}}"
}
```

To log a user out, i.e. clear their session, you can use `/auth/exchange/clear`
or `/auth/logout`. In this example we will use the clear endpoint

`POST /auth/exchange/clear?tokenType=sessionToken`
```json
{
	"token": "{{sessionToken}}"
}
```

## Token Authentication
Unlike session-based authentication, token-based authentication is stateless, 
meaning that your own resource server can verify the token itself without having 
to check with AuthGuard. However, in some cases it may need to, as we will 
see later. For those stateless tokens, AuthGuard uses JSON Web Token (JWT), 
which is the most widely used option.

AuthGuard supports two kinds of JWTs: ID tokens, and access tokens. You can 
get both of them as part of an OpenID Connect exchange. 

**ID Tokens**: Long-lived tokens about the identity of the user. They should 
not be used to access resources directly, as they do not contain the needed 
information for authorization.
**Access Tokens**: Short-lived tokens which can be used to access a resources. 

### Configuration
JWT is a bit more complicated than sessions configuration. You need to specify 
general JWT configuration and also specific configuration for each token 
type individually. Here is an example JWT configuration which uses HMAC256
to sign the tokens, and does not enable token encryption. For more examples 
you can check [the JWT configuration section](/docs/configuration#jwt).
```yaml
jwt:
    algorithm: "HMAC256"
    privateKey: "keys/hmac256.pem"
    issuer: "AuthGuard"
    allowedAlgorithms: ["HMAC256"]
    trustedIssuers: ["self"]
```

Now let's add some configuration for access tokens and ID tokens
```yaml
accessToken:
    tokenLife: "5m"
    refreshTokenLife: "1d"
    useJti: true
    includeRoles: true

idToken:
    tokenLife: "1h"
    refreshTokenLife: "1d"
    useJti: true
```

And now we need to add the necessary exchanges, and configure the 
authentication settings
```yaml
exchange:
	allowed:
		- from: "basic"
		  to: "accessToken"
		- from: "basic"
		  to: "idToken"

authentication:
	generateToken: "accessToken"
    logoutToken: "accessToken"
```

Note that, while we can have multiple exchanges from basic, only 
one them can be set to be used by `/auth/authenticate` endpoint.
The other ones will only be accessible through `/auth/exchange`.

### Requests
Just like authenticating a user to generate a session, you just send a POST 
request to the authentication endpoint

`POST /auth/authenticate` 
```json
{
	"identifier": "{{username}}",
    "password": "{{password}}"
}
```

And just like that, we get an access token back since that is what 
we specified in the configuration. Your resource servers can now 
just verify the access token themselves by checking the signature.

:::tip Use Asymmetric Keys

If you are planning on verifying the signatures without calling 
AuthGuard then you should use asymmetric keys instead of the 
symmetric key used in the example above.

:::

To log a user out, you can use `/auth/exchange/clear` or 
`/auth/logout`. In this example we will use the clear endpoint

`POST /auth/exchange/clear?tokenType=accessToken`
```json
{
	"token": "{{refreshToken}}"
}
```

Note that when we log a user out, we just invalidate their 
refresh tokens, that way they will not be able to refresh their 
current token without logging in again.

### Token Encryption
You can optionally enable token encryption as well. In which case,
AuthGuard will only return an encrypted token, and then you can 
decrypt it yourself, or call AuthGuard to do so. Token encryption 
configuration example can be found [here](/docs/configuration#jwt).
