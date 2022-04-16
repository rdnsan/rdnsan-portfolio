import { useState, useRef } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { navLinks } from '@config';
import { useOnClickOutside } from '@hooks';

const StyledMenu = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

interface MenuProps {
  readonly menuOpen: boolean;
}

const HamburgerButton = styled.button<MenuProps>`
  display: none;
  @media screen and (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 21;
    margin-right: -12px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }

  .ham-box {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 24px;
  }

  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: 30px;
    height: 2px;
    border-radius: 4px;
    background-color: var(--blue);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${(props) => (props.menuOpen ? `0.12s` : `0s`)};
    transform: rotate(${(props) => (props.menuOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${(props) =>
        props.menuOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      left: auto;
      right: 0;
      width: 30px;
      height: 2px;
      border-radius: 4px;
      background-color: var(--blue);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }

    &::before {
      width: ${(props) => (props.menuOpen ? `30px` : `100%`)};
      top: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      opacity: ${(props) => (props.menuOpen ? 0 : 1)};
      transition: ${({ menuOpen }) =>
        menuOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }

    &::after {
      width: ${(props) => (props.menuOpen ? `30px` : `100%`)};
      bottom: ${(props) => (props.menuOpen ? `0` : `-10px`)};
      transform: rotate(${(props) => (props.menuOpen ? `-90deg` : `0`)});
      transition: ${({ menuOpen }) =>
        menuOpen ? 'var(--ham-after-active)' : 'var(--ham-after)'};
    }
  }
`;

const StyledSidebar = styled.aside<MenuProps>`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--white);
    box-shadow: -10px 0px 30px -15px var(--navy-shadow);
    z-index: 9;
    transform: translateX(${(props) => (props.menuOpen ? 0 : 100)}vw);
    visibility: ${(props) => (props.menuOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }

  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--navy);
    text-align: center;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;

    li {
      position: relative;
      margin: 0 auto 20px;
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
    }

    a {
      ${({ theme }) => theme.mixins.link};
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
`;

export default function Menu(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add('blur');
    } else {
      document.body.classList.remove('blur');
    }
  };

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(wrapperRef, () => {
    setMenuOpen(false);
    document.body.classList.remove('blur');
  });

  return (
    <StyledMenu>
      <div ref={wrapperRef}>
        <HamburgerButton
          onClick={toggleMenu}
          menuOpen={menuOpen}
          ref={buttonRef}
          aria-label='Menu'
        >
          <div className='ham-box'>
            <div className='ham-box-inner' />
          </div>
        </HamburgerButton>

        <StyledSidebar
          menuOpen={menuOpen}
          aria-hidden={!menuOpen}
          tabIndex={menuOpen ? 1 : -1}
        >
          <nav ref={navRef}>
            {navLinks && (
              <ul>
                {navLinks.map(({ url, name }, index) => (
                  <li key={index}>
                    <Link href={url}>
                      <a onClick={toggleMenu}>{name}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
}
