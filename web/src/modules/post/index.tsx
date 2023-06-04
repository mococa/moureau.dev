/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Modules ---------- */
import { NotFound } from '_modules/404';

/* ---------- Common Components ---------- */
import { Footer } from '_common/components/Footer';
import { Navbar } from '_common/components/Navbar';
import { ShownDate } from '_common/components/ShownDate';

/* ---------- Types ---------- */
import { Language, Models } from '_@types';

/* ---------- Styles ---------- */
import 'highlight.js/styles/vs2015.css';
import './styles.css';

interface Props {
  language: Language;
}

export class Post extends Nullstack {
  /* ---------- Proxies ---------- */
  post: Models.BlogPost;

  /* ---------- Life cycle ---------- */
  async initiate({ params, page, settings }: NullstackClientContext) {
    page.not_found = false;
    const post_id = String(params.id);

    const posts = settings.blog_posts || [];

    const post = posts.find(post => post.id === Number(post_id));

    if (!post) {
      page.not_found = true;
      return;
    }

    this.post = post;

    page.title = post.title;
    page.description = post.description;
    page.image = post.image;
  }

  render({ page, language }: NullstackClientContext<Props>) {
    if (page.not_found) return <NotFound language={language} />;

    if (!this.post) return null;

    return (
      <main class="post-page">
        <head>
          <meta name="twitter:image" content={this.post.image} />
        </head>

        <Navbar language={language} />

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
                  language={language}
                />
              )}
            </span>
          </header>

          <main
            class="content column"
            html={this.post?.content?.replace(/\\\//g, '/')}
          />
        </article>

        <Footer />
      </main>
    );
  }
}
