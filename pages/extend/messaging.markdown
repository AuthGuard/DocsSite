---
layout: page
title: Event Subscribers
permalink: /extend/messaging/
nav_order: 3
parent: Extend AuthGuard
---

# Event Subscribers
Another are where AuthGuard can be extended is through its internal messaging layer. Some parts of the system publish events to internal channels through a message bus, and that message bus delivers the events to listeners.

## Implementing Subscribers
To add your own subscriber you need to implement the `MessageSubscriber` interface and specify which channels you need that subscriber to listen to using `@Channel` annotation.

For example, here is a subscriber which does nothing but log any message it received.

```java
@Channel("*") // subscribe to all channels
public class LogMessagePublisher implements MessageSubscriber {
    private final static Logger LOG = LoggerFactory.getLogger(LogMessagePublisher.class);

    @Override
    public void onMessage(final Message message) {
        LOG.info("Received {}", message);
    }
}
```

## Channels
The current list of channels is quite limited, and will be extended in the future. The currently supported channels are:
* `accounts`: for all changes related to accounts
* `apps`: for all changes related to application
* `auth`: for any authentication attempt
* `otp`: for any generated OTPs
* `passwordless`: for any generated passwordless tokens

You may choose to enable only some of these channels, in which case all events pushed to them will be discarded.
