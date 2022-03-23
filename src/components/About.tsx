import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import Image from 'next/image';
import techStack from '../../public/tech-stack.png';

const StyledSection = styled.section`
  width: 100%;

  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 48px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  .col {
    padding: 0 2rem;
    text-align: center;
  }

  .about {
    margin-top: 14px;
    max-width: 510px;
    text-align: left;

    p {
      line-height: 1.5;
      color: var(--dark-slate);
      margin-bottom: 16px;
    }

    ul {
      ${({ theme }) => theme.mixins.fancyList}
    }
  }
`;

export default function About() {
  return (
    <StyledSection id='about'>
      <Container>
        <div className='wrapper'>
          <div className='col'>
            <div className='featured-img'>
              <Image src={techStack} alt='Ilustrasi' placeholder='blur' />
            </div>
          </div>
          <div className='col'>
            <TextLine position='flex-start'>
              <span>About Me</span>
            </TextLine>
            <div className='about'>
              <p>
                Hello! My name is Ridwan, I’m a self-taught developer who loves
                to create projects about web technology. I’am highly motivated
                to continuously develop my skills and grow professionally.
              </p>
              <p>
                I’ve enjoyed JavaScript and make it the main language in
                creating a project. I’m currently learning about React Native
                for mobile apps.
              </p>
              <p>
                Here are a few technologies I’ve been working with recently:
              </p>
              <ul className='skills'>
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Webpack</li>
                <li>MongoDB</li>
                <li>Laravel</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </StyledSection>
  );
}
