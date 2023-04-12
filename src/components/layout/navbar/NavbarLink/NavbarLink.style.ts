import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../../../styles/devices';
import { ITheme } from '../../../../styles/lightTheme';

interface INavbarLinkProps {
  theme: ITheme;
}
export const NavbarLinkAsLink = styled(Link)<INavbarLinkProps>`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: transparent;
  cursor: pointer;
  color: ${({ theme }: INavbarLinkProps) => theme.colors.textSecondary};
  font-weight: 400;
  font-size: 14px;

  &:hover {
    background-color: ${({ theme }: INavbarLinkProps) =>
      theme.colors.accentPrimary1};
    color: ${({ theme }: INavbarLinkProps) => theme.colors.textPrimary};
  }

  @media ${minWidth.mobileS} {
    font-size: 16px;
  }
  @media ${minWidth.mobileL} {
    font-size: 18px;
  }
  @media ${minWidth.laptop} {
    transition: ${({ theme }: INavbarLinkProps) => theme.transitions.fast};
  }
`;
export const NavbarLinkAsDropdown = styled.div``;
