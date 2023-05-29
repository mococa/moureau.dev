/* ---------- External ---------- */
import Nullstack, {
  NullstackClientContext,
  NullstackServerContext,
} from 'nullstack';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Common Components ---------- */
import { Link } from '_common/components/Link';
import { FormInput } from '_common/components/FormInput';
import { SectionTitle } from '_common/components/SectionTitle';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export class ContactSection extends Nullstack<Props> {
  /* ---------- Proxies ---------- */
  name: string = '';
  email: string = '';
  body: string = '';

  /* ---------- Server functions ---------- */
  static async NotifyContact({
    body,
    secrets,
  }: Partial<NullstackServerContext<{ body: string }>>) {
    fetch(`${secrets.apiEndpoint}/contact`, {
      method: 'POST',
      body,
    });
  }
  /* ---------- Handlers ---------- */
  async handleSubmit() {
    const body = JSON.stringify({
      name: this.name,
      email: this.email,
      body: this.body,
    });

    await ContactSection.NotifyContact({ body });

    alert('Message sent! I will get back to you shortly ✅');
  }

  render({ language }: Props) {
    const { name, title, subtitle, button, labels } = translations.get_in_touch;

    return (
      <section id="contact">
        <div class="row content">
          <div class="column">
            <SectionTitle title={name[language]} href="#contact" />

            <h3>{title[language]}</h3>

            <b>
              {subtitle[language]} <span>→</span>
            </b>
          </div>

          <form onsubmit={this.handleSubmit}>
            <FormInput name="name" label={labels.name[language]}>
              <input name="name" data-value={this.name} bind={this.name} />
            </FormInput>

            <FormInput name="email" label={labels.email[language]}>
              <input
                name="email"
                type="email"
                data-value={this.email}
                bind={this.email}
              />
            </FormInput>

            <FormInput name="body" label={labels.description[language]}>
              <textarea
                name="body"
                data-value={this.body}
                bind={this.body}
                rows={5}
              />
            </FormInput>

            <Link>{button[language]}</Link>
          </form>
        </div>
      </section>
    );
  }
}
