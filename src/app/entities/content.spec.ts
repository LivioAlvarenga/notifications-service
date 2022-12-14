import { Content } from './Content';

describe('Notification content', () => {
  test('Ser capaz de criar um conteúdo de notificação', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');

    expect(content).toBeTruthy();
  });

  test('Não deve ser capaz de criar um conteúdo com menos de 5 caracteres', () => {
    expect(() => new Content('aaaa')).toThrow();
  });

  test('Não deve ser capaz de criar um conteúdo com maior de 240 caracteres', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
});
