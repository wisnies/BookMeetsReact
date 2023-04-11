import { ThemeProvider } from 'styled-components';
// temp. solution without ui contetx
import { lightTheme } from '../../../styles/lightTheme';

interface IThemeWrapperProps {
  children: React.ReactNode;
}

const ThemeWrapper: React.FC<IThemeWrapperProps> = ({
  children,
}: IThemeWrapperProps) => {
  return <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>;
};

export default ThemeWrapper;
