import React from 'react';
import styled from 'styled-components';
import { IThemeProps } from '../../../../libs/interfaces/styles/IThemeProps';
import { minWidth } from '../../../../styles/devices';

interface INavbarSearchFormContainerProps extends IThemeProps {
  isOpen: boolean;
}

export const NavbarSearchFormContainer = styled.div<INavbarSearchFormContainerProps>`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100vw;
  height: 50px;
  display: ${({ isOpen }: INavbarSearchFormContainerProps) =>
    isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }: INavbarSearchFormContainerProps) =>
    theme.colors.accentSecondary1};

  border-top: 1px solid white;
  border-bottom: 1px solid white;

  & form {
    width: 90%;
    height: 100%;
    margin: 0 auto;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  @media ${minWidth.mobileM} {
    & form {
      width: 80%;
    }
  }

  @media ${minWidth.tablet} {
    position: initial;
    display: initial;
    width: 100%;
    height: 100%;
    display: block;
    border: none;
    & form {
      width: 100%;
    }
  }
`;

interface INavbarSearchFormButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    IThemeProps {}
export const NavbarSearchFormButton = styled.button<INavbarSearchFormButtonProps>`
  position: absolute;
  top: 4px;
  right: 0;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${({ theme }: INavbarSearchFormButtonProps) =>
    theme.colors.accentPrimary1};
  color: ${({ theme }: INavbarSearchFormButtonProps) =>
    theme.colors.textPrimary};
  cursor: pointer;

  @media ${minWidth.tablet} {
    top: 5px;
  }
`;
