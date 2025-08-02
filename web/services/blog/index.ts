/* ---------- APIs ---------- */
import { api } from '../../services';

/* ---------- Service Types ---------- */
import { Blog } from './@types';

/* ---------- Services ---------- */
const getPosts = () => {
  return api.get<Blog.GetBlogPostsOutput>('/blog/posts');
};

const createPost = ({
  title,
  author,
  body,
  description,
  image,
  language,
}: Blog.CreateBlogPostInput) => {
  return api.post<Blog.CreateBlogPostOutput>('/blog/posts', {
    title,
    author,
    body,
    description,
    image,
    language,
  });
};

const editPost = ({
  id,
  title,
  author,
  body,
  description,
  image,
  language,
}: Blog.EditBlogPostInput) => {
  return api.post<Blog.EditBlogPostOutput>(`/blog/posts/update/${id}`, {
    title,
    author,
    body,
    description,
    image,
    language,
  });
};

export const deletePost = ({ post_id }: Blog.DeleteBlogPostInput) => {
  return api.get(`/blog/posts/delete/${post_id}`);
};

export const blog_service = {
  createPost,
  getPosts,
  deletePost,
  editPost,
} as const;
