import React from 'react';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold
} from '@expo-google-fonts/poppins';

import theme from "./src/global/styles/theme";
import { Dashboard } from './src/screens/Dashboard';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [fontLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fontLoaded) {
    return <AppLoading />
  }
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" />
      <Dashboard />
    </ThemeProvider>
  );
}

