import styled from 'styled-components';
import { maxWidth, minWidth } from './devices';

export const MaxTabletContainer = styled.div`
  display: none;
  height: 100%;
  @media ${maxWidth.tablet} {
    display: block;
  }
`;
export const MinTabletContainer = styled.div`
  display: none;
  height: 100%;
  @media ${minWidth.tablet} {
    display: initial;
  }
`;
