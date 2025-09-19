// Curated exports for maintainability
export type { BrandConfig, BrandColors, BrandTypography, Theme, Typography } from './types';

// Tokens
export { spacing } from './tokens/spacing';
export { lightColors, darkColors, getBrandColors, createColorPalette } from './tokens/colors';
export { createBrandTypography, createCustomTypography, typography } from './tokens/typography';

// Brands
export { defaultBrand, appleBrand, googleBrand, getBrand, getAllBrands, registerBrand } from './brands';

// Factory
export { createTheme, createDefaultTheme, createAppleTheme, createGoogleTheme, getThemeVariant, switchBrand } from './factory/themeFactory';

// Provider & hooks
export { ThemeProvider, useTheme, useLegacyTheme } from './provider/ThemeProvider';