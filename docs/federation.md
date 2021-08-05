---
sidebar_position: 10
---
# Identity Federation

:::warn Experimental Features

Federation and Social Login/Signup are still experimental 
features and may not be ready for production use yet.

:::

Beside being a full identity managenet service, AuthGuard also 
supports authentication users which are not managed by it directly.
AuthGuard is compatible with: any standard LDAP implementation, and 
any OpenID Connect (OIDC) service. OIDC is what most social login 
providers, such as Google and Facebook, support.

## LDAP
AuthGuard can connect to an LDAP server to authenticate users. In 
such scenarios, the LDAP server will be the identity provider, 
while AuthGuard will handle only the user tokens or sessions. 

Before starting, you need to make sure that the LDAP extension 
is available as part of your distribution. Standard distributions 
do not include LDAP support, so you will need a custom one. This 
will change when the LDAP is no longer an experimental feature.

### Configuration
```yaml
ldap:
    host: .. the server host ..
    port: .. the server port ..
    secure: true # should be true for production use
    admin: # the admin account AuthGuard can use to communicate with the LDAP server
    adminPassword: # the password of the admin account
    adminBindFormat: "cn=%s" # the format to use to bind the admin account, %s is a placeholder for the username
    baseDN: "ou=people,dc=example,dc=com" # the base DN to use to search for users
    searchAttribut: "uid" # the attribute to get use to search for the username
    passwordAttribute: "userPassword" # the attribute which has the password
    bindType: "simple" # the bind type to use (simple, cram_md5, digest_md5, or plain)
```

### Exchanges
Just like all other authentication options, LDAP authentication 
is just an exchange. The extension defines the following exchanges:
* LDAP to Access Token
* LDAP to Authorization Code
* LDAP to ID Token
* LDAP to Session
* LDAP to OTP
* LDAP to Passwordless

All of them are available through `/auth/exchange` endpoint. You 
can check the [OpenAPI documentation](/api) on how to use it.

## Social Login
Most, if not all, of social login providers support OAuth 2.0 and 
OpenID Connect. AuthGuard does not have a provider-specific 
implementation, instead you can configure it to connect to any 
of them.

### Configuration
As we mentioned, you can configure AuthGuard to use any OpenID 
Connect provider, and you do by defining a client for it.
```yaml
oauth:
    clients:
        - provider: .. the name of the provider, this can be anything to identify it ..
          authUrl: .. the auth URL of the provider ..
          tokenUrl: .. the token URL of the provider ..
          authRedirectUrl: .. the URL to tell the provider to redirect to after the auth step ..
          tokenRedirectUrl: .. the URL to tell the provider to redirect to after the token step ..
          clientId: .. the client ID registered with the provider ..
          clientSecret: .. the client secret registered with the provider ..
          defaultScopes: ["openid", "profile",..] # the scopes to request from the provder
```

### Flow
There are steps to this flow: 1. get an authorization URL, 2. exchange 
the authorization code for valid tokens.

First you need to request the authorization URL from AuthGuard 
by sending a GET request to `/oauth/auth_url` with the query 
parameter `provider` set to one of the providers you defined 
in the configuration. AuthGuard will take care of creating the 
session state value to be used for interacting with the OAuth 
server.

Once your client gets the URL, it should redirect the user to 
that URL to perform the authentication. If that step was successful,
then the OAuth server will redirect the user back to your application 
with the authorization code. You then send a POST request to 
`/oauth/authorize` with the name of the provider, the state, and 
the authorization code. AuthGuard will then exchange the code 
for the tokens from the provider and pass them back to your 
application.
