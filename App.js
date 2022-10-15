import React, {useState} from 'react';
import {StatusBar} from 'expo-status-bar';
import {Button, StyleSheet, View, FlatList} from 'react-native';

import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalVisible(true);
  }

  function endAddGoalHandler() {
    setIsModalVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    if (enteredGoalText !== '') {
      setGoals(currentGoal => [
        ...currentGoal,
        {text: enteredGoalText, id: Math.random().toString()},
      ]);
      setIsModalVisible(false);
    }
  }

  function deleteItem(id) {
    setGoals(currentGoal => currentGoal.filter(goal => goal.id !== id));
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="ADD NEW GOAL"
          color="#5D3DA8"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visibility={isModalVisible}
          addGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={item => {
              return item.id;
            }}
            renderItem={itemdata => {
              return (
                <GoalItem
                  onDelete={deleteItem}
                  id={itemdata.item.id}
                  text={itemdata.item.text}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 8,
    backgroundColor: '#1e085a',
  },

  goalsContainer: {
    flex: 5,
    marginTop: 20,
  },
});
