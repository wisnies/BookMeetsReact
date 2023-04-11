import styled from 'styled-components';
import { maxWidth, minWidth, size } from '../../../../styles/devices';
import { ITheme } from '../../../../styles/lightTheme';

interface INavbarContainerProps {
  show: boolean;
  showOnHover: boolean;
  theme: ITheme;
}
export const NavbarContainer = styled.header<INavbarContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  background-color: ${({ theme }: INavbarContainerProps) =>
    theme.colors.primary};
  transition: ${({ theme }: INavbarContainerProps) => theme.transitions.normal};
  transform: translateY(
    ${({ show, showOnHover }: INavbarContainerProps) =>
      show || showOnHover ? 0 : '-50%'}
  );

  @media ${maxWidth.mobileL} {
    height: 120px;
  }
  @media ${maxWidth.laptopL} {
    height: 100px;
  }
`;
export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: ${size.laptopL};
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(2, 1fr);
  @media ${minWidth.laptopL} {
    grid-template-columns: repeat(24, 1fr);
    grid-template-rows: 1fr;
  }
`;

export const NavbarLogoBox = styled.div`
  border: 2px solid green;
  grid-column: 4/10;
  grid-row: 1;

  @media ${minWidth.tablet} {
    grid-column: 1/4;
  }
  @media ${minWidth.laptopL} {
    grid-column: 1/6;
  }
`;
export const NavbarSearchBox = styled.div`
  border: 2px solid red;

  grid-column: 1/4;
  grid-row: 1;
  @media ${minWidth.tablet} {
    grid-column: 4/10;
  }
  @media ${minWidth.laptopL} {
    grid-column: 14/22;
  }
`;
export const NavbarMenuBox = styled.div`
  border: 2px solid blue;

  grid-column: 10/-1;
  grid-row: 1;
  @media ${minWidth.laptopL} {
    grid-column: 22/-1;
  }
`;
export const NavbarNavigationBox = styled.div`
  border: 2px solid yellow;

  grid-column: 1/-1;
  grid-row: 2;
  @media ${minWidth.laptopL} {
    grid-column: 6/14;
    grid-row: 1;
  }
`;
