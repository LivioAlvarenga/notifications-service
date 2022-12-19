import { Kafka } from 'kafkajs';
import { randomUUID } from 'node:crypto';

async function bootstrap() {
  const kafka = new Kafka({
    clientId: 'test-kafka-producer',
    brokers: ['immense-hound-5303-us1-kafka.upstash.io:9092'],
    sasl: {
      mechanism: 'scram-sha-256',
      username:
        'aW1tZW5zZS1ob3VuZC01MzAzJGoZxtKY-wrzisUbErwqQqE9vw7cwwo0_dYhoQ8',
      password:
        '35k8QIeNIQvvaTKYPHZqkmnDdXsmC_y2FTudIMdgs-qvWDGUyzUV4lxbrqiSMxEXfqu-QA==',
    },
    ssl: true,
  });

  const producer = kafka.producer();

  await producer.connect();

  await producer.send({
    topic: 'notifications.send-notification',
    messages: [
      {
        value: JSON.stringify({
          content: 'Nova solicitação de amizade com kafka producer',
          category: 'social',
          recipientId: randomUUID(),
        }),
      },
    ],
  });

  await producer.disconnect();
}
bootstrap();
