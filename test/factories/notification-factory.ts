import { Content } from '@app/entities/Content';
import { Notification, NotificationProps } from '@app/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('Outra solicitação de amizade!'),
    recipientId: 'recipient-2',
    ...override,
  });
}
