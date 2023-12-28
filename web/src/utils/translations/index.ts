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
      en: "Developer, designer, Rubik's cube enthusiast, and music lover.",
      pt: 'Desenvolvedor, entusiasta de cubo mágico e amante da música.',
      fr: "Développeur, passionné de Rubik's cube et amoureux de la musique.",
      es: 'Desarrollador, entusiasta del cubo de rubik y amante de la música.',
    },
    learner: {
      en: 'Always learning',
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
      fr: ['Explore mes derniers ', 'widgets et bibliothèques ', 'sur Github'],
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
  latest_articles: {
    title: {
      en: 'Check out my latest articles and tutorials',
      pt: 'Dá uma olhada nos meus últimos posts e tutoriais',
      fr: "Jette un coup d'œil sur mes derniers articles et tutoriels",
      es: 'Mira mis Últimos artículos e tutoriais',
    },
    button: {
      en: 'Browse all articles',
      pt: 'Ver todas as postagens',
      fr: 'Parcourir tous les articles',
      es: 'Ver todos los artículos',
    },
  },
  blog: {
    featured: {
      en: 'Featured',
      pt: 'Em destaque',
      es: 'Último post',
      fr: 'Dernier article',
    },

    articles: {
      en: 'Articles',
      pt: 'Postagens',
      es: 'Artículos',
      fr: 'Articles',
    },
  },
  cms: {
    title: {
      new_post: {
        en: 'New post',
        pt: 'Nova postagem',
        es: 'Nueva publicación',
        fr: 'Nouvel article',
      },
      edit_post: {
        en: 'Edit post',
        pt: 'Editar postagem',
        es: 'Editar publicación',
        fr: 'Modifier article',
      },
    },
    button: {
      back: {
        en: 'Back',
        pt: 'Voltar',
        es: 'Volver',
        fr: 'Retour',
      },
      create_post: {
        en: 'Create post',
        pt: 'Criar postagem',
        es: 'Crear publicación',
        fr: 'Créer article',
      },
      save_changes: {
        en: 'Save changes',
        pt: 'Salvar alterações',
        es: 'Guardar cambios',
        fr: 'Sauvegarder les modifications',
      },
      delete_post: {
        en: 'Delete post',
        pt: 'Deletar postagem',
        es: 'Eliminar publicación',
        fr: 'Supprimer article',
      },
    },
    articles: {
      en: 'Articles',
      pt: 'Postagens',
      es: 'Artículos',
      fr: 'Articles',
    },
    inputs: {
      title: {
        en: 'Title',
        pt: 'Título',
        es: 'Título',
        fr: 'Titre',
      },
      description: {
        en: 'Description',
        pt: 'Descrição',
        es: 'Descripción',
        fr: 'Description',
      },
      author: {
        en: 'Author',
        pt: 'Autor',
        es: 'Autor',
        fr: 'Auteur',
      },
      image: {
        en: 'Image',
        pt: 'Imagem',
        es: 'Imagen',
        fr: 'Image',
      },
      language: {
        en: 'Language',
        pt: 'Idioma',
        es: 'Idioma',
        fr: 'Langue',
      },
    },
  },
  about_me: {
    title: {
      pt: 'Sobre mim',
      en: 'About me',
      fr: 'À propos de moi',
      es: 'Sobre mí',
    },
    description: {
      en: "I'm Luiz Felipe Moureau and this is my personal website. Here you can read about me, my passions, work and more.\nFeel free to contact me anytime.",
      pt: 'Sou Luiz, um desenvolvedor web do Brasil. Aqui você pode ler sobre mim, minhas paixões, trabalho e mais.\nSinta-se livre para contatar-me a qualquer momento.',
      fr: "Je suis Luiz, un développeur web du Brésil.  ici vous pouvez lire sur moi, mes passions, mon travail et plus.\nN'hésite pas à m'envoyer un message.",
      es: 'Soy Luiz, un desarrollador web de Brasil. Aquí puedes leer sobre mí, mis pasiones, trabajo y más.\n¡Sinta-te libre para contactarme!',
    },
    sections: {
      resume: {
        section_title: {
          en: 'In short...',
          pt: 'Em resumo...',
          fr: 'En court...',
          es: 'En resumen...',
        },
        profile: {
          resume_title: {
            en: "I'm Luiz Felipe, a web developer from Brazil.",
            pt: 'Sou Luiz, um desenvolvedor web do Brasil.',
            fr: 'Je suis Luiz, un développeur web du Brésil.',
            es: 'Soy Luiz, un desarrollador web de Brasil.',
          },
          resume_subtitle: {
            en: 'I love to code and create beautiful and responsive websites. I am currently working as a fullstack developer. Feel free to contact me anytime.',
            pt: 'Gosto de criar belos websites e aplicativos e responsivos. Atualmente atuo como desenvolvedor fullstack. Sinta-se livre para contatar-me a qualquer momento.',
            fr: "J'adore coder et créer des beaux sites et applications et responsives. Je suis actuellement développeur fullstack. N'hésite pas à m'envoyer un message.",
            es: 'Me gusta crear bellos sitios y resposivos. Hoy actuo como desarrollador fullstack. ¡Sinta-te libre para contactarme!',
          },
        },
        hobbies_and_passions: {
          en: "My hobbies and passions are speedcubing and music (I'm very eclectic and open to share my Spotify playlists!).",
          pt: 'Meus hobbies e paixões são speedcubing e música (sou muito eclético e aberto para compartilhar minhas playlists do Spotify!).',
          es: 'Mis pasiones y hobbies son el speedcubing y música (soy muy ecléctico y abierto para compartir mis playlists de Spotify!).',
          fr: 'Mes hobbies et passions sont le speedcubing et la musique (je suis très éclectique et ouvert à partager mes playlists Spotify !).',
        },
        culture: {
          en: "I'm from Rio de Janeiro, so going to the beach, wearing flip-flops, partying and enjoying life is more than just culture, it runs in my blood.",
          pt: 'Sou do Rio de Janeiro, então ir à praia, festas, usar chinelo e aproveitar a vida é mais que a cultura, é algo que corre no meu sangue.',
          es: 'Soy de Rio de Janeiro, entonces irme a la playa, festas, usar chanclas y aprovechar la vida es más que la cultura, es algo que corre en mi sangre.',
          fr: 'Je viens de Rio de Janeiro, donc aller à la plage, faire des fêtes, porter des tongs et profiter de la vie est plus que de la culture, ça court dans mon sang.',
        },
        studies: {
          en: "I'm currently studying Medical Physics at the Federal University of Rio de Janeiro - UFRJ, but I'm pausing it for a while to focus on my career.",
          pt: 'Atualmente estou cursando a Medicina Física na UFRJ, mas estou pausando momentaneamente para focar na minha carreira.',
          es: 'Actualmente estoy estudio la Física Médica en la Universidad Federal de Rio de Janeiro - UFRJ, pero estoy pausando por un momento para concentrar en mi carrera.',
          fr: "Je fais mes études en Physique Médicale à l'Université Federale de Rio de Janeiro - UFRJ, mais je me suis arrêté pour un moment pour me concentrer à ma carrière.",
        },
      },
      music: {
        section_title: {
          en: 'Music',
          pt: 'Música',
          fr: 'Musique',
          es: 'Música',
        },
        title: {
          en: 'Have I already said that I love music?',
          pt: 'Já falei que amo música?',
          fr: "J'ai déjà dit que j'aime la musique?",
          es: 'Ya dice que me gusta mucho la música?',
        },
        subtitle: {
          en: [
            "I'm most of my time listening to music from hardcore metal to classic, from Bossa Nova to Samba, from Electronic to Pop.",
            'I think that at this point, I simply cannot work without music.',
          ],
          pt: [
            'Na maior parte do tempo estou ouvindo música do metal à clássica, da Bossa Nova ao Samba, da Electrônica ao Pop.',
            'Acho que nesse ponto, eu já simplesmente não consigo trabalhar sem música',
          ],
          es: [
            'En la mayor parte del tiempo estoy escuchando música del metal a clásica, de Bossa Nova a Samba, de Electrónica a Pop.',
            'Penso que en este punto, simplemente no puedo trabajar sin música',
          ],
          fr: [
            "La plupart du temps je suis en train d'écouter de la musique du métal à la classique, de la Bossa Nova à la Samba, de l'Electrotonique à la Pop.",
            "Je pense qu'à ce point là, je ne peux tout simplement plus travailler sans musique",
          ],
        },
        types: {
          en: [
            "I have a type of music to listen to every mood that I'm in.",
            'Stressed? Metal',
            'Very stressed? Hardcore metal',
            'Focused? Classic',
            'Happy? Samba',
            'And so on...',
          ],
          pt: [
            'Tenho um tipo de música para escutar para cada humor que estou',
            'Estressado? Metal',
            'Muito estressado? Metal ainda mais pesado',
            'Focado? Clássica',
            'Feliz? Samba',
            'E assim por diante...',
          ],
          es: [
            'Tengo un tipo de música para escuchar para cada humor que estoy',
            'Estresado? Metal',
            'Muy estresado? Metal muy pesado',
            'Focado? Clásica',
            'Feliz? Samba',
            'Etcétera...',
          ],
          fr: [
            "J'ai un type de musique pour écouter pour chaque humour que je suis",
            'Stressé? Métal',
            'Très stressé? Métal encore plus lourd',
            'Concentré? Classique',
            'Heureux? Samba',
            'Et patati, patata...',
          ],
        },
        instruments: {
          en: [
            "I'm so into music that I have always been super interested in musical instruments. I had my piano phase, my electric guitar phase, my acoustic one phase.",
            'I had even an synthesizer phase',
          ],
          pt: [
            'Gosto muito e sempre fui muito interessado por instrumentos musicais. Já tive minha fase de piano, fase de guitarra, de violão...',
            'Já tive até minha fase de sintentizadores',
          ],
          es: [
            'Me gusta mucho y siempre fue muy interessado por instrumentos musicales. Ya tuve mi fase de piano, fase de guitarra electrica, acústica...',
            'Ya tuvo hasta mi fase de sintentizadores',
          ],
          fr: [
            "J'ai toujours été super intéressé par les instruments musicaux. J'ai eu ma phase de piano, de la guitarre électrique, de la guitarre acoustique...",
            "J'ai même eu ma phase de synthétiseurs",
          ],
        },
      },
      games: {
        section_title: {
          en: 'Games',
          pt: 'Jogos',
          fr: 'Jeux-vidéos',
          es: 'Juegos',
        },
        title: 'Videogames live in my heart',
        subtitle: {
          en: "I've always been a massive gamer. When my cousins had consoles, I was always with them playing on their Playstations and Xboxes.",
          pt: 'Sempre fui um gamer nato. Quando meus primos tinham consoles, eu sempre estava na casa deles jogando Playstation e Xbox.',
          es: 'Siempre fue un gamer nato. Cuando mis primos tenian consolas, yo sempre estaba con ellos jugando Play y Xbox.',
          fr: "J'ai toujours été un gamer. Quand mes cousins avaient des consoles, j'étais toujours avec eux en jouant sur la Playstation et Xbox.",
        },
        impact: {
          en: "Games had a great impact in my life and I'm proud of it. It taught me English and the way I think in general. That's why it needs a special section in my website.",
          pt: 'Os jogos tiveram um impacto imenso na minha vida e tenho orgulho disso. Me ensinaram inglês e o jeito que penso em geral. É por isso que merece uma seção especial no meu site.',
          es: 'Los juegos tuvieron un impacto muy grande en mi vida y eso me llena de orgullo. Me enseñaron inglés y la forma que penso en general. Por eso, merece una sección especial en mi site.',
          fr: "Les jeux ont eu un grand impact dans ma vie et j'en suis fier. Cela m'a appris l'anglais et ma façon de penser en général. C'est pourquoi il faut une section spéciale sur mon site.",
        },
        today: {
          en: 'Currently the games I play the most are any one that pops in on Xbox Live Game Pass and League of Legends with my friends.',
          pt: 'Atualmente os jogos que eu mais jogo são qualquer um que aparece no Game Pass do Xbox e também League of Legends com meus amigos.',
          es: 'Los juegos que juego actualmente aparecen en Xbos Live Game Pass. Además, juego también a League of Legends con mis amigos.',
          fr: 'Actuellement les jeux que je joue sont ceux qui apparaîent sur Xbox Live Game Pass et League of Legends avec mes amis.',
        },
      },
      languages: {
        section_title: {
          en: 'Languages',
          pt: 'Idiomas',
          fr: 'Langues',
          es: 'Idiomas',
        },
        title: {
          en: 'I really enjoy learning new languages',
          pt: 'Gosto muito de aprender novos idiomas',
          fr: "J'aime apprendre de nouvelles langues",
          es: 'Me encanta aprender nuevos idiomas',
        },
        polyglot: {
          en: 'I consider myself a polyglot as I can fluently speak English, French, Spanish and my mother tongue, Portuguese.',
          pt: 'Eu me considero um poliglota já que posso falar inglês, francês, espanhol e minha lingua materna, português.',
          es: 'Me considero un poliglota, ya que puedo hablar inglés, francés, español y mi lengua materna, portugués.',
          fr: "Je me considère un polyglote puisque je parle l'anglais, français, espagnol et de ma langue maternelle, le portugais.",
        },
        linguistics: {
          en: "I'm also a huge fan of the languages and linguistics of the world. I like to learn how languages are formed, etymologies and curiosities.",
          pt: 'Também sou um grande fã de idiomas do mundo e linguística. Gosto de aprender como os linguas são formadas, etimologias e curiosidades.',
          es: 'También soy un gran fan de los idiomas y la lingüística. Me gusta aprender cómo son las lenguas, las etimologías y las curiosidades lingüísticas.',
          fr: "Je suis aussi un grand fan des langues et linguistiques du monde. J'adore apprendre comment les langues sont formées, étymologies et curiosités.",
        },
        friends: {
          en: "I've got friends from all over the world as I'm very social and easily make friends online all the time.",
          pt: 'Tenho amigos de todos os lugares do mundo e eu sou super social e faço facilmente amigos online toda hora.',
          es: 'Tengo amigos de todos los lugares del mundo, soy super social y hago facilmente amigos online todas horas.',
          fr: "J'ai des amis partout le monde et je suis super social, je fais facillement des amis en-ligne tout le temps.",
        },
        learning: {
          en: "I'm currently learning German, Dutch and Brazilian Sign Language.",
          pt: 'Atualmente estou aprendendo alemão, holandês e LIBRAS.',
          es: 'Actualmente estoy aprendiendo alemán, holandés y la Lengua de Signos brasileña.',
          fr: "J'apprends actuallemment l'allemand, le néerlandais et la Langue de Signes Brésilienne.",
        },
      },
    },
  },
} as const;
