import { StyleSheet } from 'react-native';
import type { BrandConfig, Theme } from '../types';
import { createColorPalette } from '../tokens/colors';
import { createBrandTypography } from '../tokens/typography';
import { spacing } from '../tokens/spacing';
import { defaultBrand, appleBrand, googleBrand } from '../brands';

export const createTheme = (
  brand: BrandConfig,
  mode: 'light' | 'dark'
): Theme => {
  const colors = createColorPalette(brand, mode);
  const typography = createBrandTypography(brand);

  const styles = StyleSheet.create({
    card: {
      backgroundColor: colors.card,
      borderRadius: 12,
      padding: spacing.m,
    },
    cardElevated: {
      backgroundColor: colors.cardElevated,
      borderRadius: 12,
      padding: spacing.m,
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    buttonPrimary: {
      backgroundColor: colors.primary,
      paddingVertical: spacing.m,
      paddingHorizontal: spacing.l,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 44,
    },
    buttonPrimaryText: {
      ...typography.headline,
      color: colors.card,
      fontWeight: '600',
    },
    buttonSecondary: {
      backgroundColor: colors.card,
      paddingVertical: spacing.m,
      paddingHorizontal: spacing.l,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 44,
      borderWidth: 1,
      borderColor: colors.border,
    },
    buttonSecondaryText: {
      ...typography.headline,
      color: colors.primary,
      fontWeight: '600',
    },
    buttonOutline: {
      backgroundColor: 'transparent',
      paddingVertical: spacing.m,
      paddingHorizontal: spacing.l,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 44,
      borderWidth: 2,
      borderColor: colors.primary,
    },
    buttonOutlineText: {
      ...typography.headline,
      color: colors.primary,
      fontWeight: '600',
    },
    input: {
      backgroundColor: colors.card,
      borderWidth: 1,
      borderColor: colors.border,
      borderRadius: 8,
      paddingVertical: spacing.m,
      paddingHorizontal: spacing.m,
      ...typography.body,
      color: colors.text,
    },
    inputText: {
      ...typography.body,
      color: colors.text,
    },
    inputLabel: {
      ...typography.callout,
      color: colors.text,
      marginBottom: spacing.s,
      fontWeight: '500',
    },
    inputError: {
      ...typography.footnote,
      color: colors.systemRed,
      marginTop: spacing.s,
    },
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    column: {
      flexDirection: 'column',
    },
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    shadow: {
      shadowColor: colors.shadow,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    },
    divider: {
      height: 1,
      backgroundColor: colors.border,
      marginVertical: spacing.m,
    },
  });

  return { brand, mode, colors, typography, spacing, styles };
};

export const createDefaultTheme = (mode: 'light' | 'dark') => createTheme(defaultBrand, mode);
export const createAppleTheme = (mode: 'light' | 'dark') => createTheme(appleBrand, mode);
export const createGoogleTheme = (mode: 'light' | 'dark') => createTheme(googleBrand, mode);

export const getThemeVariant = (theme: Theme, variant: 'light' | 'dark'): Theme => {
  return createTheme(theme.brand, variant);
};

export const switchBrand = (theme: Theme, brand: BrandConfig): Theme => {
  return createTheme(brand, theme.mode);
};


