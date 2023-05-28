import { Language } from '_@types';

export const get_language_from_locale = (locale?: string): Language => {
  const language = locale?.split('-')[0] || 'en';

  return language as Language;
};

export const translations = {
  navbar: {
    links: {
      home: {
        en: 'Home',
        pt: 'Início',
        fr: 'Accueil',
        es: 'Inicio',
      },
      about: {
        en: 'About',
        pt: 'Sobre',
        fr: 'À propos',
        es: 'Sobre',
      },
    },
  },
  hero: {
    title: {
      en: "I'm Luiz, a Web Developer",
      pt: 'Sou Luiz, um Desenvolvedor',
      fr: "C'est Luiz, un Développeur",
      es: 'Soy Luiz, un Desarrollador',
    },
    subtitle: {
      en: "Developer, Rubik's cube enthusiast, and music lover.",
      pt: 'Desenvolvedor, entusiasta de cubo mágico e amante da música.',
      fr: "Développeur, passionné de Rubik's cube et amoureux de la musique.",
      es: 'Desarrollador, entusiasta del cubo de rubik y amante de la música.',
    },
    learner: {
      en: 'Always a learner',
      pt: 'Sempre aprendendo',
      fr: 'Toujours en apprentissage',
      es: 'Siempre aprendiendo',
    },
    sections: {
      about: {
        title: {
          en: 'About me',
          pt: 'Sobre mim',
          fr: 'À propos de moi',
          es: 'Sobre mí',
        },
        text: {
          en: 'A %AGE% years old brazilian developer passionate about technology, design, puzzles and languages. Very into music and international experiences in general',
          pt: 'Um desenvolvedor brasileiro de %AGE% anos apaixonado por tecnologia, design, puzzles e linguagens. Muito interessado pela música e experiências internacionais em geral',
          fr: 'Développeur de %AGE% ans, passionné par la technologie, le design, les puzzles et les langues. Je suis très intéressé par la musique ainsi que par les expériences internationales en général',
          es: 'Un desarrollador de %AGE% años interesado por la tecnología, el design, los puzzles y las lenguajes. Mucho interessado por la música y experiencias internacionales en general',
        },
        button: {
          en: 'More',
          pt: 'Mais',
          fr: 'Plus sur moi',
          es: 'Más',
        },
      },
      work: {
        title: {
          en: 'My work',
          pt: 'Meu trabalho',
          fr: 'Mon travail',
          es: 'Mi trabajo',
        },
        text: {
          en: 'I like to get stuff done and done right, paying attention to details, accessibility and always looking for new challenges and learning new tech',
          pt: 'Gosto de criar coisas e fazê-las do jeito certo, prestando atenção aos detalhes, à acessibilidade e sempre procurando por novos desafios e aprender novas tecnologias',
          fr: "J'aime créer des choses et les faire correctement. Je prête ainsi une attention particulière aux détails, à l'accessibilité et je suis toujours à la recherche de nouveaux défis pour apprendre de nouvelles technologies",
          es: 'Me gusta hacer cosas y hacerlas bien, haciendo cuenta de los detalles, acessibilidad y siempre buscando nuevos desafios y nuevas tecnologías',
        },
        button: {
          en: 'Browse portfolio',
          pt: 'Meu portfólio',
          fr: 'Parcourir le portfolio',
          es: 'Navegar por el portafolio',
        },
      },
      follow_me: {
        en: 'Follow me',
        pt: 'Siga-me',
        fr: 'Suis-moi',
        es: 'Sigueme',
      },
    },
  },
  about: {
    name: {
      en: 'About me',
      pt: 'Sobre mim',
      fr: 'À propos de moi',
      es: 'Sobre mí',
    },
    title: {
      en: ["I've been professionally developing for ", 'over %YEARS% years'],
      pt: ['Desenvolvo profissionalmente há ', 'mais de %YEARS% anos'],
      fr: [
        'Je développe avec professionnalisme depuis ',
        'plus de %YEARS% ans',
      ],
      es: ['He desarrollado profesionalmente por ', 'más de %YEARS% años'],
    },
    subtitle: {
      en: 'I started coding Flash games back in 2010, when I still was a little kid and stumbled accross a GameMaker tutorial video on YouTube and since then I never stopped learning and looking for more!',
      pt: 'Comecei programando jogos em Flash em 2010, quando ainda era uma criança e esbarrei num tutorial de GameMaker no YouTube e desde então nunca parei de aprender e buscar por mais!',
      fr: "J'ai commencé à coder des jeux vidéo Flash en 2010 alors que j'étais encore un enfant. Puis je suis tombé sur une vidéo GameMaker sur Youtube. Depuis, je n'ai jamais arrêté d'apprendre et je suis toujours en quête d'amélioration",
      es: 'Comenzé a programar juegos Flash en 2010, cuando era aún un niño y habia tropezado en un tutorial de GameMaker en YouTube y desde entonces nunca he parado de aprender y buscar más!',
    },
    button: {
      en: 'More about me',
      pt: 'Mais sobre mim',
      fr: 'Plus sur moi',
      es: 'Más sobre mí',
    },
    currently_working_on: {
      en: 'Currently working on',
      pt: 'Atualmente trabalhando em',
      fr: 'Je travaille actuallement sur',
      es: 'Actualmente trabajando en',
    },
    github_repositories: {
      en: ['GitHub', 'repositories'],
      pt: ['Repositórios', 'GitHub'],
      fr: ['Dépôts', 'GitHub'],
      es: ['Repositorios', 'GitHub'],
    },
    apps_in_production: {
      en: ['Applications', 'in production'],
      pt: ['Aplicações', 'em produção'],
      fr: ['Applications', 'en production'],
      es: ['Aplicaciones', 'en producción'],
    },
    contributions: {
      en: "Through these years I've contributed to over %APPS_IN_PRODUCTION% applications in production, and I have over %PUBLIC_REPOSITORIES% public repositories on Github.",
      pt: 'Ao longo desses anos, contribuí para mais de %APPS_IN_PRODUCTION% aplicativos em produção e tenho mais de %PUBLIC_REPOSITORIES% repositórios públicos no Github.',
      fr: "Au cours de ces années, j'ai contribué à plus de %APPS_IN_PRODUCTION% applications en production et j'ai plus de %PUBLIC_REPOSITORIES% dépôts publics sur Github",
      es: 'A lo largo de estos años he contribuido con más de %APPS_IN_PRODUCTION% aplicaciones en producción y tengo más de %PUBLIC_REPOSITORIES% repositorios públicos en Github.',
    },
  },
  skills: {
    name: {
      en: 'My skills',
      pt: 'Minhas skills',
      fr: 'Mes compétences',
      es: 'Mis habilidades',
    },
    title: {
      en: ['My vast ', 'skill list'],
      pt: ['Minha vasta ', 'lista de habilidades'],
      fr: ['Ma longue ', 'liste de compétences'],
      es: ['Mi grande ', 'lista de habilidades'],
    },
    subtitle: {
      en: 'Skills, toolbox and the technologies I like to use to bring life to projects that I work on',
      pt: 'Competências, ferramentas e as tecnologias que gosto de usar para trazer vida aos projetos em que trabalho',
      fr: "Compétences, outils et technologies sur lesquels j'aime travailler et que j'aime utiliser pour donner vie à mes projets en cours",
      es: 'Habilidades, herramientas y tecnologías que me gustan utilizar para dar vida a los proyectos en que trabajo',
    },
  },
  portfolio: {
    name: {
      en: 'Portfolio',
      pt: 'Portfólio',
      fr: 'Portfolio',
      es: 'Portafolio',
    },
    title: {
      en: ['Quick tour through some cool ', "projects that I've made"],
      pt: ['Pequeno tour por alguns ', 'projetos que já fiz'],
      fr: ['Petit tour sur quelques ', "projets que j'ai fait"],
      es: ['Pequeño tour por algunos ', 'proyectos que he hecho'],
    },
  },
  libraries: {
    name: {
      en: 'Widgets & Libraries',
      pt: 'Widgets & Bibliotecas',
      fr: 'Widgets & Bibliothèques',
      es: 'Widgets & Bibliotecas',
    },
    title: {
      en: ['Explore my latest ', 'widgets and libraries ', 'on Github'],
      pt: ['Explore os meus últimos ', 'widgets e bibliotecas ', 'no Github'],
      fr: ['Explore mes derniers ', 'widgets et bibliothéques ', 'sur Github'],
      es: ['Explore mis últimos ', 'widgets y bibliotecas ', 'en Github'],
    },
    see_all: {
      en: 'See all',
      pt: 'Ver todos',
      fr: 'Voir tout',
      es: 'Ver todos',
    },
    see_more: {
      en: 'See more',
      pt: 'Ver mais',
      fr: 'Voir plus',
      es: 'Ver más',
    },
    see_less: {
      en: 'See less',
      pt: 'Ver menos',
      fr: 'Voir moins',
      es: 'Ver menos',
    },
  },
  not_found: {
    title: {
      en: 'Page not found',
      pt: 'Página não encontrada',
      fr: 'Page non trouvée',
      es: 'Página no encontrada',
    },

    subtitle: {
      en: "It seems the page you're looking for no longer exists on this website.",
      pt: 'Parece que a página que vocé está procurando não existe mais neste site.',
      fr: "Il semble que la page que vous recherchez n'existe plus sur ce site.",
      es: 'Parece que la página que estás buscando no longer existe en este sitio.',
    },

    button: {
      en: 'Back to homepage',
      pt: 'Voltar para a página inicial',
      fr: "Retour à la page d'accueil",
      es: 'Volver a la página principal',
    },
  },
  get_in_touch: {
    name: {
      en: 'Get in touch',
      pt: 'Contato',
      fr: 'Contacte-moi',
      es: 'Contacto',
    },
    title: {
      en: 'Interested in reaching out?',
      pt: 'Quer bater um papo?',
      fr: 'Voulez-vous papoter sur quoi ?',
      es: 'Quieres hablar un poco?',
    },
    subtitle: {
      en: "Let's chat",
      pt: 'Vamos conversar',
      fr: 'Parlons',
      es: 'Vamos conversar',
    },
    button: {
      en: 'Send message',
      pt: 'Enviar',
      fr: 'Envoyer',
      es: 'Enviar',
    },
    labels: {
      name: {
        en: 'Name',
        pt: 'Nome',
        fr: 'Nom',
        es: 'Nombre',
      },
      email: {
        en: 'E-mail',
        pt: 'E-mail',
        fr: 'Adresse e-mail',
        es: 'E-mail',
      },
      description: {
        en: 'Describe your project',
        pt: 'Descreva seu projeto',
        fr: 'Décris votre projet',
        es: 'Descreva tu proyecto',
      },
    },
  },
} as const;
