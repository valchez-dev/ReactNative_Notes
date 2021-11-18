import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  Keyboard,
  Alert,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks, setTaskID} from '../redux/actions';

const Details = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(()=>{
    getTask()
  },[]);

  const getTask = () => {
    const Task = tasks.find(task=> task.id === taskID);
    if(Task){
      setTitle(Task.title);
      setDescription(Task.description);
    }
  }


  const saveTaskButton = () => {
    Keyboard.dismiss();

    if (title.length == 0) {
      Alert.alert('Warning!', 'Title can not be empty');
    } else {
      try {
        let Task = {
          id: taskID,
          title,
          description,
        };

        let newTasks = [...tasks, Task];
        AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
          .then(() => {
            dispatch(setTasks(newTasks));
            Alert.alert('Success', 'Task has been saved');
            navigation.goBack('Home');
          })
          .catch(e => console.log(e));
      } catch (e) {
        console.log(e);
      }
    }

    
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        style={styles.input}
        placeholder="Title..."
      />

      <TextInput
        value={description}
        onChangeText={text => setDescription(text)}
        multiline={true}
        style={styles.input}
        placeholder="Description..."
      />

      <Button onPress={saveTaskButton} title="Save" color="#0480BA" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0D2DB',
    padding: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF90',
    padding: 10,
    margin: 10,
    fontSize: 20,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
});

export default Details;
