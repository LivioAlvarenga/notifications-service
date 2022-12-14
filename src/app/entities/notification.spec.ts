import { Content } from './Content';
import { Notification } from './notification';

describe('Notification', () => {
  test('Ser capaz de criar uma notificação', () => {
    const notification = new Notification({
      content: new Content('Nova solicitação de amizade'),
      category: 'social',
      recipientId: 'exemple-recipient-id',
    });

    expect(notification).toBeTruthy();
  });
});
