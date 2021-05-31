import styled from 'styled-components';
import { colors } from '../../../colors';

export const CardItemWrapper = styled('div')`
  transition: all 300ms;
  :hover {
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
    transform: scale(1.03);
  }
  padding: 20px 30px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 1px solid #d3d3d3;
  background-color: white;
  border-radius: 8px;
  margin: 20px 0 0 0;
  a {
    padding: 5px;
    margin-top: 15px;
    border-radius: 5px;
    color: white;
    background-color: ${colors.black_font};
    &:hover {
      color: white;
    }
  }
`;
export const CardItemLogoWrapper = styled('div')`
  > svg {
    height: auto;
    width: 70px;
  }
`;
export const CardItemHeading = styled('div')`
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.8);
  font-size: 24px;
`;

export const CardItemSubData = styled('div')`
  color: #7d8285;
  font-weight: normal;
  text-align: left;
  font-size: 20px;
`;
