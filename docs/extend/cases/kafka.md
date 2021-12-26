---
sidebar_position: 2
---

# Bridge to Kafka
We touched on the messaging aspect of AuthGuard in the [design sectio](/design), and went more into details on how to subscribe to internal events in the [events subscribers](/extend/messaging). So far it has been all internal, but ultimately, AuthGuard will run as part of a larger system. You can connect it to other parts of the system by providing an events bridge.

An event bridge simply takes internal events and pushes them to an external messaging system. It can also change the format and structure of the events to comply with your own standards if you have certain events structure already in place.

Here we show how to create a bridge which takes internal events and pushes them to a Kafka topic. The full source code of this example can be found [here](https://www.github.com/AuthGuard/kafka-emb).

## Configuration
We need some configuration to make this work. Our configuration interface, [Immutables](https://immutables.github.io/) is used to generate the actual class.

```java
public interface KafkaConfiguration {
    String getClientId();
    List<String> getBootstrapHosts();
    Map<String, String> getTopics();
    Map<String, String> getProducerConfig();
}
```

In the configuration we expect some standard settings like client ID, Kafka bootstrap hosts, and producer config which will be passed to the producer. We also expect a map which maps internal channels to external topics.

The configuration can be obtained through Guice by injecting a `ConfigContext` with `@Named("kafka")` annotation.

## Message Serialization
In order to publish a message to Kafka, you need something to serialize it. Kafka Java client already comes with a JSON serializer which is what we are going to use. Some methods were ommitted in the code snippet below but you can get the full example from the GitHub repo.

```java
public class MessageSerializer implements Serializer<Message> {
    private final ObjectMapper objectMapper;
    private final JsonSerializer jsonSerializer;

    public MessageSerializer() {
        this.objectMapper = new ObjectMapper();
        this.jsonSerializer = new JsonSerializer();
    }

    @Override
    public byte[] serialize(final String topic, final Message message) {
        final JsonNode jsonNode = objectMapper.valueToTree(message);
        return jsonSerializer.serialize(topic, jsonNode);
    }
}
```

## Kafka Publisher
We then prepare the publisher which will be used by our subscriber to publish to Kafka. We also ommitted the implementation of `KafkaProducerFactory` which is used below.

```java
public class KafkaPublisher {
    private final ImmutableKafkaConfiguration config;
    private final KafkaProducer<String, Message> kafkaProducer;

    @Inject
    public KafkaPublisher(@Named("kafka") final ConfigContext config) {
        this(config.asConfigBean(ImmutableKafkaConfiguration.class));
    }

    KafkaPublisher(final ImmutableKafkaConfiguration config) {
        this.config = config;
        this.kafkaProducer = KafkaProducerFactory.create(this.config);

        LOG.info("Loaded Kafka publisher with config: {}", this.config);
    }

    public void publish(final Message message) {
        final String topic = Optional.ofNullable(this.config.getTopics().get(message.getEventType().name()))
                .orElseThrow(() -> new IllegalArgumentException("Unmapped event type " + message.getEventType()));

        final ProducerRecord<String, Message> record = new ProducerRecord<>(topic, message);

        kafkaProducer.send(record, this::kafkaSendCallback);
    }

    private void kafkaSendCallback(final RecordMetadata metadata, final Exception e) {
        if (e != null) {
            LOG.error("Failed to publish event with metadata {}", metadata, e);
        }
    }
}
```

## Bridge Implementation
And the final piece of the puzzle is the bridge itself
```java
@Channel("*")
public class KafkaBridge implements MessageSubscriber {
    private final KafkaPublisher kafkaPublisher;

    @Inject
    public KafkaBridge(final KafkaPublisher kafkaPublisher) {
        this.kafkaPublisher = kafkaPublisher;
    }

    @Override
    public void onMessage(final Message message) {
        kafkaPublisher.publish(message);
    }
}
```
