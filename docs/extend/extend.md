---
sidebar_position: 1
---

# Extending AuthGuard
AuthGuard could be extended by adding components to it. It has its own component scan which will discover those components at runtime and make them available to Guice for dependency injection. There are three extension points where you can add your own components: data access, exchange service, and messaging.

Those components can also make use of dependency injection by annotating their constructors with Guice `@Inject` annotation. This includes reading the configuration.

We will first go through each extension point and then we will show some case studies for more concrete examples.
