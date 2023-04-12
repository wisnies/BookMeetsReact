import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IThemeProps } from '../../../../libs/interfaces/styles/IThemeProps';
import { minWidth } from '../../../../styles/devices';

export const NavbarLinkAsLink = styled(Link)<IThemeProps>`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }: IThemeProps) => theme.colors.textSecondary};
  font-weight: 400;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }: IThemeProps) =>
      theme.colors.accentPrimary1};
    color: ${({ theme }: IThemeProps) => theme.colors.textPrimary};
  }

  @media ${minWidth.mobileS} {
    font-size: 16px;
  }
  @media ${minWidth.mobileL} {
    font-size: 18px;
  }
  @media ${minWidth.laptop} {
    transition: ${({ theme }: IThemeProps) => theme.transitions.fast};
  }
`;
export const NavbarLinkAsDropdown = styled.div``;
