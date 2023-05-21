/* ---------- Common Components ---------- */
import { SectionTitle } from '_common/components/SectionTitle';
import { Card } from '_common/components/Card';

/* ---------- Styles ---------- */
import './styles.css';

export const PortfolioSection = () => {
  return (
    <section id="portfolio">
      <div class="portfolio column content">
        <SectionTitle title="Portfolio" href="#portfolio" />

        <div class="row gap-lg">
          <div class="column full-width gap-lg">
            <h2>
              Quick tour through some cool <b>projects that I've made</b>
            </h2>

            {portfolio_projects
              .slice(0, 2)
              .map(({ title, description, url, image }) => (
                <Card
                  title={title}
                  description={description}
                  url={url}
                  image={image}
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
