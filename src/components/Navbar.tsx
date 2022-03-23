import { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { Container } from '@styles';
import { navLinks } from '@config';
import logo from '../../public/logo.png';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  ${({ theme }) => theme.mixins.flexCenter};
  width: 100%;
  height: 97px;
  background-color: transparent;
  transition: var(--transition);
  z-index: 99;
`;

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexCenter};
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
`;

const StyledMenu = styled.ul`
  ${({ theme }) => theme.mixins.flexEnd};
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledList = styled.li`
  position: relative;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0 5px;
`;

const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  font-weight: 500;
  ${({ theme }) => theme.mixins.inlineLink}
`;

export default function Navbar() {
  useEffect(() => {
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      header?.classList.toggle('sticky', window.scrollY > 0);
    });
  }, []);

  return (
    <StyledHeader>
      <Container>
        <StyledNav>
          <a href='#'>
            <Image
              src={logo}
              alt='Rdnsan'
              placeholder='blur'
              width={42}
              height={42}
            />
          </a>
          <StyledMenu>
            {navLinks.map(({ url, name }, index) => (
              <StyledList key={index}>
                <Link href={url} passHref>
                  <StyledLink>{name}</StyledLink>
                </Link>
              </StyledList>
            ))}
          </StyledMenu>
          {/* menu */}
        </StyledNav>
      </Container>
    </StyledHeader>
  );
}
