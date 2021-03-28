---
layout: page
title: Run AuthGuard
permalink: /run/
nav_order: 2
---
# Running AuthGuard
AuthGuard is just a kernel, it is missing some critical pieces in order for it
to actually run. And few more pieces to make it fit into your overall account
management and authentication design.

The most important part which must be provided is data access implementation.
AuthGuard does not require any particular database. Instead, you are expected to
provide implementation of its data access interfaces. This allows you to make it
work with any database you want.

## Requirments
* Java 11+
* Implementation of data access interfaces

## Distributions
In order to run AuthGuard you can define a distribution. A distribution is just a
project which contains AuthGuard along with other components. AuthGuard picks up
multiple things at runtime, the most important of which are data access components,
which are needed to run it.

You can use a build system like Maven or Gradle, or a command which runs it and
adds jars to the classpath manually. It is up to you.

Some examples of distributions which we use for testing are available [here](https://github.com/AuthGuard/example-distributions).

## AuthGuard CLI
The easiest way to generate and build an AuthGuard distribution is to use the
CLI. You can find more information about the CLI on its [repository](https://github.com/AuthGuard/authg-cli).
In summary, all you need to do is to run `authg init`, answer the prompts, and
then run `authg build`.
