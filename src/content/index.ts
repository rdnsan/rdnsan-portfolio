import { StaticImageData } from 'next/image';
import blog from '../../public/images/blog.png';
import waliMurid from '../../public/images/wali-murid.png';
import hexaverse from '../../public/images/hexaverse.png';
import libraryBookshelf from '../../public/images/library-bookshelf.png';
import movieCatalogue from '../../public/images/movie-catalogue.png';
import healthyCare from '../../public/images/healthy-care.png';

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
    image: blog,
    title: 'My Personal Blog',
    description: 'My personal blog built with Laravel 9, MySQL and Bootstrap.',
    tools: ['Laravel', 'MySQL', 'Bootstrap'],
    source: 'open',
    link: {
      source: 'https://github.com/rdnsan/oneyel-blog',
    },
  },
  {
    image: waliMurid,
    title: 'Wali Murid',
    description:
      'an application devoted to guardians of students in monitoring children’s development more exclusively.',
    tools: ['Next.js', 'TS', 'Express', 'MongoDB'],
    source: 'close',
    link: {},
  },
  {
    image: hexaverse,
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
    image: libraryBookshelf,
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
    image: movieCatalogue,
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
  {
    image: healthyCare,
    title: 'Healthy Care',
    description: 'Landing Page Covid-19 Statistic, built with Webpack.',
    tools: ['JS', 'Webpack', 'Covid19 API'],
    source: 'open',
    link: {
      target: 'https://healthy-care.pages.dev',
      source: 'https://github.com/rdnsan/healthy-care',
    },
  },
];
