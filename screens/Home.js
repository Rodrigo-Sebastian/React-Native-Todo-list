import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const [todos, setTodos] = useState([]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail', { todo: item, setTodos })}
      style={styles.todoItem}
    >
      <Text style={[styles.todoText, item.done && styles.todoTextDone]}>{item.text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListEmptyComponent={<Text style={styles.emptyText}>No todos</Text>}
        contentContainerStyle={styles.listContainer}
      />
      <View style={styles.buttonContainer}>
        <Button title="Lägg till en Todo" onPress={() => navigation.navigate('Add', { setTodos })} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  listContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoItem: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    elevation: 2,
  },
  todoText: {
    fontSize: 18,
  },
  todoTextDone: {
    textDecorationLine: 'line-through',
  },
  emptyText: {
    fontSize: 18,
    color: '#6c757d',
  },
  buttonContainer: {
    padding: 20,
  },
});

export default HomeScreen;
