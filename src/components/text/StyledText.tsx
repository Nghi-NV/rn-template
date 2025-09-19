// File: src/components/StyledText.js
import React from 'react';
import { Text } from 'react-native';
import { useTheme, Typography } from '../../core/theme';

const fontScale = 1.0;
const getScaledFontSize = (baseSize: number) => baseSize * fontScale;

export const StyledText = ({
  variant = 'body', style, children, ...props }:
  {
    variant?: keyof Typography;
    style?: any; children?: any; props?: any
  }) => {
  const { theme } = useTheme();

  const baseStyle = theme.typography[variant] || theme.typography.body;

  const scaledStyle = {
    ...baseStyle,
    fontSize: getScaledFontSize(baseStyle.fontSize || 16),
    color: theme.colors.text,
  };

  return (
    <Text style={[scaledStyle, style]} {...props}>
      {children}
    </Text>
  );
};