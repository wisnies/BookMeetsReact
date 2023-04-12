import { Field } from 'formik';
import styled from 'styled-components';
import { IThemeProps } from '../../../../../libs/interfaces/styles/IThemeProps';

export const StyledNavbarFormGroup = styled.div`
  width: 100%;
`;
export const StyledNavbarFormInput = styled(Field)<IThemeProps>`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  display: block;
  padding: 6px 60px 6px 20px;
  font-size: 18px;
  font-family: ${({ theme }: IThemeProps) => theme.fonts.primary};
  color: ${({ theme }: IThemeProps) => theme.colors.textSecondary};
  background-color: white;
  background-image: none;
  border-radius: 15px;
  border: none;
  box-shadow: ${({ theme }: IThemeProps) => theme.shadows.xs};

  &::placeholder {
    font-size: 14px;
  }
`;
