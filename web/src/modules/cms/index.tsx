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

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class CMS extends Nullstack<Props> {
  /* ---------- Proxies ---------- */
  articles: Models.BlogPost[] = [];
  title: string = '';
  description: string = '';
  author: string = '';
  image: string = '';
  language: Language;
  body: string = '';

  /* ---------- Server Functions ---------- */
  static async CreatePost({
    body,
    secrets,
  }: Partial<NullstackServerContext<{ body: string }>>) {
    await fetch(`${secrets.apiEndpoint}/blog/posts`, {
      method: 'POST',
      body,
    });
  }

  /* ---------- Life cycle ---------- */
  async prepare({ page, language }: NullstackClientContext<Props>) {
    page.title = 'Moureau.dev - CMS';
    page.description = 'Moureau.dev Content Management System page';

    this.language = language;
  }

  /* ---------- Handlers ---------- */
  async handleCreatePost({}) {
    const body = JSON.stringify({
      title: this.title,
      description: this.description,
      author: this.author,
      image: this.image,
      language: this.language,
      body: this.body,
    });

    await CMS.CreatePost({ body });
  }

  render() {
    return (
      <main class="cms-page">
        <Navbar />

        <div class="content">
          <h1>Moureau.dev Blog CMS</h1>

          <div class="row gap-md">
            <form class="paper gap-lg" onsubmit={this.handleCreatePost}>
              <div class="row space-between">
                <h2>New post</h2>

                <button class="expand-button">Create post</button>
              </div>

              <FormInput label="Title" name="title">
                <input
                  name="title"
                  bind={this.title}
                  data-value={this.title}
                  required={true}
                />
              </FormInput>

              <FormInput label="Description" name="description">
                <input
                  name="description"
                  bind={this.description}
                  data-value={this.description}
                  required={true}
                />
              </FormInput>

              <FormInput label="Author" name="author">
                <input
                  name="author"
                  bind={this.author}
                  data-value={this.author}
                  required={true}
                />
              </FormInput>

              <FormInput label="Image" name="image">
                <input
                  name="image"
                  bind={this.image}
                  data-value={this.image}
                  required={true}
                />
              </FormInput>

              <hr />

              <label class="language-input-label">
                <span>Language</span>

                <ul class="language-menu-list">
                  {(['pt', 'en', 'fr', 'es'] as const).map(language => (
                    <li aria-selected={language === this.language}>
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

              <HyperMd onChange={content => (this.body = content)} />
            </form>

            <div class="paper"></div>
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
