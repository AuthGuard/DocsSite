---
sidebar_position: 3
---
# Quick Start
As mentioned in [the previous section](/docs/run), some standard distributions 
are already provided and ready to be used. The quickest way to get started with 
those distributions is to use their container images, which is what we will use 
in this guide.

## The Images
All of our images are hosted on GitHub registry. You can find a list of available 
images [here](https://github.com/orgs/AuthGuard/packages?ecosystem=container).

## Running Distributions
In this example we will only run the standard-mongo distribution, which is a 
just a standard distribution with MongoDB drivers for persistence. To do so, 
for a development environment, we will need to create the following Docker 
Compose file

```yaml
version: "3.3"
    
services:
    mongodb:
        image: "mongo:5.0"
        volumes: 
            - "./db/:/data/db"
        
    my_authguard:
        image: "authguard-standard-mongo-base:0.9.0"
        links:
            - mongodb
        volumes:
            - "./keys/:/opt/authguard/keys"
            - "./config/:/opt/authguard/config"
        ports:
            - "3200:8080"
        environment:
            AUTHGUARD_OTA_USERNAME: ag_ota
            AUTHGUARD_OTA_PASSWORD: test_env_password
```

In this file we are basically just creating a MongoDB container called 
mongodb, and another container called my_authguard. For the AuthGuard 
container, we are mounting two local directories to make the server 
pick the configuration we have for the environment as well as JWT signing 
and encryption keys.

:::tip Generate key using AuthGuard CLI

The [AuthGuard CLI (authg-cli)](https://github.com/AuthGuard/authg-cli) 
can generate the keys for you by just supplying the algorithm. It 
requires OpenSSL to be installed on your system.

:::

Refer to the [configuration documentation](/docs/configuration) to 
build your own configuration. However, keep in mind that key paths 
must be set for the container (i.e. starting with /opt/authguard) 
and not for the host. For example, your JWT keys configuration 
should be like this
```yaml
jwt:
    ...
    privateKey: "/opt/authguard/keys/rsa512-private.pem"
    publicKey: "/opt/authguard/keys/rsa512-public.pem"
    ...
```

Once all of that is set up, just run `docker-compose up` (or with `-d`)
and you will have your test environment ready to go.

## Production
How you deploy your container to a production environment is up to you.
You can create a new image with the configuration and the keys. Or 
you can deploy the base image and mount directories like we did in the 
development environment example.

If you decided to package the configuration in a new image, consider 
reading some configuration values from environment variables. You can 
do so by adding "env:" followed by the name of the variable instead of
supplying an actual value. For example 

```yaml
mongo:
    connectionString: "env:MONGO_CONNECTION_STRING"
    database: "env:MONGO_DB_NAME"
```
