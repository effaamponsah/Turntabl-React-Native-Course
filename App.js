import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Another from './Another';
import Functional from './Functional';

export default function App() {

  return (
    <View style={styles.container}>
      <Another
        person_name="James"
      />
      <Functional
        person_name="Fiifi"
      />
    </View>
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
