import type { BrandColors, BrandConfig } from '../types';
import { defaultBrand } from '../brands';

export const lightColors = defaultBrand.colors.light;
export const darkColors = defaultBrand.colors.dark;

export const getBrandColors = (brand: BrandConfig, mode: 'light' | 'dark'): BrandColors => {
  return brand.colors[mode];
};

export const createColorPalette = (brand: BrandConfig, mode: 'light' | 'dark') => {
  const colors = getBrandColors(brand, mode);
  return {
    ...colors,
    primaryLight: `${colors.primary}20`,
    primaryDark: `${colors.primary}80`,
    cardElevated: mode === 'light' ? '#FFFFFF' : '#2C2C2E',
    shadow: mode === 'light' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.3)',
  };
};


