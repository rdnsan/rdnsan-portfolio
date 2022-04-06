import styled from 'styled-components';
import { Container, TextLine } from '@styles';
import Card from './Card';
import { projects } from '@content';

const StyledSection = styled.section`
  width: 100%;

  .title-wrap {
    margin-left: 3.75rem;
    @media screen and (max-width: 375px) {
      margin-left: 1rem;
    }
  }

  h2 {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 24px;
    @media screen and (max-width: 375px) {
      font-size: 28px;
    }
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  max-width: 1200px;
  margin: auto;
  padding: 0 0.75rem;
`;

export default function Project(): JSX.Element {
  return (
    <StyledSection id='work'>
      <Container>
        <div className='title-wrap'>
          <TextLine position='flex-start'>
            <span>My Project</span>
          </TextLine>
          <h2>Something I’ve built</h2>
        </div>
        <GridContainer>
          {projects.map((project, index) => (
            <Card
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              tools={project.tools}
              source={project.source}
              link={project.link}
            />
          ))}
        </GridContainer>
      </Container>
    </StyledSection>
  );
}
