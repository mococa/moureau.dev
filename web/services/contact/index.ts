import { api } from '../../services';
import { Contact } from './@types';

export const sendMessage = ({
  body,
  email,
  name,
}: Contact.SendMessageInput) => {
  return api.post('/contact', { body, email, name });
};

export const contact_service = {
  sendMessage,
} as const;
