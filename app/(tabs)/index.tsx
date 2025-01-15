import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string): void => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); // Use a safer library in production
      } catch {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  const renderButton = (value: string, style: object = {}): JSX.Element => (
    <TouchableOpacity
      onPress={() => handlePress(value)}
      style={[styles.button, style]}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Display Section */}
      <View style={styles.display}>
        <Text style={styles.inputText}>{input || '0'}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      {/* Buttons Section */}
      <View style={styles.buttonsContainer}>
        <View style={styles.row}>
          {renderButton('C', styles.clearButton)}
          {renderButton('/', styles.operatorButton)}
          {renderButton('*', styles.operatorButton)}
          {renderButton('-', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('7')}
          {renderButton('8')}
          {renderButton('9')}
          {renderButton('+', styles.operatorButton)}
        </View>
        <View style={styles.row}>
          {renderButton('4')}
          {renderButton('5')}
          {renderButton('6')}
          {renderButton('=', styles.equalsButton)}
        </View>
        <View style={styles.row}>
          {renderButton('1')}
          {renderButton('2')}
          {renderButton('3')}
          {renderButton('0', { flex: 2 })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  display: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderBottomColor: '#333',
    borderBottomWidth: 1,
  },
  inputText: {
    fontSize: 40,
    color: '#FFFFFF',
  },
  resultText: {
    fontSize: 30,
    color: '#4CAF50',
    marginTop: 10,
  },
  buttonsContainer: {
    flex: 2,
    padding: 10,
    backgroundColor: '#1E1E1E',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 70,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
  operatorButton: {
    backgroundColor: '#FF9800',
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
  },
  clearButton: {
    backgroundColor: '#F44336',
  },
});
