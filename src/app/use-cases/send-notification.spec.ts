import { Notification } from '../entities/notification';
import { SendNotification } from './send-notification';

// Emulando um banco de dados (Desacoplamento de camadas)...
const notifications: Notification[] = [];

const notificationsRepository = {
  async create(notification: Notification) {
    notifications.push(notification);
  },
};

describe('Send notification', () => {
  test('Ser capaz de enviar uma notificação', async () => {
    const sendNotification = new SendNotification(notificationsRepository);

    await sendNotification.execute({
      content: 'Notificação de teste',
      category: 'social teste',
      recipientId: 'recipient-id-teste',
    });

    console.log(notifications);

    expect(notifications).toHaveLength(1);
  });
});
