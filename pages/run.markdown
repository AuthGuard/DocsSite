---
layout: page
title: Run AuthGuard
permalink: /run/
nav_order: 2
---
# Running AuthGuard
AuthGuard is just a kernel, it is missing some critical pieces in order for it to actually run. And few more pieces to make it fit into your overall account management and authentication design.

The most important part which must be provided is data access implementation. AuthGuard does not require any particular database. Instead, you are expected to provide implementation of its data access interfaces. This allows you to make it work with any database you want.

## Requirments
* Java 11+
* Implementation of data access interfaces

## Distributions
In order to run AuthGuard you can define a distribution. A distribution is just a project which contains AuthGuard along with other components which are available to AuthGuard in the classpath. AuthGuard picks up multiple things at runtime, the most important of which are data access components, which are needed to run it.

You can use a build system like Maven or Gradle, or a command which runs it and adds jars to the classpath manually. It is up to you.

An example of a distribution which includes AuthGuard, mock in-memory database is found at the [test distribution repoisotory](https://github.com/AuthGuard/test-distribution). Part of its Maven POM file is shown below.
```xml
<project>
    ... project configuration ...

    <dependencies>
        <dependency>
            <groupId>com.authguard</groupId>
            <artifactId>rest</artifactId>
            <version>${authguard.version}</version>
        </dependency>

        <dependency>
            <groupId>com.authguard</groupId>
            <artifactId>memory-dal</artifactId>
            <version>${authguard.version}</version>
        </dependency>

        ... other dependencies ...
    </dependencies>

</project>
```
