---
layout: page
title: Configuration
permalink: /config/
nav_order: 3
---
# Configuration
Most of AuthGuard internal work is customizable by its configuration. The server expects either JSON or YAML configuration files to be provided named `application.json` or `application.yaml`. Below is a breakdown of the configuration parameters. While this is everything from AuthGuard itself, other components might require other configuration parameters.

```yaml
authguard:
  injection:
    packages: [ "com.authguard" ] # the packages to be scanned at runtime to find implementations and other components, com.authguard must be there

  jwt:
    algorithm: "the algorithm used to sign JWT"
    key: "the key to be used for symmetric algorithms"
    publicKey: "the public key to be used for asymmetric algorithms"
    privateKey: "the private key to be used for asymmetric algorithms"
    issuer: "the name of the issuer"
    trustedIssuers: ["self"] # typically will only be self until support for external issuers is added

  exchange:
    allowed: # a list of objects of allowed exchanges
      - from: "basic"
        to: "accessToken"

  accessToken:
    tokenLife: "5m"
    refreshTokenLife: "1h"
    useJti: true
    includePermissions: true
    includeRoles: true

  otp:
    lifeTime: "2m"
    mode: "NUMERIC" # can also be ALPHANUMERIC or ALPHABETIC
    length: 6
    generateToken: "accessToken" # what to generate upon a successful OTP verification

  passwordless:
    tokenLife: "1h"
    randomSize: 128
    generateToken: "accessToken" # what to generate upon a successful OTP verification

  authorizationCode:
    lifeTime: "5m"
    randomSize: 128

  authentication:
    generateToken: "authorizationCode" # what to generate upon a successful basic authentication

  account:
    verifyEmail: true

  verification:
    emailVerificationLife: "1d"

  oneTimeAdmin: # needed by AuthGuard in the first run to create an admin which can only be used to create other admins
    usernameVariable: "AUTHGUARD_OTA_USERNAME"
    passwordVariable: "AUTHGUARD_OTA_PASSWORD"

  emb:
    channels: # what internal messaging channels should be allowed, by default they are all allowed
      - accounts
      - auth

```
