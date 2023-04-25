/*
* File: App.js
* Author: Maximilian Barabas
* Copyright: M B 
* Group: Szoft 2 N
* Date: 2023-04-19
* Github: https://github.com/maximilianbarabas
* Licenc: GNU GPL
*/


import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

function calculatePercentage(total, count) 
{
  return ((count / total) * 100).toFixed(2);
}

export default function App() 
{
  const [firstClassApples, setFirstClassApples] = useState(0);
  const [secondClassApples, setSecondClassApples] = useState(0);
  const totalApples = firstClassApples + secondClassApples;
  const firstClassPercentage = calculatePercentage(totalApples, firstClassApples);
  const secondClassPercentage = calculatePercentage(totalApples, secondClassApples);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>almaosztaly</Text>
      <Text style={styles.subheader}>Maximilian Barabas Szoft II N </Text>
      <TextInput
        style={styles.input}
        placeholder="Első osztályú"
        keyboardType="numeric"
        onChangeText={(value) => setFirstClassApples(parseInt(value))}
      />
      <TextInput
        style={styles.input}
        placeholder="Másodosztályúk"
        keyboardType="numeric"
        onChangeText={(value) => setSecondClassApples(parseInt(value))}
      />
      <Text style={styles.result}>Összes alma: {totalApples}</Text>
      <Text style={styles.result}>Első osztályú almák (%): {firstClassPercentage}%</Text>
      <Text style={styles.result}>Másodosztályú almák (%): {secondClassPercentage}%</Text>
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
  header: {
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 10,
  },
  subheader: {
    marginBottom: 20,
    fontSize: 16,
  },
  input: {
    height: 45,
    width: '83%',
    margin: 16,
    padding: 13,
    borderWidth: 3,

  },
  result: {
    fontSize: 14,
    marginVertical: 8

  },
});