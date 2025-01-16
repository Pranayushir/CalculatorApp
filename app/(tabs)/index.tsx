import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TouchableHighlight } from 'react-native';

export default function Home() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string): void => {
    if (value === '=') {
      try {
        setResult(eval(input).toString()); 
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

      {/* Created by Text Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Calc by Pranay</Text>
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
    borderBottomWidth: 2,
  },
  inputText: {
    fontSize: 50,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  resultText: {
    fontSize: 30,
    color: '#4CAF50',
    marginTop: 10,
    fontWeight: '500',
  },
  buttonsContainer: {
    flex: 2,
    padding: 20,
    backgroundColor: '#1E1E1E',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  button: {
    flex: 1,
    height: 80,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderRadius: 15,
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    fontSize: 28,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  operatorButton: {
    backgroundColor: '#FF9800',
  },
  equalsButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
  },
  clearButton: {
    backgroundColor: '#F44336',
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#1E1E1E',
  },
  footerText: {
    fontSize: 18,
    color: '#FFFFFF',
    marginTop: 15,
    fontWeight: '400',
  },
});
