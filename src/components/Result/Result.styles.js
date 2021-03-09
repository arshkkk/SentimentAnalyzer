import styled from 'styled-components';

export const CircleWrapper = styled('div')`
  > svg {
    height: auto;
    width: 100%;
    stroke-width: 0;
    fill: ${({ fill }) => fill};
  }
`;

export const DataWrapper = styled('h2')`
  margin-top: -150px;
  text-align: center;
  margin-left: 20px;
  font-size: 30px;
  color: white;
  margin-bottom: 30px;
  @media (max-width: 600px) {
    margin-top: -160px;
    margin-left: 120px;
  }
`;
