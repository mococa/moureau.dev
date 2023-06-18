/* ---------- External ---------- */
import Nullstack, {
  NullstackClientContext,
  NullstackServerContext,
} from 'nullstack';

/* ---------- Common Components ---------- */
import { Footer } from '_common/components/Footer';
import { Navbar } from '_common/components/Navbar';
import { HyperMd } from '_common/components/HyperMd';

/* ---------- Types ---------- */
import { Language, Models } from '_@types';
import { FormInput } from '_common/components/FormInput';

/* ---------- Utils ---------- */
import { setup_post } from '_utils/setup-post';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class CMS extends Nullstack<Props> {
  /* ---------- Proxies ---------- */
  selected_article: string;
  articles: Models.BlogPost[] = [];
  title: string;
  description: string;
  author: string;
  image: string;
  language: Language;
  body: string;
  editor: {
    getDoc(): {
      setValue(value: string);
    };
  };

  /* ---------- Server Functions ---------- */
  static async CreatePost({
    body,
    settings,
    services,
  }: Partial<NullstackServerContext<{ body: Models.BlogPost }>>) {
    const { data } = await services.blog.createPost({ ...body });

    settings.blog_posts.push(setup_post(data.post));

    settings.blog_posts.sort(({ created_at }, next_post) =>
      next_post.created_at.localeCompare(created_at),
    );
    return data;
  }

  static async DeletePost({
    post_id,
    settings,
    services,
  }: Partial<NullstackServerContext<{ post_id: number }>>) {
    const { data } = await services.blog.deletePost({ post_id });

    settings.blog_posts = settings.blog_posts.filter(
      ({ id }) => id !== post_id,
    );

    return data;
  }

  static async EditPost({
    body,
    settings,
    services,
  }: Partial<NullstackServerContext<{ body: Models.BlogPost }>>) {
    try {
      const { data } = await services.blog.editPost({ ...body });

      settings.blog_posts = settings.blog_posts
        .map(post => {
          if (post.id === body.id) {
            return setup_post(data.post);
          }

          return post;
        })
        .sort(({ updated_at }, next_post) =>
          next_post.updated_at.localeCompare(updated_at),
        );

      return data;
    } catch (error) {
      console.log(error);
    }
  }

  /* ---------- Life cycle ---------- */
  initiate({ settings }: NullstackClientContext) {
    this.articles = settings.blog_posts || [];
  }

  prepare({ page, language, settings }: NullstackClientContext<Props>) {
    page.title = 'Moureau.dev - CMS';
    page.description = 'Moureau.dev Content Management System page';

    this.language = language;
    this.articles = settings.blog_posts || [];
  }

  /* ---------- Handlers ---------- */
  handleSelectPost({
    page,
    post_id,
  }: Partial<NullstackClientContext<{ post_id: number }>>) {
    const post = this.articles.find(({ id }) => id === Number(post_id));

    if (!post) return (page.not_found = true);

    this.title = post.title;
    this.author = post.author;
    this.body = post.body;
    this.description = post.description;
    this.image = post.image;
    this.language = post.language;
    this.selected_article = String(post_id);
    this.editor.getDoc().setValue(post.body);
  }

  handleResetSelection() {
    this.title = '';
    this.author = '';
    this.body = '';
    this.description = '';
    this.image = '';
    this.selected_article = '';
    this.editor.getDoc().setValue('');
  }

  async handleCreatePost({}) {
    const body = {
      title: this.title,
      description: this.description,
      author: this.author,
      image: this.image,
      language: this.language,
      body: this.body,
    } as Models.BlogPost;

    const { post } = await CMS.CreatePost({ body });

    alert('Post successfully created');

    this.articles = [setup_post(post), ...this.articles];

    this.handleResetSelection();
  }

  async handleEditPost() {
    const body = {
      title: this.title,
      description: this.description,
      author: this.author,
      image: this.image,
      language: this.language,
      body: this.body,
      id: Number(this.selected_article),
    } as Models.BlogPost;

    const { post } = await CMS.EditPost({ body });

    this.articles = this.articles.map(p => {
      if (p.id === body.id) {
        return setup_post(post);
      }

      return p;
    });

    alert('Post successfully edited');
  }

  async handleDeletePost() {
    if (!confirm('Are you sure you want to delete this post?')) return;

    const post_id = Number(this.selected_article);

    await CMS.DeletePost({ post_id });

    this.articles = this.articles.filter(({ id }) => id !== post_id);

    alert('Post successfully deleted');

    this.handleResetSelection();
  }

  /* ---------- Renderers ---------- */
  renderLanguageSelector({ language }: Partial<Props>) {
    const { inputs } = translations.cms;

    return (
      <label class="language-input-label">
        <span>{inputs.language[language]}</span>

        <ul class="language-menu-list">
          {(['pt', 'en', 'fr', 'es'] as const).map(language => (
            <li aria-selected={language === this.language ? 'true' : 'false'}>
              <a onclick={() => (this.language = language)}>
                <img
                  src={get_flag({ language })}
                  alt="language"
                  height={24}
                  width={24}
                />
              </a>
            </li>
          ))}
        </ul>
      </label>
    );
  }

  renderArticles({ language }: Partial<NullstackClientContext>) {
    const { articles } = translations.cms;

    return (
      <div class="paper gap-md">
        <h3>{articles[language]}</h3>

        <ul class="articles-list">
          {this.articles.map(({ title, id }) => (
            <li>
              <a
                href="#"
                onclick={() => {
                  this.handleSelectPost({ post_id: id });
                }}
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  renderCreatePostHeader({ language }: Partial<NullstackClientContext>) {
    const { title, button } = translations.cms;

    return (
      <header class="row space-between">
        <h2>{title.new_post[language]}</h2>

        <div class="row">
          <button class="expand-button">{button.create_post[language]}</button>
        </div>
      </header>
    );
  }

  renderEditPostHeader({ language }: Partial<NullstackClientContext>) {
    const { title, button } = translations.cms;

    return (
      <header class="row space-between">
        <div class="row gap-md">
          <button
            class="expand-button"
            type="button"
            onclick={this.handleResetSelection}
          >
            {button.back[language]}
          </button>

          <h2>{title.edit_post[language]}</h2>
        </div>

        <div class="row gap-md">
          <button class="expand-button">{button.save_changes[language]}</button>

          <button
            type="button"
            class="expand-button delete"
            onclick={this.handleDeletePost}
          >
            {button.delete_post[language]}
          </button>
        </div>
      </header>
    );
  }

  /* ---------- Render ---------- */
  render({ language }: Props) {
    const { inputs } = translations.cms;

    return (
      <main class="cms-page">
        <Navbar language={language} />

        <div class="content">
          <h1>Moureau.dev Blog CMS</h1>

          <div class="row gap-md">
            <form
              class="paper gap-lg"
              onsubmit={
                this.selected_article
                  ? this.handleEditPost
                  : this.handleCreatePost
              }
            >
              {this.selected_article
                ? this.renderEditPostHeader({})
                : this.renderCreatePostHeader({})}

              <FormInput label={inputs.title[language]} name="title">
                <input
                  name="title"
                  bind={this.title}
                  data-value={this.title || ''}
                  required={true}
                />
              </FormInput>

              <FormInput
                label={inputs.description[language]}
                name="description"
              >
                <input
                  name="description"
                  bind={this.description}
                  data-value={this.description || ''}
                  required={true}
                />
              </FormInput>

              <FormInput label={inputs.author[language]} name="author">
                <input
                  name="author"
                  bind={this.author}
                  data-value={this.author || ''}
                  required={true}
                />
              </FormInput>

              <FormInput label={inputs.image[language]} name="image">
                <input
                  name="image"
                  bind={this.image}
                  data-value={this.image || ''}
                  required={true}
                />
              </FormInput>

              <hr />

              {this.renderLanguageSelector({})}

              <HyperMd
                onChange={content => (this.body = content)}
                defaultValue={this.body}
                getEditor={editor => (this.editor = editor)}
              />
            </form>

            {this.renderArticles({})}
          </div>
        </div>

        <Footer />
      </main>
    );
  }
}

const get_flag = ({ language }: { language: Language }) => {
  const suffix = {
    pt: 'br',
    en: 'uk',
    fr: 'fr',
    es: 'es',
  };

  return `https://hatscripts.github.io/circle-flags/flags/${suffix[language]}.svg`;
};
