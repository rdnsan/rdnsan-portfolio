import styled from 'styled-components';

interface TextLineProps {
  readonly position: string;
}

const TextLine = styled.div<TextLineProps>`
  position: relative;
  display: flex;
  justify-content: ${(props) => props.position || 'flex-start'};
  align-items: center;

  &::before {
    content: '';
    display: block;
    width: 90px;
    height: 1px;
    background-color: var(--navy);
  }

  span {
    font-weight: 500;
    color: var(--navy);
    margin: 0 10px;
  }
`;

export default TextLine;
