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
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks, setTaskID} from '../redux/actions';

const Details = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState('');

  const {tasks, taskID} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    const Task = tasks.find(task => task.id === taskID);
    if (Task) {
      setTitle(Task.title);
      setDescription(Task.description);
    }
  };

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
          checked: false,
        };

        //if exist = update, if not = create
        // -1 => no element
        const index = tasks.findIndex(task => task.id === taskID);
        let newTasks = [];

        if (index > -1) {
          newTasks = [...tasks];
          newTasks[index] = Task;
        } else {
          newTasks = [...tasks, Task];
        }

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

  const alarmHandler = () => {};

  return (
    <View style={styles.container}>
      <Modal
      visible={modal}
      animationType='slide'
      hardwareAccelerated={true}
      onRequestClose={()=>setModal(!modal)}>
  
      </Modal>

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

      <TouchableOpacity onPress={alarmHandler} style={styles.btnAlarm}>
        <Text style={styles.btnText}>Set Alarm</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={saveTaskButton} style={styles.btnSave}>
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94DAFF',
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
  btnAlarm: {
    backgroundColor: '#94B3FD',
    padding: 10,
    margin: 10,
    fontSize: 20,
    width: '40%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  btnSave: {
    backgroundColor: '#94B3FD',
    padding: 10,
    margin: 10,
    fontSize: 20,
    width: '40%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000000',
  },
  btnText: {
    textAlign: 'center',
    color: '#0000000',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Details;
