---
sidebar_position: 9
---
# Server Administration
This is a general guide on common server adminstration tasks that 
might be of interest to some.

## Web Server & Reverse Proxy
AuthGuard uses Javalin as its web library, which in turn uses Jetty 
as its web server. In other words, AuthGuard comes with an embedded 
web server and there is no need to deploy one in front of it. That 
being said, you might still want to keep it behind one, such as 
Nginx, if that suits your own use case better. You can still also 
deploy it alongside a proxy, particularly if you want it to be part 
of a service mesh.

## Server Status
The server comes with a few endpoints that help with monitoring 
and inspecting it. Those endpoints are

| Endpoint  | Accepted Role | Purpose |
| --- | --- | --- |
| /general/heartbeat    | Anyone        | Just a basic heartbeat endpoint |
| /admin/config         | admin_client  | The current active configuration |
| /admin/bindings       | admin_client  | All the discovered bindings for all plugins |

## Logging
AuthGuard uses Logback for logging, by default, that will only 
write to standard output. You can of course override that, and 
there are two ways: 
1. Package another Logback configuration file in your distribution 
resources.
2. Set the system property `logback.configurationFile` to point to 
your own configuration as follows `-Dlogback.configurationFile=/path/to/config`.

It is typically better to go with the second option since you won't 
have to build a new distribution with each change. For more information 
about Logback configuration, you can visit [this page](http://logback.qos.ch/manual/configuration.html).
