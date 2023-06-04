/* ---------- External ---------- */
import { formatRelative } from 'date-fns';
import { enUS as en, fr, es, ptBR as pt } from 'date-fns/esm/locale';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  date: Date;
  label: string;
  href?: string;
  language: Language;
}

export const ShownDate = ({ date, href, label, language }: Props) => (
  <div class="cool-date">
    <b title={date.toLocaleString()}>
      {formatRelative(date, new Date(), {
        locale: locale(language),
      })}
    </b>

    <span>/</span>

    {href ? (
      <a href={href}>
        <b>{label}</b>
      </a>
    ) : (
      <b>{label}</b>
    )}
  </div>
);

const format_relative_locale: Record<string, string> = {
  yesterday: "'Yesterday'", // Yesterday
  today: "'Today'", // Today
  other: 'dd/MM', // 12/02
  other_year: 'dd/MM/yyyy', // 12/02/2001
};

const locales = {
  en,
  pt,
  fr,
  es,
};

const locale = (lang: Language) => ({
  ...locales[lang],
  formatRelative: (token: string, string_date: string) => {
    const date = new Date(string_date);

    if (date.getFullYear() !== new Date().getFullYear()) {
      return format_relative_locale.other_year;
    }

    const translations = {
      today: {
        en: "'Today'",
        pt: "'Hoje'",
        fr: "'Aujourd’hui'",
        es: "'Hoy'",
      },
      yesterday: {
        en: "'Yesterday'",
        pt: "'Ontem'",
        fr: "'Hier'",
        es: "'Ayer'",
      },
    };

    const formatting = format_relative_locale[token]
      .replace("'Today'", translations.today[lang])
      .replace("'Yesterday'", translations.yesterday[lang]);

    return formatting || format_relative_locale.other;
  },
});
