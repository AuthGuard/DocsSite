---
sidebar_position: 7
---
# Setup and Usage
In this section we will walk through how to set up an admin account and generate 
an API key to be able to call AuthGuard. Then we will show few examples of common
use cases.

## Admin Creation
After building your own distribution, or getting one of the standard ones, you 
need to to create an admin account, an admin application, and generate an API 
for that application. You can use the [OTA](/docs/deployment#One-Time-Admin) to do 
that for the first time, then use the API key to create more if needed.

### Create Admin Account
Make a POST request to /accounts
```json
{
	"roles": [
		"authguard_admin"
	]
}
```

### Create Admin Credentials
Make a POST request to /credentials
```json
{
	"accountId": "{{admin_account_id}}",
	"identifiers": [
		{
			"identifier": "{{admin_username}}",
			"type": "USERNAME"
		}
	],
	"plainPassword": "{{admin_password}}"
}
```

### Create Admin Application
Make a POST request to /apps
```json
{
    "name": "Your application name",
	"accountId": "{{admin_account_id}}",
	"roles": [
		"authguard_admin_client"
	]
}
```

### Generate an API Key
Make a POST request to /keys
```json
{
	"appId": "{{admin_app_id}}"
}
```

### Create Auth Client
Unlike the admin application we just created, an auth application can only 
access a limited number of endpoints. Auth clients have keys which can be 
made public if you needed your application to communicate with AuthGuard 
directly to register users and log them in. 

Make a POST request to /apps
```json
{
    "name": "Your application name",
	"accountId": "{{admin_account_id}}",
	"roles": [
		"authguard_auth_client"
	]
}
```
And then generate an API key just like the previous step. The only 
endpoints this client will have access to are:
* POST `/credentials`
* GET `/credentials/identifier/{identifier}/exists`
* POST `/accounts` (all phone numbers and emails will be set to unverified if the `verified` flag was set to true)
* GET `/accounts/email/{email}/exists`
* POST `/auth/exchange`
* POST `/auth/authenticate`
* POST `/credentials/reset_token`
* POST `/credentials/reset`

### Create Other Users
Creating a user is just like creating an admin user, except that the account 
will not have the admin role. Every user will have two entities associated 
with it: credentials and account. You first create the account, then the 
credentials.

Since we showed already an example above, you can check the API documentation 
for [POST /accounts](/api#operation/createAccount) and 
[POST /credentials](/api#operation/createCredentials).

### Authenticate a User
In order to authenticate user, you can use either the exchange endpoint, or 
the authenticate endpoint. The authenticate endpoint is just a shortcut for 
performing an exchange from basic (username and password) to whatever it is 
configured to generate. In this example we will use the authenticate endpoint, 
where you perform a POST request to /auth/authenticate
```json
{
    "identifier": "username",
    "password": "password"
}
```

The auth request takes more parameters. You can know more from the [API 
documentation](/api).