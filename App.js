import { StatusBar } from 'react-native';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#38A69D' barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}


