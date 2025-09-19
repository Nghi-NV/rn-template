import React from "react";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../../core/theme";
import SettingsScreen from "./SettingsScreen";

export default function Dashboard() {
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SettingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});