---
sidebar_position: 3
---
# Configuration
Most of AuthGuard internal work is customizable by its configuration. The server expects 
either JSON or YAML configuration files to be provided named `application.json` or 
`application.yaml`.

If you're building your own distribution, you can include a configuration file in its 
resources. Alternatively, you can provide an configuration file using the config parameter 
like this

```shell
--config /path/to/config/file.yaml
```

All configuration must be under the root 'authguard', whether it's JSON or YAML. Below 
is the break down of the configuration parameters. Note that other plugins also bring 
with them their own configuration which can also be added here.

## Injection
Since AuthGuard will look for plugins when it starts, you need to tell it which 
packages it's allowed to search.

```yaml
injection:
  packages: [ "com.nexblocks.authguard" ]
```

## One-Time Admin (OTA)
A One-Time Admin (OTA) is an account with limited capabilities, it's meant only to 
create other full admins and generate API keys for them. It should be deleted 
afterwards. 

Note that an OTA will only be created on startup if no other admins 
exist. In such case, AuthGuard will create the OTA based on the values of the 
environment variables set in the configuration.

### Examples
```yaml
oneTimeAdmin:
  usernameVariable: "AUTHGUARD_OTA_USERNAME"
  passwordVariable: "AUTHGUARD_OTA_PASSWORD"
```

## Server
| Property | Description |
--- | --- |
| port                        | The port to use for HTTP |
| securePort                  | The port to use for HTTPS |
| enableSsl                   | Enable HTTPs port |
| enforeSsl                   | Don't allow HTTP traffic |
| keystorePath                | The path to the keystore to use for TLS |
| keystorePassword            | The password to use to access the keystore |
| enableClientAuthentication  | Accept connections only from trusted clients (only for TLS) |
| truststorePath              | The path to store to use to authenticate clients |
| truststorePassword          | The password to use to access the trust store |

### Examples
1. Only HTTP
```yaml
server:
  port: 3000 
```

2. Basic HTTP and HTTPS
```yaml
server:
  port: 3000 
  securePort: 8443
  enableSsl: true
```

3. Basic Only HTTPS
```yaml
server:
  securePort: 8443
  enableSsl: true
  enforceSsl: true 
  keystorePath: /path/to/keystore
  keystorePassword: changeit
```

4. HTTPS with Client Authentication
```yaml
server:
  securePort: 8443 # port for HTTPS
  enableSsl: true
  enforceSsl: true # don't allow HTTP traffic
  keystorePath: /path/to/keystore
  keystorePassword: changeit
  enableClientAuthentication: true
  truststorePath: /path/to/truststore
  truststorePassword: changeit
```

## Exchange
To configure auth exchanges, you need to provide a list of allowed providers and 
allowed exchanges.

| Property  | Description |
| --- | --- |
| providers | A list of strings of the names of allowed providers |
| allowed   | A list of objects containing allowed exchanges (from and to) |

### Examples
The example shows an exchange where users would use their identifier (e.g. username) 
and password to receive a one-time password, and the exchange that OTP for an
access token.
```yaml
exchange:
  providers:
    - "otp"
    - "accessToken"
  allowed: 
    - from: "basic"
      to: "otp"
    - from: "otp"
      to: "accessToken"
```

## Authentication
This is used to configure an exchange shortcut from basic auth (identifier and 
password) to another token. It also tells the server what to expects for logout.

### Examples
In the following example the server will generate a passwordless token but, 
eventually, the user will logout while holding an access token.
```yaml
authentication:
  generateToken: "passwordless"
  logoutToken: "accessToken"
```

## Accounts
| Property  | Description |
| --- | --- |
| authguardAdminRole  | The name of the role to use for admins of the server |
| requireEmail        | Require a primary email to be supplied or not (true or false)  |
| requirePhoneNumber  | Require a phone number to be supplied or not  |
| verifyEmail         | Verify an account email after it was created  |
| verifyPhoneNumber   | Verify an account phone number after it was created  |

## Passwords
Currently, only two password hashing algorithms are supported: bcrypt and scrypt. 
Support for Argon2 is in the works. You can configure the hashing algorithm, as 
well password conditions.

| Property  | Description |
| --- | --- |
| algorithm | The name of the algorithm to use 'bcrypt' or 'scrypt' |
| scrypt    | Configuration for scrypt (see below)  |
| bcrypt    | Configuration for bcrypt (see below)  |

### SCrypt
| Property  | Description |
| --- | --- |
| CPUMemoryCostParameter  | default 16384 |
| blockSize               | default 8 |
| parallelization         | default 1 |
| saltSize                | default 16 |
| keySize                 | default 50 |

### BCrypt
| Property  | Description |
| --- | --- |
| cost      | default 4 |
| saltSize  | default 16 |

