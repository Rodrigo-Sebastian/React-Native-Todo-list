import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DetailScreen = ({ route, navigation }) => {
  const { todo, setTodos } = route.params;

  const markAsDone = () => {
    setTodos(prevTodos =>
      prevTodos.map(item =>
        item.id === todo.id ? { ...item, done: !item.done } : item
      )
    );
    navigation.goBack();
  };

  const deleteTodo = () => {
    setTodos(prevTodos => prevTodos.filter(item => item.id !== todo.id));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={[styles.todoText, todo.done && styles.todoTextDone]}>{todo.text}</Text>
      <TouchableOpacity style={styles.button} onPress={markAsDone}>
        <Text style={styles.buttonText}>{todo.done ? "Markera som inte färdig" : "Markera icke färdig"}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.deleteButton]} onPress={deleteTodo}>
        <Text style={[styles.buttonText, styles.deleteButtonText]}>Radera</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  todoText: {
    fontSize: 24,
    marginBottom: 20,
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
  },
  button: {
    width: 200,
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#007bff',
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  deleteButtonText: {
    color: '#fff',
  },
});

export default DetailScreen;
