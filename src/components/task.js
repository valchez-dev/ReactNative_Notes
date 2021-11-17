import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Task = () => {
  return (
    <View style={styles.container}>
      <Text>Task</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94B3FD',
  },

});

export default Task;
