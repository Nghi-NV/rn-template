import { TextStyle, ViewStyle } from 'react-native';

export interface Spacing {
  xs: number;
  s: number;
  m: number;
  l: number;
  xl: number;
}

export interface BrandColors {
  primary: string;
  secondary?: string;
  accent?: string;
  background: string;
  card: string;
  text: string;
  textSecondary: string;
  border: string;
  systemRed: string;
  systemGreen: string;
  systemYellow: string;
  systemBlue: string;
  systemIndigo: string;
  systemTeal: string;
  systemOrange: string;
  systemPurple: string;
  systemPink: string;
}

export interface ColorPalette extends BrandColors {
  primaryLight?: string;
  primaryDark?: string;
  cardElevated?: string;
  shadow?: string;
}

export interface BrandTypography {
  fontFamily: {
    displayBold: string;
    textRegular: string;
    textSemibold: string;
  };
  fontSize: {
    largeTitle: number;
    title1: number;
    headline: number;
    body: number;
    callout: number;
    footnote: number;
  };
}

export interface Typography {
  largeTitle: TextStyle;
  title1: TextStyle;
  headline: TextStyle;
  body: TextStyle;
  callout: TextStyle;
  footnote: TextStyle;
}

export interface BrandConfig {
  id: string;
  name: string;
  colors: {
    light: BrandColors;
    dark: BrandColors;
  };
  typography: BrandTypography;
}

export interface Theme {
  brand: BrandConfig;
  mode: 'light' | 'dark';
  colors: ColorPalette;
  typography: Typography;
  spacing: Spacing;
  styles: {
    card: ViewStyle;
    cardElevated: ViewStyle;
    buttonPrimary: ViewStyle;
    buttonPrimaryText: TextStyle;
    buttonSecondary: ViewStyle;
    buttonSecondaryText: TextStyle;
    buttonOutline: ViewStyle;
    buttonOutlineText: TextStyle;
    input: ViewStyle;
    inputText: TextStyle;
    inputLabel: TextStyle;
    inputError: TextStyle;
    container: ViewStyle;
    row: ViewStyle;
    column: ViewStyle;
    center: ViewStyle;
    shadow: ViewStyle;
    divider: ViewStyle;
  };
}


