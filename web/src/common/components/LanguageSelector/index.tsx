/* ---------- External ---------- */
import Nullstack, { NullstackClientContext } from 'nullstack';

/* ---------- Assets ---------- */
import { Chevron } from '_common/assets/SVG/Chevron';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: 'pt' | 'en' | 'fr' | 'es';
}

export class LanguageSelector extends Nullstack<Props> {
  /* ---------- Proxies ---------- */
  menu_open: boolean = false;
  label: string = 'Select a language';

  /* ---------- Handlers ---------- */
  _handleCloseMenu = (event: KeyboardEvent) => {
    if (event.key === 'Escape') this.menu_open = false;
  };

  /* ---------- Renderers ---------- */
  renderLanguageSelectorMenu({ language: chosen_language }: Props) {
    return (
      <ul class="language-menu-list">
        {(['pt', 'en', 'fr', 'es'] as const).map(language => (
          <li
            onmouseover={() => (this.label = get_label({ language }))}
            aria-selected={language === chosen_language}
          >
            <a href={`/${get_locale_from_language({ language })}`}>
              <img
                src={get_flag({ language })}
                alt="language"
                height={56}
                width={56}
              />
            </a>
          </li>
        ))}
      </ul>
    );
  }

  /* ---------- Life cycles ---------- */
  hydrate({ page }: NullstackClientContext<Props>) {
    this.label = get_label({
      language: (page.locale.split('-')[0] as Props['language']) || 'en',
    });

    document.body.addEventListener('keydown', this._handleCloseMenu);
  }

  terminate() {
    document.body.removeEventListener('keydown', this._handleCloseMenu);
  }

  /* ---------- Render ---------- */
  render({ language }: Props) {
    return (
      <>
        <button class="language-button" onclick={() => (this.menu_open = true)}>
          <Chevron />

          <img
            src={get_flag({ language })}
            alt="language"
            height={22}
            width={22}
          />
        </button>

        {this.menu_open && (
          <div class="language-menu" onclick={() => (this.menu_open = false)}>
            <h2>{this.label}</h2>

            {this.renderLanguageSelectorMenu({ language })}

            <small>Press Esc or click anywhere to close this</small>
          </div>
        )}
      </>
    );
  }
}

const get_flag = ({ language }: Props) => {
  const suffix = {
    pt: 'br',
    en: 'uk',
    fr: 'fr',
    es: 'es',
  };

  return `https://hatscripts.github.io/circle-flags/flags/${suffix[language]}.svg`;
};

const get_label = ({ language }: Props) => {
  const labels = {
    pt: 'Selecione um idioma',
    en: 'Select a language',
    fr: 'Choisissez une langue',
    es: 'Elija un idioma',
  };

  return labels[language];
};

const get_locale_from_language = ({ language }: Props) => {
  const locales = {
    en: '',
    pt: 'pt-BR',
    es: 'es-ES',
    fr: 'fr-FR',
  };

  return locales[language];
};
