import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import database from '@react-native-firebase/database';

const PlayerForm = () => {
  const [name, setName] = useState('');
  const [score, setScore] = useState('');

  const handleSubmit = async () => {
    if (name && score) {
      try {
        await database().ref('/players').push({
          name,
          score: parseInt(score),
        });
        Alert.alert('Success', 'Player data saved!');
        setName('');
        setScore('');
      } catch (error) {
        console.error(error);
        Alert.alert('Error', 'Error saving data');
      }
    } else {
      Alert.alert('Error', 'Please enter both name and score');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter player name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter player score"
        keyboardType="numeric"
        value={score}
        onChangeText={setScore}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default PlayerForm;
