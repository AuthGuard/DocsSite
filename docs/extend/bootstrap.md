---
sidebar_position: 5
---

# Bootstrap Steps
AuthGuard can run certain steps before starting the server, those are called "bootstrap steps". 
There are no restrictions on what those steps can do. For example, they can just log a message, connect 
to an external service, or create database indices.

## Creating a Step
All you need to do is to create a class which implements `BootstrapStep` interface, and 
your class will be discovered automatically.

```java
public class CustomStep implements BootstrapStep {

    @Override
    public void run() {
        // add the logic of your step here
    }
}
```

Steps are initialized after configuration and all dynamic bindings are initialized, and 
just like other extensions, they can have access to their own configuration or inject 
some of the services. For example:

```java
@Inject
public CustomStep(RolesService rolesService, @Named("custom") ConfigContext customStepConfig) {
    // do something with the service and the config
}
```

## Implementation Guidelines
While there are no restrictions what steps can do, there are certain guidelines that you 
need to be aware of

### Independence
Steps are completely independent and cannot be dependent on other steps. In other words,
a step cannot accept another step in the constructor and the order of execution is not 
guaranteed either.

### Idempotency
Steps with side effects should be idempotent since they'll run every time AuthGuard 
is restarted.

### Concurrency
Unless necessary, steps should not return before all of their tasks are done. They should
not schedule something in the background.

### Failure
Exceptions thrown by steps are logged and they will not prevent the server from starting. 
For fatal failures that should halt the server a step may just force the process to 
terminate. This will be replaced in the future with a halt signal that makes the application 
shut down gracefully.
