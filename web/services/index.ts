/* ---------- External ---------- */
import axios from 'axios';

/* ---------- Services ---------- */
import { blog_service } from './blog';
import { contact_service } from './contact';

export const api = axios.create({
  baseURL: process.env.NULLSTACK_SECRETS_API_ENDPOINT,
});

export const services = {
  blog: blog_service,
  contact: contact_service,
} as const;
