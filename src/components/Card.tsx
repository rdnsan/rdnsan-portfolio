import styled from 'styled-components';
import Image from 'next/image';
import { IconGithub, IconExternalLink } from './icons';

const StyledCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 30px;
  background-color: #f7f7f7;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
`;

const CardHeader = styled.div`
  position: relative;
  height: 220px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  overflow: hidden;

  .card-img {
    background-color: var(--white);
  }
`;

const CardBody = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: white;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  h3 {
    font-size: 20px;
    font-weight: 600;
  }

  p {
    font-size: var(--fs-md);
    color: var(--dark-slate);
    line-height: 1.5;
    margin: 12px 0;
  }
`;

const CardFooter = styled.div`
  flex-grow: 1;
  padding: 1rem;
  background-color: #f7f7f7;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;

  p {
    color: var(--dark-slate);
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;

  .stack {
    display: flex;
    list-style: none;
    li {
      color: var(--navy);
      margin-right: 16px;
    }
  }

  .link {
    display: flex;

    a {
      display: flex;
      /* background-color: rgba(0, 0, 0, 0.1); */
      color: inherit;
      padding: 6px;
      margin: 0 5px;
      border-radius: 20px;
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
`;

interface CardProps {
  image: StaticImageData;
  title: string;
  description: string;
  tools: Array<string>;
  source: 'open' | 'close';
  link: {
    target?: string;
    source?: string;
  };
}

function Card({ image, title, description, tools, source, link }: CardProps) {
  const Target = link.target ? (
    <a href={link.target}>
      <IconExternalLink />
    </a>
  ) : null;

  const Source =
    source === 'open' ? (
      <a href={link.source}>
        <IconGithub />
      </a>
    ) : null;

  return (
    <StyledCard>
      <CardHeader>
        <Image
          src={image}
          alt={title}
          // width={275}
          // height={220}
          className='card-img'
          placeholder='blur'
          layout='responsive'
        />
      </CardHeader>
      <CardBody>
        <h3>{title}</h3>
        <p>{description}</p>
      </CardBody>
      <CardFooter>
        <p>Tools</p>
        <Wrapper>
          <ul className='stack'>
            {tools.map((tool, index) => (
              <li key={index}>{tool}</li>
            ))}
          </ul>
          <div className='link'>
            {Target}
            {Source}
          </div>
        </Wrapper>
      </CardFooter>
    </StyledCard>
  );
}

export default Card;
