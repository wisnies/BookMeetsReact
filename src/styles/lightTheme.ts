interface IThemeColors {
  primary: string;
  textPrimary: string;
  secondary: string;
  textSecondary: string;
  accentPrimary1: string;
  accentPrimary2: string;
  accentSecondary1: string;
}
interface IThemeTransitions {
  fast: string;
  normal: string;
  slow: string;
}
interface IThemeFonts {
  primary: string;
  decorated: string;
}
interface IThemeShadows {
  smallToBottom: string;
}

export interface ITheme {
  colors: IThemeColors;
  transitions: IThemeTransitions;
  fonts: IThemeFonts;
  shadows: IThemeShadows;
}

export const lightTheme: ITheme = {
  colors: {
    primary: '#5E548E',
    textPrimary: '#EAF2EF',
    secondary: '#72E1D1',
    textSecondary: '#0E0C0A',
    accentPrimary1: '#0B6E4F',
    accentPrimary2: '#DE6449',
    accentSecondary1: '#F0C987',
  },
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.4s ease',
    slow: 'all 0.8s ease',
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    decorated: "'Lobster', cursive",
  },
  shadows: {
    smallToBottom: '0px -2px 16px 2px rgba(0,0,0,0.2)',
  },
};
