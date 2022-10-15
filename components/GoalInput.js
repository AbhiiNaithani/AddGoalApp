import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal, Image} from 'react-native';

export default function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.addGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visibility} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../assets/image/goal.png')}
        />
        <TextInput
          placeholder="Enter your goal!"
          style={styles.textInput}
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="CANCEL" onPress={props.onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title=" ADD " onPress={addGoalHandler} color="#5e0acc" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },

  buttonContainer: {
    flexDirection: 'row',
    marginTop: 16,
  },

  image: {
    height: 100,
    width: 100,
    margin: 20,
  },

  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    marginRight: 8,
    padding: 12,
    backgroundColor: '#e4d0ff',
    color: '#120438',
  },

  button: {
    width: 100,
    marginHorizontal: 16,
  },
});
