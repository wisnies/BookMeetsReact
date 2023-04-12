export interface IThemeColors {
  primary: string;
  textPrimary: string;
  secondary: string;
  textSecondary: string;
  accentPrimary1: string;
  accentPrimary2: string;
  accentSecondary1: string;
}
export interface IThemeTransitions {
  fast: string;
  normal: string;
  slow: string;
}
export interface IThemeFonts {
  primary: string;
  decorated: string;
}
export interface IThemeShadows {
  smallToBottom: string;
  xs: string;
}
export interface IThemePartial {
  colors: IThemeColors;
  shadows: IThemeShadows;
}

export interface ITheme extends IThemePartial {
  transitions: IThemeTransitions;
  fonts: IThemeFonts;
}
