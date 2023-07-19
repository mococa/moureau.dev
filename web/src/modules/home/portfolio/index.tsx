/* ---------- Common Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';
import { Card } from '_common/components/Card';

/* ---------- Types ---------- */
import { Language } from '_@types';

/* ---------- Translations ---------- */
import { translations } from '_utils/translations';

/* ---------- Styles ---------- */
import './styles.css';

/* ---------- Interfaces ---------- */
interface Props {
  language: Language;
}

export const PortfolioSection = ({ language }: Props) => {
  const { name, title } = translations.portfolio;

  return (
    <section id="portfolio">
      <div class="portfolio column content">
        <SectionTitle title={name[language]} href="#portfolio" />

        <div class="row gap-lg">
          <div class="column full-width gap-lg">
            <h2>
              {title[language][0]}

              <b>{title[language][1]}</b>
            </h2>

            {portfolio_projects
              .slice(0, 2)
              .map(({ title, description, url, image }) => (
                <Card
                  title={title}
                  description={description}
                  url={url}
                  image={image}
                  target="_blank"
                />
              ))}
          </div>

          <div class="column full-width gap-lg">
            {portfolio_projects
              .slice(2, 4)
              .map(({ title, description, url, image }) => (
                <Card
                  title={title}
                  description={description}
                  url={url}
                  image={image}
                  target="_blank"
                />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const portfolio_projects = [
  {
    title: 'Go Mantine',
    description:
      'Boilerplate app with all the authentication flow from AWS Cognito on it, made with Go as back-end and NextJS on the front-end with Mantine',
    url: 'https://github.com/mococa/go-mantine',
    image: '/img/portfolio/go-mantine.jpg',
  },
  {
    title: 'Moureau.dev',
    description:
      'This very own website, made with Nullstack and Golang (Still under development)',
    url: 'https://github.com/mococa/moureau.dev',
    image: '/img/portfolio/moureau.dev.jpg',
  },

  {
    title: 'MERN Blog',
    description:
      'Quick blog with comment section, authentication, and own CMS made with the MERN stack',
    url: 'https://github.com/mococa/mern-blog-frontend',
    image: '/img/portfolio/mococa-blog.jpg',
  },
  {
    title: 'NS Chat',
    description:
      'Authenticated chat application made with Nullstack, Prisma, Socket.io, private rooms and DMs',
    url: 'https://github.com/mococa/ns-chat',
    image: '/img/portfolio/ns-chat.jpg',
  },
];
