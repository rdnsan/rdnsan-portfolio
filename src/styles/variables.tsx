import { css } from 'styled-components';

const variables = css`
  :root {
    /* Color */
    --white: #f8f8ff;
    --navy: #0a192f;
    --blue: #9ed5f4;
    --green: #17bbaf;
    --slate: #7d86a1;
    --dark-slate: #525869;
    --light-slate: #a8b2d1;
    --navy-shadow: rgba(2, 12, 27, 0.2);

    --light-navy: #112240;

    /* --slate: #8892b0; */
    --red: #ed1c24;
    --lightest-navy: #28508c;
    --lightest-slate: #ccd6f6;
    /* --dark-slate: #495670; */

    /* Font */
    --font-sans: 'Inter', sans-serif;
    --fs-xxs: 12px;
    --fs-xs: 13px;
    --fs-sm: 14px;
    --fs-md: 16px;
    --fs-lg: 18px;
    --fs-xl: 20px;
    --fs-xxl: 22px;
    --fs-heading: 32px;

    /* Transition */
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition-05: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);

    /* Hamburger */
    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
