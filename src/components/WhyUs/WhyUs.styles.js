import styled from 'styled-components';

export const WhyUsIconWrapper = styled('div')`
  > svg {
    height: auto;
    width: 50px;
    color: rgb(0, 41, 186);
  }
  margin-bottom: 20px;
`;

export const WhyUsItemWrapper = styled('div')`
  transition: all 300ms;
  :hover {
    transform: scale(1.03);
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  }
`;
