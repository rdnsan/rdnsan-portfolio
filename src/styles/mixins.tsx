import { css } from 'styled-components';

const mixins = {
  flexStart: css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  `,
  flexCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  flexEnd: css`
    display: flex;
    justify-content: flex-end;
    align-items: center;
  `,
  flexBetween: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  boxShadow: css`
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    &:hover,
    &:focus {
      box-shadow: 0 20px 30px -15px var(--navy-shadow);
    }
  `,
  link: css`
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    transition: var(--transition);
    &:hover,
    &:focus,
    &:active {
      color: var(--blue);
      outline: 0;
    }
  `,
  inlineLink: css`
    position: relative;
    display: inline-block;
    text-decoration: none;
    color: inherit;
    &:hover,
    &:focus,
    &:active {
      outline: 0;
      &:after {
        transform: scaleX(1);
      }
    }
    &::after {
      display: block;
      content: '';
      border-bottom: 2px solid #9ed5f4;
      transform: scaleX(0);
      transition: transform 250ms ease-in-out;
    }
  `,

  fancyList: css`
    padding: 0;
    margin: 0;
    list-style: none;
    /* font-size: var(--fz-lg); */
    /* overflow: hidden; */
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    gap: 0 10px;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      font-size: var(--fs-xs);
      &:before {
        content: '➤';
        position: absolute;
        left: 0;
        color: var(--blue);
        /* font-size: var(--fs-xs);
        line-height: 12px; */
      }
    }
  `,
};

export default mixins;
