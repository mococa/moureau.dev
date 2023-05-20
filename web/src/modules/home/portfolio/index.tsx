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
              .map(({ title, description, url }) => (
                <Card title={title} description={description} url={url} />
              ))}
          </div>

          <div class="column full-width gap-lg">
            {portfolio_projects
              .slice(2, 4)
              .map(({ title, description, url }) => (
                <Card title={title} description={description} url={url} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const portfolio_projects = [
  {
    title: 'Example',
    description: 'Example description of a portfolio project',
    url: 'https://github.com/mococa',
  },
  {
    title: 'Example',
    description: 'Example description of a portfolio project',
    url: 'https://github.com/mococa',
  },
  {
    title: 'Example',
    description: 'Example description of a portfolio project',
    url: 'https://github.com/mococa',
  },
  {
    title: 'Example',
    description: 'Example description of a portfolio project',
    url: 'https://github.com/mococa',
  },
];
