import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import { IconCodepen, IconGithub, IconLinkedin } from './icons';

const StyledSection = styled.section`
  width: 100%;
  padding-bottom: 0;

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin: 16px 0;
    @media screen and (max-width: 375px) {
      font-size: 36px;
      margin: 10px 0;
    }
  }

  p {
    line-height: 1.5;
    color: var(--dark-slate);
    margin-bottom: 16px;
  }

  footer {
    position: absolute;
    width: 100%;
    bottom: 20px;
  }
`;

const Wrapper = styled.div`
  height: 65vh;
  position: relative;
  text-align: center;
  /* display: flex;
  flex-direction: column;
  align-items: center; */
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

const Widget = {
  Left: styled.div`
    width: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;

    .social-media {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0;
      padding: 0;
      list-style: none;
      /* position: relative; */
      &::after {
        content: '';
        display: block;
        width: 1px;
        height: 90px;
        margin-top: 10px;
        background-color: var(--navy);
      }

      a {
        display: block;
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
  `,
  Right: styled.div`
    width: 40px;
    position: absolute;
    bottom: 0;
    /* left: auto; */
    /* right: 40px; */
    right: 0;
    z-index: 10;

    .email {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* margin-top: 90px; */
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
        font-size: var(--fs-xxs);
        letter-spacing: 0.1em;
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        text-decoration: none;
        color: inherit;
        transition: var(--transition);
        &:hover {
          color: var(--blue);
          transform: rotate(180deg) translateY(5px);
        }
      }
    }
  `,
};

export default function Contact() {
  return (
    <StyledSection id='contact'>
      <Container>
        <Wrapper>
          <TextLine position='center'>
            <span>Contact</span>
          </TextLine>
          <h2>Get In Touch</h2>
          <p>
            Whether you have a question or just want to say hi, I’ll try my best
            to get back to you!
          </p>
          <Button>Say Hello</Button>
          <Widget.Left>
            <ul className='social-media'>
              <li>
                <a
                  href='#'
                  aria-label='Codepen'
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
                  aria-label='LinkedIn'
                  target='_blank'
                  rel='noreferrer'
                >
                  <IconLinkedin />
                </a>
              </li>
            </ul>
          </Widget.Left>
          <footer>
            <p>Copyright &copy; 2022 Ridwan Ikhsan</p>
          </footer>
          <Widget.Right>
            <div className='email'>
              <a href='mailto:ridwan.ikhsan66@gmail.com'>
                ridwan.ikhsan66@gmail.com
              </a>
            </div>
          </Widget.Right>
        </Wrapper>
      </Container>
    </StyledSection>
  );
}
