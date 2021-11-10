---
title: "Tutorial 2: Federation with LDAP"
description: An example on how to use AuthGuard to authenticate users using an LDAP server
slug: tutorial-ldap
tags: [tutorial]
hide_table_of_contents: false
---

If you are in an enterprise environment, chances are that you 
already have some sort of an LDAP server, or are planning to 
use one. Since the LDAP server will hold the identities of the 
internal users, you can make AuthGuard use it instead of requiring 
users to sign up.

<!--truncate-->
## Prerequisites
1. Make sure that you have already followed the instruction on 
how to build an AuthGuard distribution. LDAP module is not 
currently included in standard distributions.

2. Follow the guideline for the [server setup](/docs/setup).

## Scenario
Our scenario is pretty straightforward:
1. Users are already added to an LDAP server
2. A user can go to your website and application and log
   in using their LDAP credentials
3. AuthGuard will authenticate the users against the LDAP 
   server and then whatever token it is configured to generate 
   just like a normal authentication step

## Test Setup
For the purpose of this tutorial, we will run a test LDAP server 
as a container. The image we are going to use is `bitnami/openldap:2`
since it makes it easier to bootstrap accounts.

```yaml
version: "3.3"
    
services:
    ldap_server:
        image: "bitnami/openldap:2"
        ports:
            - "1389:1389"
            - "1636:1636"
        environment: 
            LDAP_ADMIN_USERNAME: admin
            LDAP_ADMIN_PASSWORD: password
            LDAP_USERS: user01,user02
            LDAP_PASSWORDS: password1,password2
```

By default, the admin will available using `CN=admin,DC=example,DC=org`,
and users will be under `dc=example,dc=org`.

## AuthGuard Configuration
The configuration is the same as any regular AuthGuard distribution 
but with the LDAP section added, and the new exchanges allowed.

```yaml
ldap:
    adminBindFormat: CN=%s,DC=example,DC=org
    baseDN: dc=example,dc=org
    searchAttribute: uid
    passwordAttribute: userPassword
    host: localhost
    port: 1389
    isSecure: false
    admin: admin
    adminPassword: password
    bindType: simple

exchange:
    providers: [ "accessToken", "sessionToken" ]
    allowed:
      - from: "ldap"
        to: "accessToken"
      - from: "basic"
        to: "accessToken"
```

### Login
The `/auth/authenticate` endpoint cannot be used in this case, 
so a call to `/auth/exchange?from=ldap&to=accessToken` is 
necessary. You can replace `accessToken` with any of the supported 
token types.

```json
{
	"identifier": "user01",
    "password": "password1"
}
```


