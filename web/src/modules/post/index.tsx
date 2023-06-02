import Nullstack, {
  NullstackClientContext,
  NullstackServerContext,
} from 'nullstack';

import { Footer } from '_common/components/Footer';
import { Navbar } from '_common/components/Navbar';
import { ShownDate } from '_common/components/ShownDate';

import { Models } from '_@types';

import 'highlight.js/styles/vs2015.css';
import './styles.css';

export class Post extends Nullstack {
  post: Models.BlogPost = null;

  static async getPost({
    post_id,
    settings,
  }: Partial<NullstackServerContext<{ post_id: string }>>) {
    const posts = (settings.blog_posts as unknown as Models.BlogPost[]) || [];

    return posts.find(post => post.id === Number(post_id));
  }

  async initiate({ params, page }: NullstackClientContext) {
    const post_id = String(params.id);

    const post = await Post.getPost({ post_id });

    this.post = post;

    page.title = post.title;
    page.description = post.description;

    // if (!this.post) throw new Error('Post not found');
  }

  render() {
    return (
      <main class="post-page">
        <Navbar />

        <header class="content column">
          <div>
            <h1>{this.post?.title}</h1>

            <span>{this.post?.description}</span>
          </div>
        </header>

        {this.post?.image && (
          <img class="content" src={this.post?.image} alt={this.post?.title} />
        )}

        <article class="content">
          <header class="row space-between">
            <h2>{this.post?.author}</h2>

            <span>
              {this.post?.created_at && (
                <ShownDate
                  date={new Date(this.post?.created_at)}
                  label="Articles"
                  href="/blog"
                />
              )}
            </span>
          </header>

          <main class="content column" html={this.post?.body} />
        </article>

        <Footer />
      </main>
    );
  }
}
