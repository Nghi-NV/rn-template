import type { BrandConfig, Typography } from '../types';
import { defaultBrand } from '../brands';

export const createBrandTypography = (brand: BrandConfig): Typography => {
  const { fontFamily, fontSize } = brand.typography;
  return {
    largeTitle: {
      fontFamily: fontFamily.displayBold,
      fontSize: fontSize.largeTitle,
      lineHeight: fontSize.largeTitle * 1.2,
    },
    title1: {
      fontFamily: fontFamily.displayBold,
      fontSize: fontSize.title1,
      lineHeight: fontSize.title1 * 1.2,
    },
    headline: {
      fontFamily: fontFamily.textSemibold,
      fontSize: fontSize.headline,
      lineHeight: fontSize.headline * 1.3,
    },
    body: {
      fontFamily: fontFamily.textRegular,
      fontSize: fontSize.body,
      lineHeight: fontSize.body * 1.3,
    },
    callout: {
      fontFamily: fontFamily.textRegular,
      fontSize: fontSize.callout,
      lineHeight: fontSize.callout * 1.3,
    },
    footnote: {
      fontFamily: fontFamily.textRegular,
      fontSize: fontSize.footnote,
      lineHeight: fontSize.footnote * 1.4,
    },
  };
};

export const createCustomTypography = (
  brand: BrandConfig,
  customLineHeights?: Partial<Record<keyof Typography, number>>
): Typography => {
  const baseTypography = createBrandTypography(brand);
  if (!customLineHeights) return baseTypography;
  return Object.keys(baseTypography).reduce((acc, key) => {
    const typographyKey = key as keyof Typography;
    acc[typographyKey] = {
      ...baseTypography[typographyKey],
      lineHeight: customLineHeights[typographyKey] || baseTypography[typographyKey].lineHeight,
    };
    return acc;
  }, {} as Typography);
};

export const typography: Typography = createBrandTypography(defaultBrand);


