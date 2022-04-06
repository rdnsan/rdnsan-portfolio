import screenshot from '../../public/project.png';

interface IProject {
  image: StaticImageData;
  title: string;
  description: string;
  tools: Array<string>;
  source: 'open' | 'close';
  link: {
    target?: string;
    source?: string;
  };
}

export const projects: IProject[] = [
  {
    image: screenshot,
    title: 'My Personal Blog',
    description: 'My personal blog built with Laravel 9, MySQL and Bootstrap.',
    tools: ['Laravel', 'MySQL', 'Bootstrap'],
    source: 'open',
    link: {
      source: 'https://github.com/rdnsan/rdnsan-blog',
    },
  },
  {
    image: screenshot,
    title: 'Wali Murid',
    description: 'Fullstack App for student parent built with MERN stack.',
    tools: ['Next.js', 'Express', 'MongoDB'],
    source: 'close',
    link: {},
  },
  {
    image: screenshot,
    title: 'Topup Game Online',
    description:
      'Fullstack App Topup Voucher Game Online built with MERN stack.',
    tools: ['Next.js', 'Express', 'MongoDB'],
    source: 'open',
    link: {
      target: 'https://rdnsan-store.herokuapp.com',
      source: 'https://github.com/rdnsan/store-go',
    },
  },
  {
    image: screenshot,
    title: 'Hexaverse',
    description:
      'Hexaverse Web Company Profile built with GatsbyJS, GraphQL and styled-components.',
    tools: ['GatsbyJS', 'styled-components'],
    source: 'close',
    link: {
      target: 'https://hexaverse.gatsbyjs.io',
    },
  },
  {
    image: screenshot,
    title: 'Library Bookshelf',
    description:
      'Progressive Web Apps for manage bookshelf library built with TypeScript + Webpack.',
    tools: ['TypeScript', 'Webpack', 'CSS'],
    source: 'open',
    link: {
      target: 'https://library-bookshelf.vercel.app/',
      source: 'https://github.com/rdnsan/library-bookshelf',
    },
  },
  {
    image: screenshot,
    title: 'Movie Catalogue',
    description:
      'Progressive Web Apps for showing list movies, SPA built with Vanilla JavaScript.',
    tools: ['JS', 'Webpack', 'TMDB API'],
    source: 'open',
    link: {
      target: 'https://movie-catalogue.pages.dev/',
      source: 'https://github.com/rdnsan/movie-catalogue',
    },
  },
];
