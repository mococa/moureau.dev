import { Models, Language } from '_@types';

export namespace Blog {
  export interface GetBlogPostsOutput {
    posts: Models.BlogPost[];
  }

  export interface CreateBlogPostInput {
    title: string;
    body: string;
    description: string;
    author: string;
    language: Language;
    image: string;
  }

  export interface CreateBlogPostOutput {
    post: Models.BlogPost;
  }

  export interface DeleteBlogPostInput {
    post_id: number;
  }

  export interface EditBlogPostInput {
    id: number;
    title: string;
    body: string;
    description: string;
    author: string;
    language: Language;
    image: string;
  }

  export interface EditBlogPostOutput {
    post: Models.BlogPost;
  }
}
