import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import { IconCodepen, IconGithub, IconLinkedin } from './icons';

const StyledSection = styled.section`
  width: 100%;

  .wrapper {
    text-align: center;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin: 16px 0;
  }

  p {
    line-height: 1.5;
    color: var(--dark-slate);
    margin-bottom: 16px;
  }

  .left {
    width: 40px;
    position: fixed;
    bottom: 0;
    left: 40px;
    right: auto;
    /* color: var(--navy); */
    z-index: 10;
    .social-media {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0px;
      padding: 0px;
      list-style: none;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        /* margin: 0px auto; */
        margin-top: 20px;
        background-color: var(--navy);
      }
      li {
        padding: 10px;
        a {
          color: inherit;
          padding: 10px;
          transition: var(--transition);
          &:hover,
          &:focus {
            color: var(--blue);
            transform: translateY(-3px);
          }

          svg {
            width: 20px;
            height: 20px;
          }
        }
      }
    }
  }

  .right {
    width: 40px;
    position: fixed;
    bottom: 0;
    left: auto;
    right: 40px;
    z-index: 10;
    /* color: var(--navy); */

    .email {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin: 0 auto;
        background-color: var(--navy);
      }

      a {
        margin: 20px auto;
        padding: 10px;
        font-family: var(--font-sans);
        font-size: var(--fs-xxs);
        line-height: var(--fs-lg);
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;
        text-decoration: none;
        color: inherit;
        transition: var(--transition);
        &:hover {
          color: var(--blue);
          transform: translateY(-3px);
        }
      }
    }
  }
`;

const Button = styled.button`
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--fs-lg);
  font-weight: 400;
  background: var(--navy);
  color: var(--white);
  padding: 16px 34px;
  margin-top: 10px;
  /* margin-right: 10px; */
  border: 2px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.5s, border 0.2s ease-in;
  @media (max-width: 569px) {
    margin-top: 1.25rem;
    font-size: var(--fs-lg);
  }
  @media (max-width: 376px) {
    font-size: var(--fs-md);
  }
  &:hover {
    box-shadow: 2px 8px 30px -8px #0a192f;
  }
`;

export default function Contact() {
  return (
    <StyledSection>
      <Container>
        <div className='wrapper'>
          <TextLine position='center'>
            <span>Contact</span>
          </TextLine>
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </p>
          <Button>Say Hello</Button>
          <div className='left'>
            <ul className='social-media'>
              <li>
                <a
                  href='#'
                  aria-label='GitHub'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconCodepen />
                </a>
              </li>
              <li>
                <a
                  href='#'
                  aria-label='GitHub'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconGithub />
                </a>
              </li>
              <li>
                <a
                  href='#'
                  aria-label='GitHub'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconLinkedin />
                </a>
              </li>
            </ul>
          </div>
          <div className='right'>
            <div className='email'>
              <a href='#'>ridwan.ikhsan66@gmail.com</a>
            </div>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
}
