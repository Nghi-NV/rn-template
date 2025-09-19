import type { BrandConfig } from '../types';

export const defaultBrand: BrandConfig = {
  id: 'default',
  name: 'Default',
  colors: {
    light: {
      primary: '#008C4F',
      background: '#F2F2F7',
      card: '#FFFFFF',
      text: 'rgba(0, 0, 0, 0.85)',
      textSecondary: 'rgba(60, 60, 67, 0.6)',
      border: 'rgba(60, 60, 67, 0.29)',
      systemRed: '#FF3B30',
      systemGreen: '#34C759',
      systemYellow: '#FF9500',
      systemBlue: '#007AFF',
      systemIndigo: '#5856D6',
      systemTeal: '#30B0C7',
      systemOrange: '#FF9500',
      systemPurple: '#AF52DE',
      systemPink: '#FF2D55',
    },
    dark: {
      primary: '#30D158',
      background: '#000000',
      card: '#1C1C1E',
      text: 'rgba(255, 255, 255, 0.85)',
      textSecondary: 'rgba(235, 235, 245, 0.6)',
      border: 'rgba(84, 84, 88, 0.65)',
      systemRed: '#FF453A',
      systemGreen: '#32D74B',
      systemYellow: '#FF9F0A',
      systemBlue: '#0A84FF',
      systemIndigo: '#5E5CE6',
      systemTeal: '#40C8E0',
      systemOrange: '#FF9F0A',
      systemPurple: '#BF5AF2',
      systemPink: '#FF375F',
    },
  },
  typography: {
    fontFamily: {
      displayBold: 'SFProDisplay-Bold',
      textRegular: 'SFProText-Regular',
      textSemibold: 'SFProText-Semibold',
    },
    fontSize: {
      largeTitle: 34,
      title1: 28,
      headline: 17,
      body: 17,
      callout: 16,
      footnote: 13,
    },
  },
};

export const appleBrand: BrandConfig = {
  id: 'apple',
  name: 'Apple',
  colors: {
    light: {
      primary: '#007AFF',
      background: '#F2F2F7',
      card: '#FFFFFF',
      text: 'rgba(0, 0, 0, 0.85)',
      textSecondary: 'rgba(60, 60, 67, 0.6)',
      border: 'rgba(60, 60, 67, 0.29)',
      systemRed: '#FF3B30',
      systemGreen: '#34C759',
      systemYellow: '#FF9500',
      systemBlue: '#007AFF',
      systemIndigo: '#5856D6',
      systemTeal: '#30B0C7',
      systemOrange: '#FF9500',
      systemPurple: '#AF52DE',
      systemPink: '#FF2D55',
    },
    dark: {
      primary: '#0A84FF',
      background: '#000000',
      card: '#1C1C1E',
      text: 'rgba(255, 255, 255, 0.85)',
      textSecondary: 'rgba(235, 235, 245, 0.6)',
      border: 'rgba(84, 84, 88, 0.65)',
      systemRed: '#FF453A',
      systemGreen: '#32D74B',
      systemYellow: '#FF9F0A',
      systemBlue: '#0A84FF',
      systemIndigo: '#5E5CE6',
      systemTeal: '#40C8E0',
      systemOrange: '#FF9F0A',
      systemPurple: '#BF5AF2',
      systemPink: '#FF375F',
    },
  },
  typography: {
    fontFamily: {
      displayBold: 'SFProDisplay-Bold',
      textRegular: 'SFProText-Regular',
      textSemibold: 'SFProText-Semibold',
    },
    fontSize: {
      largeTitle: 34,
      title1: 28,
      headline: 17,
      body: 17,
      callout: 16,
      footnote: 13,
    },
  },
};

export const googleBrand: BrandConfig = {
  id: 'google',
  name: 'Google',
  colors: {
    light: {
      primary: '#4285F4',
      secondary: '#34A853',
      accent: '#EA4335',
      background: '#FFFFFF',
      card: '#F8F9FA',
      text: '#202124',
      textSecondary: '#5F6368',
      border: '#DADCE0',
      systemRed: '#EA4335',
      systemGreen: '#34A853',
      systemYellow: '#FBBC04',
      systemBlue: '#4285F4',
      systemIndigo: '#9C27B0',
      systemTeal: '#00BCD4',
      systemOrange: '#FF9800',
      systemPurple: '#9C27B0',
      systemPink: '#E91E63',
    },
    dark: {
      primary: '#8AB4F8',
      secondary: '#81C995',
      accent: '#F28B82',
      background: '#202124',
      card: '#2D2E30',
      text: '#E8EAED',
      textSecondary: '#9AA0A6',
      border: '#3C4043',
      systemRed: '#F28B82',
      systemGreen: '#81C995',
      systemYellow: '#FDD663',
      systemBlue: '#8AB4F8',
      systemIndigo: '#B39DDB',
      systemTeal: '#4DD0E1',
      systemOrange: '#FFB74D',
      systemPurple: '#B39DDB',
      systemPink: '#F48FB1',
    },
  },
  typography: {
    fontFamily: {
      displayBold: 'Roboto-Bold',
      textRegular: 'Roboto-Regular',
      textSemibold: 'Roboto-Medium',
    },
    fontSize: {
      largeTitle: 32,
      title1: 26,
      headline: 16,
      body: 16,
      callout: 15,
      footnote: 12,
    },
  },
};

export const brandRegistry: Record<string, BrandConfig> = {
  default: defaultBrand,
  apple: appleBrand,
  google: googleBrand,
};

export const getBrand = (brandId: string): BrandConfig => {
  return brandRegistry[brandId] || defaultBrand;
};

export const getAllBrands = (): BrandConfig[] => {
  return Object.values(brandRegistry);
};

export const registerBrand = (brand: BrandConfig): void => {
  brandRegistry[brand.id] = brand;
};


