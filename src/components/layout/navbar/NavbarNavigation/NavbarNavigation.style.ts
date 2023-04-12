import styled from 'styled-components';
import { maxWidth } from '../../../../styles/devices';

export const NavigationContainer = styled.nav`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${maxWidth.laptopL} {
    border-top: 1px solid white;
    border-bottom: 1px solid white;
  }
`;
