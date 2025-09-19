import React, { createContext, useState, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { getBrand, getAllBrands } from '../brands';
import { createTheme } from '../factory/themeFactory';
import type { BrandConfig, Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  themeMode: 'light' | 'dark';
  themePreference: 'light' | 'dark' | 'system';
  currentBrand: BrandConfig;
  availableBrands: BrandConfig[];
  toggleTheme: () => void;
  setBrand: (brandId: string) => void;
  setThemeMode: (mode: 'light' | 'dark') => void;
  setThemePreference: (pref: 'light' | 'dark' | 'system') => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: {} as Theme,
  themeMode: 'light',
  themePreference: 'system',
  currentBrand: {} as BrandConfig,
  availableBrands: [],
  toggleTheme: () => { },
  setBrand: () => { },
  setThemeMode: () => { },
  setThemePreference: () => { },
});

interface ThemeProviderProps {
  children: React.ReactNode;
  initialBrand?: string;
  initialMode?: 'light' | 'dark';
  initialPreference?: 'light' | 'dark' | 'system';
}

export const ThemeProvider = ({ children, initialBrand = 'default', initialPreference = 'system' }: ThemeProviderProps) => {
  const systemTheme = useColorScheme();
  const [themePreference, setThemePreference] = useState<'light' | 'dark' | 'system'>(initialPreference);
  const effectiveModeFromSystem = (systemTheme || 'light') as 'light' | 'dark';
  const [currentBrandId, setCurrentBrandId] = useState(initialBrand);

  const currentBrand = useMemo(() => getBrand(currentBrandId), [currentBrandId]);

  const availableBrands = useMemo(() => getAllBrands(), []);

  const effectiveMode: 'light' | 'dark' = useMemo(() => {
    if (themePreference === 'system') return effectiveModeFromSystem;
    return themePreference;
  }, [themePreference, effectiveModeFromSystem]);

  const theme = useMemo(() => createTheme(currentBrand, effectiveMode), [currentBrand, effectiveMode]);

  const toggleTheme = () => setThemePreference((prev) => (prev === 'light' ? 'dark' : 'light'));
  const setBrand = (brandId: string) => setCurrentBrandId(brandId);
  const setModeExplicit = (mode: 'light' | 'dark') => {
    setThemePreference(mode);
  };

  const contextValue: ThemeContextType = {
    theme,
    themeMode: effectiveMode,
    themePreference,
    currentBrand,
    availableBrands,
    toggleTheme,
    setBrand,
    setThemeMode: setModeExplicit,
    setThemePreference,
  };

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);

export const useLegacyTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return {
    theme: {
      colors: theme.colors,
      typography: theme.typography,
      spacing: theme.spacing,
      styles: theme.styles,
    },
    themeMode: theme.mode,
    toggleTheme,
  };
};


