import 'nullstack';
import { services } from 'services';
import { Language, Models } from '_@types';

declare module 'nullstack' {
  export interface NullstackSettings {
    blog_posts: Models.BlogPost[];
  }

  export interface NullstackPage {
    not_found: boolean;
  }

  export interface BaseNullstackClientContext {
    language: Language;
  }
  export interface BaseNullstackServerContext {
    services: typeof services;
  }
}
