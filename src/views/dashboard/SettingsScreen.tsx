// File: src/screens/SettingsScreen.js
import React from 'react';
import { View, SafeAreaView, ScrollView, Switch, StyleSheet } from 'react-native';
import { useTheme, registerBrand } from '../../core/theme';
import { StyledText } from '../../components/text/StyledText'; // Import component mới

const customBrand = {
  id: 'custom-demo',
  name: 'Custom Demo',
  colors: {
    light: {
      primary: '#E91E63',
      background: '#FAFAFA',
      card: '#FFFFFF',
      text: '#212121',
      textSecondary: '#757575',
      border: '#E0E0E0',
      systemRed: '#F44336',
      systemGreen: '#4CAF50',
      systemYellow: '#FF9800',
      systemBlue: '#2196F3',
      systemIndigo: '#3F51B5',
      systemTeal: '#009688',
      systemOrange: '#FF5722',
      systemPurple: '#9C27B0',
      systemPink: '#E91E63',
    },
    dark: {
      primary: '#F48FB1',
      background: '#121212',
      card: '#1E1E1E',
      text: '#FFFFFF',
      textSecondary: '#B0B0B0',
      border: '#333333',
      systemRed: '#EF5350',
      systemGreen: '#66BB6A',
      systemYellow: '#FFA726',
      systemBlue: '#42A5F5',
      systemIndigo: '#7986CB',
      systemTeal: '#26A69A',
      systemOrange: '#FF7043',
      systemPurple: '#BA68C8',
      systemPink: '#F48FB1',
    },
  },
  typography: {
    fontFamily: {
      displayBold: 'Inter-Bold',
      textRegular: 'Inter-Regular',
      textSemibold: 'Inter-Medium',
    },
    fontSize: {
      largeTitle: 36,
      title1: 30,
      headline: 18,
      body: 16,
      callout: 15,
      footnote: 12,
    },
  },
} as const;
registerBrand(customBrand as any);

// Giả lập một component Row trong danh sách Cài đặt của iOS
const SettingsRow = ({ text, children }: { text: string; children: React.ReactNode }) => {
  const { theme } = useTheme();
  return (
    <View style={[theme.styles.row, styles.settingsRow]}>
      <StyledText variant="body" style={styles.flex1}>{text}</StyledText>
      {children}
    </View>
  );
};

const SettingsScreen = () => {
  const { theme, toggleTheme, themeMode, themePreference, setThemePreference, availableBrands, currentBrand, setBrand } = useTheme();

  return (
    <SafeAreaView style={[styles.flex1, { backgroundColor: theme.colors.background }]}>
      <ScrollView style={{ paddingHorizontal: theme.spacing.m }}>
        <StyledText variant="largeTitle" style={{ marginTop: theme.spacing.m, marginBottom: theme.spacing.l }}>
          Cài đặt
        </StyledText>
        <StyledText variant='title1' style={{ marginTop: theme.spacing.m, marginBottom: theme.spacing.l }}>
          Cài đặt
        </StyledText>
        <StyledText variant='headline' style={{ marginTop: theme.spacing.m, marginBottom: theme.spacing.xs }}>
          Cài đặt
        </StyledText>

        <View style={{ height: theme.spacing.xl, backgroundColor: theme.colors.primary }} />

        <View style={[theme.styles.card, styles.cardNoPadding]}>
          <SettingsRow text="Thông báo" >
            <StyledText variant="body" style={{ color: theme.colors.textSecondary }}>&gt;</StyledText>
          </SettingsRow>
          <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: theme.colors.border }} />
          <SettingsRow text="Lối tắt hữu ích" >
            <StyledText variant="body" style={{ color: theme.colors.textSecondary }}>&gt;</StyledText>
          </SettingsRow>
        </View>

        <View style={{ height: theme.spacing.l }} />

        <View style={theme.styles.card}>
          <SettingsRow text="Theo hệ thống (System)">
            <Switch onValueChange={(v) => setThemePreference(v ? 'system' : themeMode)} value={themePreference === 'system'} />
          </SettingsRow>
          <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: theme.colors.border }} />
          <SettingsRow text="Giao diện Tối (Dark)">
            <Switch onValueChange={toggleTheme} value={themeMode === 'dark' && themePreference !== 'system'} />
          </SettingsRow>
        </View>

        <View style={{ height: theme.spacing.l }} />

        <View style={theme.styles.card}>
          <SettingsRow text={`Brand hiện tại: ${currentBrand.name}`}>
            <StyledText variant="body" style={{ color: theme.colors.textSecondary }}>
              {currentBrand.id}
            </StyledText>
          </SettingsRow>
          <View style={{ height: StyleSheet.hairlineWidth, backgroundColor: theme.colors.border }} />
          {availableBrands.map((b) => (
            <SettingsRow key={b.id} text={b.name}>
              <Switch onValueChange={() => setBrand(b.id)} value={currentBrand.id === b.id} />
            </SettingsRow>
          ))}
        </View>

        <StyledText variant="footnote" style={[styles.centerText, { color: theme.colors.textSecondary, padding: theme.spacing.m, marginTop: theme.spacing.s }]}>
          Bật tính năng này để ứng dụng tự động chuyển đổi giao diện sáng/tối theo cài đặt hệ thống của bạn.
        </StyledText>

      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  flex1: { flex: 1 },
  settingsRow: { paddingVertical: 8, minHeight: 54 },
  cardNoPadding: { paddingVertical: 0 },
  centerText: { textAlign: 'center' },
});