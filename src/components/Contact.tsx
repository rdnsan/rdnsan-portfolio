import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import { socialMedia } from '@config';
import { Icon } from '@components/icons';

const StyledSection = styled.section`
  width: 100%;
  padding-bottom: 0;

  @media (max-width: 768px) {
    padding-top: 4rem;
  }

  h2 {
    font-size: 40px;
    font-weight: 600;
    margin: 16px 0;
    @media screen and (max-width: 569px) {
      font-size: 32px;
      margin: 10px 0;
    }
  }

  p {
    line-height: 1.5;
    color: var(--dark-slate);
    margin-bottom: 16px;
    @media screen and (max-width: 569px) {
      padding: 0 10px;
    }
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

  @media screen and (max-width: 320px) {
    height: 75vh;
  }
`;

const Button = styled.a`
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--fs-lg);
  font-weight: 400;
  background: var(--navy);
  color: var(--white);
  padding: 16px 34px;
  margin-top: 10px;
  text-decoration: none;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.5s, border 0.2s ease-in;

  &:hover {
    box-shadow: 2px 8px 30px -8px #0a192f;
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 12px 24px;
  }

  @media (max-width: 569px) {
    font-size: var(--fs-md);
    margin-top: 0.5rem;
  }

  @media (max-width: 320px) {
    padding: 12px 24px;
  }
`;

const StyledSocialMedia = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    margin: 0 auto 10px;
  }

  ul {
    ${({ theme }) => theme.mixins.flexCenter};
    padding: 0;
    margin: 0;
    list-style: none;

    a {
      display: flex;
      color: var(--navy);
      padding: 10px;
      margin: 0 5px;
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const Widget = {
  Left: styled.div`
    width: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;

    @media screen and (max-width: 768px) {
      display: none;
    }

    .social-media {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 0;
      list-style: none;

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
    right: 0;
    z-index: 10;

    @media screen and (max-width: 768px) {
      display: none;
    }

    .email {
      display: flex;
      flex-direction: column;
      align-items: center;

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
        &:hover,
        &:focus {
          color: var(--blue);
          transform: rotate(180deg) translateY(5px);
        }
      }
    }
  `,
};

export default function Contact(): JSX.Element {
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
          <Button href='mailto:ridwan.ikhsan66@gmail.com'>Say Hello</Button>
          <Widget.Left>
            <ul className='social-media'>
              {socialMedia &&
                socialMedia.map(({ url, name }, index) => (
                  <li key={index}>
                    <a
                      href={url}
                      aria-label={name}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <Icon name={name} />
                    </a>
                  </li>
                ))}
            </ul>
          </Widget.Left>
          <footer>
            <StyledSocialMedia>
              <ul>
                {socialMedia &&
                  socialMedia.map(({ url, name }, index) => (
                    <li key={index}>
                      <a
                        href={url}
                        aria-label={name}
                        target='_blank'
                        rel='noreferrer'
                      >
                        <Icon name={name} />
                      </a>
                    </li>
                  ))}
              </ul>
            </StyledSocialMedia>
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
