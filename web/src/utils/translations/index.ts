export const get_language_from_locale = (locale?: string) => {
  const language = (locale?.split('-')[0] || 'en') as 'en' | 'fr' | 'pt' | 'es';

  return language;
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
      fr: "Développeur, entusiastique de Rubik's cube et amoureuse de la musique.",
      es: 'Desarrollador, entusiasta del cubo de rubik y amante de la música.',
    },
    learner: {
      en: 'Always a learner',
      pt: 'Sempre um aprendiz',
      fr: 'Toujours un apprenti',
      es: 'Siempre un aprendiz',
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
          fr: 'Un développeur de %AGE% ans passionné par la technologie, la création, les puzzles et les langues. Toujours intéressé par la musique et les expériences internationales en général.',
          es: 'Un desarrollador de %AGE% años interesado por la tecnología, la creación, los puzzles y las lenguajes. Mucho interessado por la música y experiencias internacionales en general',
        },
        button: {
          en: 'More',
          pt: 'Mais',
          fr: 'Plus',
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
          pt: 'Eu gosto de fazer coisas prontas e fazê-las do jeito certo, prestando atenção aos detalhes, acessibilidade e sempre procurando por novos desafios e aprender novas tecnologias',
          fr: "J'aime faire des choses et les faire correctement, en faisaint aussi attention aux détails, l'accessibilité et toujours recherchant des nouveaux défis pour apprendre de nouvelles technologies",
          es: 'Me gusta hacer cosas y hacerlas bien, haciendo cuenta de los detalles, acessibilidad y siempre buscando nuevos desafios y nuevas tecnologías',
        },
        button: {
          en: 'Browse portfolio',
          pt: 'Navegar pelo portfólio',
          fr: 'Parcourir le portefeuille',
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
      fr: ['Je développe professionnellement depuis ', 'plus de %YEARS% ans'],
      es: ['He desarrollado profesionalmente por ', 'más de %YEARS% años'],
    },
    subtitle: {
      en: 'I started coding Flash games back in 2010, when I still was a little kid and stumbled accross a GameMaker tutorial video on YouTube and since then I never stopped learning and looking for more!',
      pt: 'Comecei programando jogos em Flash em 2010, quando ainda era uma criança e esbarrei num tutorial de GameMaker no YouTube e desde então nunca parei de aprender e buscar por mais!',
      fr: "J'ai commencé à coder des jeux-vidéos Flash en 2010, lorsque j'étais toujours un enfant et j'avais tombé sur une vidéo tutorial de GameMaker sur YouTube et depuis ça, je n'ai jamais arrêté de continuer et d'en chercher toujours plus",
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
      fr: 'En cours de travail sur',
      es: 'Actualmente trabajando en',
    },
    github_repositories: {
      en: ['GitHub', 'repositories'],
      pt: ['Repositórios', 'GitHub'],
      fr: ['Répositories', 'GitHub'],
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
      fr: ['Ma longe ', 'liste de compétences'],
      es: ['Mi grande  ', 'lista de habilidades'],
    },
    subtitle: {
      en: 'Skills, toolbox and the technologies I like to work with and use to bring life to projects that I work on',
      pt: 'Habilidades, ferramentas e as tecnologias que gosto de trabalhar e usar para trazer vida aos projetos em que trabalho',
      fr: "Compétences, outils et technologies sur lesquels j'aime travailler et utiliser pour donner vie aux projets sur lesquels je travaille",
      es: 'Habilidades, herramientas y tecnologías en las que disfruto trabajar y utilizar para dar vida a los proyectos en los que trabajo',
    },
  },
  portfolio: {
    name: {
      en: 'Portfolio',
      pt: 'Portfólio',
      fr: 'Portefeuille',
      es: 'Portafolio',
    },
    title: {
      en: ['Quick tour through some cool ', "projects that I've made"],
      pt: ['Pequeno tour por alguns ', 'projetos que eu fiz'],
      fr: ['Petit tour sur quelques ', "projets que j'ai fait"],
      es: ['Pequeño tour por algunos ', 'proyectos que he hecho'],
    },
  },
  libraries: {
    name: {
      en: 'Widgets & Libraries',
      pt: 'Widgets & Bibliotecas',
      fr: 'Widgets & Bibliothéques',
      es: 'Widgets & Bibliotecas',
    },
    title: {
      en: ['Explore my latest ', 'widgets and libraries ', 'on Github'],
      pt: ['Explore os meus últimos ', 'widgets e bibliotecas ', 'no Github'],
      fr: ['Explore mes derniers', 'widgets et bibliothéques ', 'sur Github'],
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
  },
} as const;