## JWT
If you intent to use the JWT plugin, you need to provide some general configuration 
for it. This is different from token-specific configuration for access tokens and 
ID tokens.

| Property  | Description |
| --- | --- |
| algorithm   | Which algorithm to use. Check JWT documentation for a list of algorithms |
| privateKey  | The private key to use to sign tokens. If you're using symmetric keys then you can this field will be treated as just "key" |
| publicKey   | The public key to use to verify tokens (only applicable to asymmetric keys) |
| issuer      | The value to use for the issuer |
| trustedIssuers  | An array of trusted issuers to be checked when verifying tokens. Must be ["self"] for now |
| encryption  | If defined, AuthGuard will encrypt all JWTs before sending them |

### Examples
1. Without Encryption
```yaml
jwt:
  algorithm: "HMAC256"
  privateKey: "keys/hmac256.pem"
  issuer: "AuthGuard"
  allowedAlgorithms: ["HMAC256"]
  trustedIssuers: ["self"]
```

2. With Encryption
```yaml
jwt:
  algorithm: "HMAC256"
  privateKey: "keys/hmac256.pem"
  issuer: "AuthGuard"
  allowedAlgorithms: ["HMAC256"]
  trustedIssuers: ["self"]
  encryption:
    algorithm: "AES_CBC"
    privateKey: "keys/aes128.txt"
```

## Access Tokens
While general JWT configuration will still apply to access tokens, they have some 
specific configuration parameters of their own,

| Property  | Description |
| --- | --- |
| tokenLife | The duration for which the token will be valid (e.g. 5m, 2h..etc) |
| refreshTokenLife  | The same thing, but for the refresh token |
| useJti  | Whether or not to generate and store a JTI  |
| includePermission | Add permissions to the token |
| includeRoles  | Add roles to the token  |
| includeExternalId | Add the external ID of the user in the token |

### Examples
```yaml
accessToken:
  tokenLife: "5m"
  refreshTokenLife: "1h"
  useJti: true
  includePermissions: true
  includeRoles: true
  includeExternalId: true
```

## ID Tokens
Similar to access tokens, ID tokens also need to be configured indepndently.

| Property  | Description |
| --- | --- |
| tokenLife | The duration for which the token will be valid (e.g. 5m, 2h..etc) |
| refreshTokenLife  | The same thing, but for the refresh token |
| useJti  | Whether or not to generate and store a JTI  |
| includeExternalId | Add the external ID of the user in the token |

### Examples
```yaml
idToken:
  tokenLife: "1d"
  useJti: true
  includeExternalId: true
```

## Authorization Code
If you're planning on using an authorization code, then you need to configure 
that as well.

| Property  | Description |
| --- | --- |
| lifeTime    | The duration for which the code will be valid (e.g. 5m, 2h..etc) |
| randomSize  | The number of random bits to generate |

```yaml
authorizationCode:
  lifeTime: "5m"
  randomSize: 128
```

## External Communication
While AuthGuard can send emails and text messages, this configuration only covers which 
channels are allowed. Refer to the configuration of the particular plugin you want to 
use for its own configuration.

| Property  | Description |
| --- | --- |
| email | Whether to enable email providers or not (true or false) |
| sms | Whether to enable sms providers or not (true or false) |

### Examples
```yaml
external:
  email: true
  sms: true
```

## One-Time Passwords
:::tip Requires An email or SMS provider

:::

| Property  | Description |
| --- | --- |
| lifeTime      | How long the password will be valid for |
| mode          | The type of OTPs to generate: NUMERIC, ALPHANUMERIC, ALPHABETIC |
| length        | Number of characters  |
| generateToken | What type of token should be generated after a successful OTP verification|

### Examples
```yaml
otp:
  lifeTime: "2m"
  mode: "NUMERIC" 
  length: 6
  generateToken: "accessToken" 
```

## Passwordless
:::tip Use the Passwordless-Send plugin to make AuthGuard send the token itself

:::

| Property  | Description |
| --- | --- |
| tokenLife     | How long the password will be valid for |
| randomSize    | How many random bits to generate  |
| generateToken | What type of token should be generated after a successful passwordless token verification|

### Examples
```yaml
passwordless:
  tokenLife: "10m"
  randomSize: 128
  generateToken: "accessToken" # what to generate upon a successful OTP verification
```

## Internal Event Channels
The Event Message Bus (EMB) is one of the core components of AuthGuard, and it makes 
it easier to add new functionality to it. Although a lot of channels are internally 
defined, you can decide which ones to allow.

| Property  | Description |
| --- | --- |
| channels     | An array of the names of channels to allow |

```yaml
emb:
  channels: 
    - accounts
    - auth
```
