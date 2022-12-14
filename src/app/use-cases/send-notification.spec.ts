import { SendNotification } from './send-notification';

describe('Send notification', () => {
  test('Ser capaz de enviar uma notificação', async () => {
    const sendNotification = new SendNotification();

    const { notification } = await sendNotification.execute({
      content: 'Notificação de teste',
      category: 'social teste',
      recipientId: 'recipient-id-teste',
    });

    expect(notification).toBeTruthy();
  });
});
