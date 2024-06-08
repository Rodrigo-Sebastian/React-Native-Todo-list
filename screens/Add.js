// screens/Add.js
import React, { useState } from 'react';
import { View, TextInput, Button, Modal, StyleSheet } from 'react-native';

const AddScreen = ({ route, navigation }) => {
  const { setTodos } = route.params;
  const [text, setText] = useState('');

  const addTodo = () => {
    setTodos(prevTodos => [
      ...prevTodos,
      { id: Math.random().toString(), text, done: false }
    ]);
    navigation.goBack();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={true}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            placeholder="Lägg till en ToDo"
            value={text}
            onChangeText={setText}
            style={styles.input}
          />
          <Button title="Lägg till" onPress={addTodo} />
          <Button title="Avbryt" onPress={() => navigation.goBack()} color="red" />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default AddScreen;
