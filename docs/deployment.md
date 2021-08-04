---
sidebar_position: 6
---
# Deployment
Regardless of whether you created your own distribution or used a standard one,
the deployment process is pretty much the same, unless there are plugin-specific 
steps. In this section we will take an AuthGuard distribution from a dev server 
to a production setup.

## TLS
Perhaps the first and most important step is to enable TLS and enforce HTTPS 
traffic. In production, your authentication server should never use HTTP.

### Certificates
You must have a certificate for TLS, you can easily obtain one from Let's Encrypt, 
or through another provider. Another option which can be useful for testing 
production setup is to use a self-signed certificate. You may also use a self-signed 
one in production, although that is not recommended.

To generate a self-signed certificate using Java keytool, you can run the 
following command (adjust the parameters if you needed to)
```shell
keytool -genkey -keyalg RSA -alias selfsigned -keystore cert-keystore.jks -storepass changeit -validity 360 -keysize 2048
```

If you already have a certificate and you want to package it as jks file to be to use 
it (this will create a new store)
```shell
keytool -import -alias certAlias -file certificate.crt -keypass keypass -keystore keystore.jks -storepass changeit
```

### Configuration
The server configuration options are explained in [Configuration#Server](/docs/configuration#server)
, however here is the same example which is presented there

```yaml
server:
  port: 8080 # 80 in prod
  securePort: 8443 # 443 in prod
  enableSsl: true
  enforceSsl: true 
  keystorePath: /path/to/keystore
  keystorePassword: changeit
```

## One-Time Admin
The One-Time Admin (OTA) is an admin that will be created automatically if no other 
admins exists. Its sole purpose to create at least one more admin and then it should 
be deleted. That admin only has access to the endpoints which are relavant to that 
task. The OTA will have the username and password specified by environment variables 
set in the configuration, for example

```yaml
oneTimeAdmin:
  usernameVariable: "AUTHGUARD_OTA_USERNAME"
  passwordVariable: "AUTHGUARD_OTA_PASSWORD"
```

You have two options here:
1. Run AuthGuard in a non-prod environment connected to the prod database where those 
variables are defined, create the other admin and generate an API key for it, then 
move the server to prod.
2. Just keep them defined in the prod environment and proceed as usual.

## Deploying the Server
There are two options for deploying AuthGuard: as a container, as a normal process.
In this example we will explain the latter since deploying it as a container is just 
like any other container. However, you will still need the environment variables. The pre-requisites for this example are:
1. You are deploying to a Linux machine
2. You have JRE or JDK installed (11+)
3. You have systemd running

:::tip Environment Variables
Make sure the OTA variables, as well as any other variables required by the plugins 
are defined.
:::

### Build the Distribution
:::tip Use AuthGuard CLI

If you used AuthGuard CLI to create the distribution then you can just 
run `ag build` and that will build it.

:::

If you are using your own distribution, you can build it by running one of the 
following commands for Maven
```shell
mvn package # if you don't have the wrapper
./mvnw package # if you have the wrapper

# and if you're building a container image you also need
mvn docker:build
# OR
./mvnw docker:build
```

Or, if you are using Gradle
```shell
gradle build # if you don't have the wrapper
./gradlew build # if you have the wrapper

# and if you're building a container image you also need
gradle docker
# OR
./gradlew docker
```

### Copy the Files
To copy the JAR to your machine you can use the scp command
```shell
scp target/authguard-distribution.jar user@<machine IP>:/authguard/
```

Then you can copy your configuration files there as well
```shell
scp -dr config/ user@<machine IP>:/authguard/
```

And your secrets (JWT keys, certificates..etc)
```shell
scp -dr secrets/ user@<machine IP>:/authguard/
```

In addition to that, we will also create a small script to run it
```shell
#!/bin/sh

java -jar /authguard/authguard-distribution.jar --config /authguard/config/prod.yaml
```

### Systemd Service
Create the systemd serviceas follows

:::tip This is just the bare minimum
Add more as you need
:::

```
[Unit]
Description=AuthGuard Server

[Service]
Restart=always
ExecStart=bash /authguard/run.sh

[Install]
WantedBy=multi-user.target
```

Copy the service to `/etc/systemd/system`, and then run the following commands
```bash
systemctl start authguard.service # to start the service now
systemctl enable authguard.service # to start the service automatically after reboot
```
