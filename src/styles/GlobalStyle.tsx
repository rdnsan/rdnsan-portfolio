import { createGlobalStyle } from 'styled-components';
import variables from './variables';

const GlobalStyle = createGlobalStyle`
  ${variables}
  
  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  ::selection {
    background-color: var(--light-slate);
    color: var(--navy);
  }

  /* :focus {
    outline: 2px dashed var(--blue);
    outline-offset: 3px;
  } */

  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-slate);
  }

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ghostwhite;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--slate);
    border: 3px solid ghostwhite;
    border-radius: 10px;
    &:hover {
      background-color: var(--light-slate);
    }
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--white);
    color: var(--navy);
    font-family: var(--font-sans);
    overflow-x: hidden;
  }

  .sticky {
    height: 70px !important;
    background-color: rgba(255, 255, 255, 0.5) !important;
    backdrop-filter: blur(10px);
    box-shadow: 0 10px 30px -10px var(--navy-shadow);
  }

  section {
    padding: 6.25rem 0;
    @media (max-width: 569px) {
      padding: 2rem 0;
    }
  }
  
  body.blur {
    overflow: hidden;
    height: 100%;
  }
  
  body.blur #content > * {
    filter: blur(5px) brightness(0.7);
    transition: var(--transition);
    pointer-events: none;
    user-select: none;
  }
`;

export default GlobalStyle;
