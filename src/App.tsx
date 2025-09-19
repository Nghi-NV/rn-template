import React from "react";
import AppNavigation from "./navigation/AppNavigation";
import { ThemeProvider } from "./core/theme";

export default function App() {
  return (
    <ThemeProvider>
      <AppNavigation />
    </ThemeProvider>
  );
}