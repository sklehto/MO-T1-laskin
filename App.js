import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {

  const [number1, setNumber1] = useState(null);
  const [number2, setNumber2] = useState(null);
  const [result, setResult] = useState('');

  const plusButtonPressed = () => {
    setResult( Number(number1) + Number(number2) );
  };

  const minusButtonPressed = () => {
    setResult( Number(number1) - Number(number2) );
  };

  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={number => setNumber1(number)}
        value={number1}
      />
      <TextInput
        style={{width: 200, borderColor: 'grey', borderWidth: 1}}
        keyboardType="numeric"
        onChangeText={number => setNumber2(number)}
        value={number2}
      />
      <View style={styles.button}>
        <Button onPress={plusButtonPressed} title="+" />
        <Button onPress={minusButtonPressed} title="-" />
      </View>
      <StatusBar style="auto" />
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
  input: {
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 90,
    paddingTop: 25,
  },
});
