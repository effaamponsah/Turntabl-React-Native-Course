import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Another from './Another';
import Functional from './Functional';
import AuthStack from './navigation/AuthStack';
import RootNavigator from './navigation/RootNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import theme from './theme/theme';

export default function App() {

  return (
    <PaperProvider theme={theme}>
      <RootNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
