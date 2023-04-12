import styled from 'styled-components';
import { IThemeProps } from '../../../../libs/interfaces/styles/IThemeProps';
import { minWidth } from '../../../../styles/devices';

export const NavbarSearchContainer = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavbarSearchButton = styled.button<IThemeProps>`
  display: flex;
  font-size: 26px;
  color: ${({ theme }: IThemeProps) => theme.colors.accentPrimary2};
  cursor: pointer;
  @media ${minWidth.tablet} {
    display: none;
  }
`;
