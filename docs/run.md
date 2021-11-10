---
sidebar_position: 2
---
# Running AuthGuard
AuthGuard is just a kernel, and, in order to run it, you need a distribution.
Distributions are just the kernel and some plugins. The most important part which must 
be provided is data access implementation. AuthGuard does not require any 
particular database. Instead, you are expected to provide implementation of its 
data access interfaces. This allows you to make it work with any database you want.

You may choose one of our pre-built distributions or build your own. In this guide 
we will go through both approaches.

:::tip Use a standard distribution

If one of our standard distributions matches your needs, then it's easier to 
use it instead of maintaining your own.

:::

## Standard Distributions
We provide some ready-to-use distributions which cover most common use cases. A 
standard distribution comes equipped with:
* JWT plugin
* Sessions plugin
* Account lock plugin
* Plugin to send passwordless tokens
* Plugin to send verification emails
* JavaMail plugin

The only difference among all standard distributions is the data access implementation.
They all come with only a single implementation for both persistence and cache.
We currently provide:
* Mongo standard distribution
* PostgreSQL standard distribution
* MySQL standard distribution

And more will be added later. For information on how to use the standard distributions 
refer to [the quick start page](/docs/quick-start).


### JARs
You can download any of the standard distributions, from [the download page](https://www.nexblocks.com/downloads/authguard). 
Note that you will need Java 11+ runtime to be able to run AuthGuard JARs. 

Once ready, you can run AuthGuard with the following command
```
java -jar <distribution>.jar --config <path to your configuration file>
```

If you want to provide your own logging configuration you can supply that as well
```
java -jar -Dlogback.configurationFile=<path to logback config> \
        <distribution>.jar --config <path to your configuration file>
```

You may also add JVM configuration to the command, should you need to do so.

### Container Images
Standard distributions are also available as container images. You can find the images 
on [Dockerhub](https://hub.docker.com/), and you can use the following command to run 
one of the available distributions

```shell
docker run --name authguard <distribution image>:<tag>
```

:::danger Provide your own configuration

The previous command will start with its default configuration, you'll need 
to override that.

:::

### Manual
Alternatively, you can use a standard distribution as a basis for your own 
distribution by using the maven project of the distribution available here.

## Custom Distributions
You may choose to build your own custom distribution, either from scratch, or 
by using an existing distribution as a starting point. We recommend that you 
use a build system like Maven or Gradle to build your distribution.

### AuthGuard CLI
The easiest way to generate and build an AuthGuard distribution is to use the
CLI. You can find more information about the CLI on [its repository](https://github.com/AuthGuard/authg-cli).
In summary, all you need to do is to run `authg init`, answer the prompts, and
then run `authg build`.
