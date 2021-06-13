---
sidebar_position: 2
---
# Features
An overview of the available features of AuthGuard.

## User Management
AuthGuard manages user accounts, their credentials, permissions, and roles.
Leaving your own application to care more about the business logic around the users.

### Single and Multiple Credentials
AuthGuard handles storing user identifiers and passwords. It supports three
types of identifiers:
  * Username
  * Email
  * Phone number

You may choose to allow your users to have multiple identifiers or a single one.

## Applications and API Keys
AuthGuard also handles managing external applications and thei API keys for you.
If you want to allow external parties to call your APIs you can easily register
an application and generate API keys for it.

Since each company might want different structure of their API keys, you can add
your own API key generator to AuthGuard. Refer to [Extending AuthGuard](/docs/extend/extend)
for more details. However, a basic API key provider is provided. The JWT extension
also provides a JWT-based API key.

## Authentication
### Session
Straightforward session management with bring-your-own-store.

### JWT
AuthGuard can generate access tokens out of the box with customizable fields in
the configuration. It can also be extended to generate different JWTs. Refer to
[Extending AuthGuard](/docs/extend/extend) for more details.

### Basic OAuth
AuthGuard supports, to some extent, OAuth authorization code flow. Better
out-of-the-box support will be available. However, since AuthGuard is not meant
to act as an external identity provider, using such flows adds unnecessary
complexity.

### One-Time Password and Passwordless
While not all application will need them initially, some choose to support them
later. You can quickly support OTP and passwordless login with simple
configuration changes with AuthGuard.

### LDAP (experimental)
Authenticating users using LDAP is currently supported, though still experimental.
