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
Create a POST request to /accounts
```json
{
	"roles": [
		"authguard_admin"
	]
}
```

### Create Admin Credentials
Create a POST request to /credentials
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
Create a POST request to /apps
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
Create a POST request to /keys
```json
{
	"appId": "{{admin_app_id}}"
}
```

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

The auth request takes more parameters. You can learn more on the API 
documentation 