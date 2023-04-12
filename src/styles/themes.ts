import { lightPartialTheme } from './lightTheme';
import {
  ITheme,
  IThemeFonts,
  IThemeTransitions,
} from '../libs/interfaces/styles/ITheme';

const fonts: IThemeFonts = {
  primary: "'Roboto', sans-serif",
  decorated: "'Lobster', cursive",
};

const transitions: IThemeTransitions = {
  fast: 'all 0.2s ease',
  normal: 'all 0.4s ease',
  slow: 'all 0.8s ease',
};

const lightTheme: ITheme = {
  ...lightPartialTheme,
  fonts,
  transitions,
};

export { lightTheme };
