import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IThemeProps } from '../../../libs/interfaces/styles/IThemeProps';
import { minWidth } from '../../../styles/devices';

interface IStyledInlineLinkProps extends IThemeProps {
  color: string;
  weight: number;
}
export const StyledInlineLink = styled(Link)<IStyledInlineLinkProps>`
  font-size: 16px;
  font-weight: ${({ weight }: IStyledInlineLinkProps) => weight};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  @media ${minWidth.laptop} {
    transition: ${({ theme }: IStyledInlineLinkProps) =>
      theme.transitions.fast};
  }

  ${({ theme, color }: IStyledInlineLinkProps) => {
    switch (color) {
      case 'accentSecondary1':
        return `
            color: ${theme.colors.accentSecondary1};
          `;
      case 'accentPrimary1':
        return `
            color: ${theme.colors.accentPrimary1};
          `;
      case 'accentPrimary2':
        return `
            color: ${theme.colors.accentPrimary2};
          `;
      case 'secondary':
        return `
            color: ${theme.colors.secondary};
          `;
      case 'primary':
      default:
        return `
            color: ${theme.colors.primary};
          `;
    }
  }}
`;
export const StyledInlineExternalLink = styled.a<IStyledInlineLinkProps>``;
