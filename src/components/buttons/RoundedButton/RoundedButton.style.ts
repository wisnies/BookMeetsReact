import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { minWidth } from '../../../styles/devices';
import { ITheme } from '../../../styles/lightTheme';

const PHI = 1.618033988749894;

interface IRoundedButtonProps {
  color: string;
  theme: ITheme;
}

export const RoundedBtn = styled.button<IRoundedButtonProps>``;
export const RoundedLinkBtn = styled(Link)<IRoundedButtonProps>`
  border: none;
  width: 100%;
  max-width: 80%;
  padding: 5px ${5 * PHI}px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;

  @media ${minWidth.mobileL} {
    font-size: 16px;
    max-width: 100px;
  }

  ${({ theme, color }: IRoundedButtonProps) => {
    switch (color) {
      case 'accentSecondary1':
        return `
            background-color: ${theme.colors.accentSecondary1};
            color: ${theme.colors.textSecondary};
          `;
      case 'accentPrimary1':
        return `
            background-color: ${theme.colors.accentPrimary1};
            color: ${theme.colors.textPrimary};
          `;
      case 'accentPrimary2':
        return `
            background-color: ${theme.colors.accentPrimary2};
            color: ${theme.colors.textPrimary};
          `;
      case 'secondary':
        return `
            background-color: ${theme.colors.secondary};
            color: ${theme.colors.textSecondary};
          `;
      case 'primary':
      default:
        return `
            background-color: ${theme.colors.primary};
            color: ${theme.colors.textPrimary};
          `;
    }
  }}
`;
