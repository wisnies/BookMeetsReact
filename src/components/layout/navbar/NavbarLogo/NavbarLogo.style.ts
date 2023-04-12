import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IThemeProps } from '../../../../libs/interfaces/styles/IThemeProps';
import { minWidth } from '../../../../styles/devices';

export const NavbarLogoContainer = styled(Link)<IThemeProps>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  @media ${minWidth.laptop} {
    &:hover {
      span {
        padding: 0;
        margin: 0;
      }
    }
  }
`;
const commonSpan = styled.span<IThemeProps>`
  font-size: 26px;
  height: fit-content;
  font-family: ${({ theme }: IThemeProps) => theme.fonts.decorated};

  @media ${minWidth.mobileL} {
    font-size: 30px;
  }
  @media ${minWidth.laptop} {
    transition: ${({ theme }: IThemeProps) => theme.transitions.normal};
  }
`;
export const NavbarLogoPartOne = styled(commonSpan)<IThemeProps>`
  color: ${({ theme }: IThemeProps) => theme.colors.accentPrimary1};
  padding-top: 2px;
  z-index: 100;
`;
export const NavbarLogoPartTwo = styled(commonSpan)<IThemeProps>`
  color: ${({ theme }: IThemeProps) => theme.colors.accentPrimary2};
  padding-top: 6px;
  margin-left: -4px;
`;
