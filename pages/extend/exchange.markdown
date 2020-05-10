---
layout: page
title: Exchange Service
permalink: /extend/exchange/
nav_order: 2
parent: Extend AuthGuard
---

# Exchange Service
As explained in the [design section](/design), the exchange service powers the whole authentication part of AuthGuard and any flow built on it. You may need to support a differnt type of token which is not one of the ones already present. You do not need to change anything in AuthGuard's code to support; you can just make it available to it at runtime.

## Exchanges Internally
Before going ahead to implement your own exchange you need to be aware of the interfaces related to it:
* `AuthProvider`
* `AuthTokentVerifier`
* `Exchange`

Every type of tokens, and we agreed that to keep things simple everything is a token, needs something to provide it and something to verify it. Excluding some for example, basic username and password which is not provided but can only be verified.

An exchange implementation then essentially uses an `AuthTokentVerifier` to verify a given token and then uses an `AuthProvider` to generate a differnt one, and optionally do something else on the side.

## Defining an Exchange
You define an exchange by implementing the `Exchange` interface. Then to make the exchange service know what this exchange is for, you need to annotate it with `@TokenExchange`. For example, one of the pre-defined exchanges in AuthGuard is one which takes a basic token and generates and authorization code for OAuth use.

```java
@TokenExchange(from = "basic", to = "authorizationCode")
public class BasicToAuthorizationCode implements Exchange {
    private final BasicAuth basicAuth;
    private final AuthorizationCodeProvider authorizationCodeProvider;

    @Inject
    public BasicToAuthorizationCode(final BasicAuth basicAuth,
                                    final AuthorizationCodeProvider authorizationCodeProvider) {
        this.basicAuth = basicAuth;
        this.authorizationCodeProvider = authorizationCodeProvider;
    }

    @Override
    public Optional<TokensBO> exchangeToken(final String basic) {
        return basicAuth.authenticateAndGetAccount(basic)
                .map(authorizationCodeProvider::generateToken);
    }
}
```
