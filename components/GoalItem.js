import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';

export default function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{color: '#210644'}}
        onPress={props.onDelete.bind(this, props.id)}>
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,

    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: '#ffff',
  },

  goalText: {
    padding: 8,
    color: 'white',
  },
});
