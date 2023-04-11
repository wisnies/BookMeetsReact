interface IThemeColors {
  primary: string;
}
interface IThemeTransitions {
  fast: string;
  normal: string;
  slow: string;
}

export interface ITheme {
  colors: IThemeColors;
  transitions: IThemeTransitions;
}

export const lightTheme: ITheme = {
  colors: {
    primary: '#ced0ce',
  },
  transitions: {
    fast: 'all 0.2s ease',
    normal: 'all 0.4s ease',
    slow: 'all 0.8s ease',
  },
};
