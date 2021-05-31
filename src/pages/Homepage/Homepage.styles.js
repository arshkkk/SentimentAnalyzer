import { Jumbotron, Button } from 'reactstrap';
import styled from 'styled-components';

export const MainButton = styled(Button)`
  transition: all 300ms;
  padding: 2px 10px !important;
  font-weight: 400;
  font-size: 1.5rem;
  border: none;
  letter-spacing: 1.2px;
  background-color: #00ba92 !important;
  :hover {
    border: none;
    transform: scale(0.97);
  }
`;
