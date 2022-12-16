import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notification',
        brokers: ['immense-hound-5303-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'aW1tZW5zZS1ob3VuZC01MzAzJGoZxtKY-wrzisUbErwqQqE9vw7cwwo0_dYhoQ8',
          password:
            '35k8QIeNIQvvaTKYPHZqkmnDdXsmC_y2FTudIMdgs-qvWDGUyzUV4lxbrqiSMxEXfqu-QA==',
        },
        ssl: true,
      },
    });
  }

  async onModuleDestroy() {
    await this.close();
  }
}
