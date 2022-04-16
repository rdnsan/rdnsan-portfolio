import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import Image from 'next/image';
import heroImage from '../../public/images/hero-image.png';

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ghostwhite;

  h1 {
    font-size: 65px;
    font-weight: 700;
    color: var(--navy);

    @media (min-width: 992px) and (max-width: 1300px) {
      font-size: 50px;
    }

    @media (max-width: 768px) {
      font-size: 50px;
    }

    @media (max-width: 569px) {
      font-size: 1.75rem;
      margin-top: 4px;
    }

    @media (max-width: 320px) {
      font-size: 1.6rem;
    }
  }

  h2 {
    font-size: 55px;
    font-weight: 700;
    color: var(--slate);
    margin-bottom: 24px;

    @media (min-width: 992px) and (max-width: 1300px) {
      font-size: 40px;
    }

    @media (max-width: 768px) {
      font-size: 42px;
      margin-bottom: 20px;
    }

    @media (max-width: 569px) {
      font-size: 24px;
      margin: 4px 0 16px;
    }

    @media (max-width: 320px) {
      font-size: 20px;
    }
  }

  p {
    font-size: 20px;
    font-weight: 400;
    line-height: 1.3;
    color: var(--dark-slate);
    margin: 24px 0;
    max-width: 450px;
    @media (max-width: 569px) {
      font-size: 1.125rem;
    }
  }

  .button-wrap {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
`;

const Row = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
  }
`;

interface ColumnProps {
  readonly width: string;
}

const Column = styled.div<ColumnProps>`
  position: relative;
  width: ${(props) => props.width || '50%'};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }

  @media (max-width: 330px) {
    left: 0;
    width: 100%;
    padding: 0 1rem;
    align-items: center;
    text-align: center;
  }
`;

interface ButtonProps {
  readonly primary: boolean;
}

const Button = styled.button<ButtonProps>`
  display: inline-block;
  font-family: var(--font-sans);
  font-size: var(--fs-md);
  font-weight: 400;
  background: ${(props) => (props.primary ? 'var(--navy)' : 'transparent')};
  color: ${(props) => (props.primary ? 'var(--white)' : 'var(--navy)')};
  padding: 16px 34px;
  border: 2px solid transparent;
  border-radius: 0.25rem;
  cursor: pointer;
  transition: box-shadow 0.5s, border 0.2s ease-in;

  &:hover {
    border: ${({ primary }) => (primary ? '' : '2px solid var(--navy)')};
    box-shadow: ${({ primary }) =>
      primary ? '2px 8px 30px -8px #0a192f' : 'none'};
  }

  @media (min-width: 992px) and (max-width: 1200px) {
    padding: 12px 24px;
  }

  @media (max-width: 768px) {
    border: ${({ primary }) => (primary ? '' : '2px solid var(--navy)')};
  }

  @media (max-width: 569px) {
    font-size: var(--fs-xs);
    padding: 16px 32px;
    margin-right: 0;
  }

  @media (max-width: 320px) {
    font-size: var(--fs-xxs);
    padding: 8px 16px;
  }
`;

export default function Hero(): JSX.Element {
  const URL =
    'https://drive.google.com/file/d/1x-afI5DPlSULUAZN73r64NAH1CR_JJlQ/view?usp=sharing';

  return (
    <StyledHero>
      <Container>
        <Row>
          <Column width='60%'>
            <TextLine position='flex-start'>
              <span>Hello, my name is</span>
            </TextLine>
            <h1>Ridwan Nurul Ikhsan.</h1>
            <h2>I build things for the web.</h2>
            {/* <p>
              I’m a full-stack developer based in Bandung with a passion for
              building digital service/stuffs he wants. I’ve enjoyed JavaScript
              and make it the main language in creating a project.
            </p> */}
            <div className='button-wrap'>
              <Button
                primary
                onClick={() => (document.location.hash = 'about')}
              >
                Know More
              </Button>
              <Button
                primary={false}
                onClick={() => window.open(URL, '_blank')}
              >
                Download Resume
              </Button>
            </div>
          </Column>
          <Column width='40%'>
            <div>
              <Image
                src={heroImage}
                alt='Ilustrasi'
                quality={100}
                placeholder='blur'
                priority
              />
            </div>
          </Column>
        </Row>
      </Container>
    </StyledHero>
  );
}
