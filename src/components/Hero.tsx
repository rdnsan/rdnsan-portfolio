import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import Image from 'next/image';
import heroImage from '../../public/rdnsan.png';

const StyledHero = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ghostwhite;
  h1 {
    font-size: 65px;
    font-weight: 700;
    color: var(--navy);
    @media (max-width: 569px) {
      font-size: 1.75rem;
    }
  }
  h2 {
    font-size: 55px;
    font-weight: 700;
    color: var(--slate);
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
`;

const Row = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
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
  @media (max-width: 1024px) {
    width: 55%;
  }
  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 569px) {
    width: 85%;
    padding-left: 0.5rem;
    // left: 0;
    // width: 100%;
    // padding: 0 1rem;
    // align-items: center;
    // text-align: center;
  }
  @media (max-width: 376px) {
    width: 65%;
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
  font-size: var(--fs-lg);
  font-weight: 400;
  background: ${(props) => (props.primary ? 'var(--navy)' : 'transparent')};
  color: ${(props) => (props.primary ? 'var(--white)' : 'var(--navy)')};
  padding: 16px 34px;
  margin-top: 10px;
  margin-right: 10px;
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
    border: ${({ primary }) => (primary ? '' : '2px solid var(--navy)')};
    box-shadow: ${({ primary }) =>
      primary ? '2px 8px 30px -8px #0a192f' : 'none'};
  }
`;

export default function Hero() {
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
            <p>
              I’m a full-stack developer based in Bandung with a passion for
              building digital service/stuffs he wants. I’ve enjoyed JavaScript
              and make it the main language in creating a project.
            </p>
            <div>
              <Button primary>Know More</Button>
              <Button primary={false}>Download Resume</Button>
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
