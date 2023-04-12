import styled from 'styled-components';
import { IThemeProps } from '../../../../libs/interfaces/styles/IThemeProps';
import { minWidth } from '../../../../styles/devices';

interface INavbarSearchResultContainerProps {
  isOpen: boolean;
}
export const NavbarSearchResultContainer = styled.div<INavbarSearchResultContainerProps>`
  height: 200px;
  position: absolute;
  top: calc(200% + 10px);
  left: 0;
  width: 100vw;

  display: ${({ isOpen }: INavbarSearchResultContainerProps) =>
    isOpen ? 'block' : 'none'};

  @media ${minWidth.tablet} {
    top: calc(100% + 10px);
    width: 100%;
  }
`;
export const NavbarSearchResultInnerContainer = styled.div<IThemeProps>`
  height: 100%;
  width: 90%;
  margin: 0 auto;
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: ${({ theme }: IThemeProps) => theme.shadows.xs};

  @media ${minWidth.mobileM} {
    width: 80%;
  }
  @media ${minWidth.tablet} {
    width: 100%;
  }
`;
