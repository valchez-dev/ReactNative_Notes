import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect} from 'react';
import {Text, StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks, setTaskID} from '../redux/actions';
import CheckBox from 'react-native-checkbox';

const Home = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    getTasks();
  }, []);

  const getTasks = () => {
    AsyncStorage.getItem('tasks')
      .then(tasks => {
        const parsedTasks = JSON.parse(tasks);
        if (parsedTasks && typeof parsedTasks === 'object') {
          dispatch(setTasks(parsedTasks));
        }
      })
      .catch(e => console.log(e));
  };

  //delete
  const deleteHandler = id => {
    const filteredTasks = tasks.filter(task => task.id !== id);

    AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks))
      .then(() => {
        dispatch(setTasks(filteredTasks));
      })
      .catch(e => console.log(e + ' / in delete task button'));
  };

  //checkbox
  const isCheckedHandler = id => {
    const index = tasks.findIndex(task => task.id === id);

    let newTasks = [];

    if (index > -1) {
      newTasks = [...tasks];
      newTasks[index].checked = !newTasks[index].checked;

      AsyncStorage.setItem('tasks', JSON.stringify(newTasks))
        .then(() => {
          dispatch(setTasks(newTasks));
        })
        .catch(e => console.log(e));
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks.filter(task => task.checked === false)}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => {
              dispatch(setTaskID(item.id));
              navigation.navigate('Details');
            }}>
            <CheckBox
              label=""
              checked={item.checked}
              onChange={() => isCheckedHandler(item.id)}
            />

            <View style={styles.card_text}>
              <Text numberOfLines={1} style={styles.title}>
                {item.title}
              </Text>
              <Text numberOfLines={3} style={styles.description}>
                {item.description}
              </Text>
            </View>

            <TouchableOpacity onPress={() => deleteHandler(item.id)}>
              <View style={styles.card_button}>
                <Text style={styles.card_button_text}>Delete</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(setTaskID(new Date().getMilliseconds()));
          navigation.navigate('Details');
        }}
        style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BFD8B8',
  },
  card: {
    padding: 10,
    marginBottom: 5,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    elevation: 5,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#E7EAB5',
  },
  card_text: {
    flexDirection: 'column',
  },
  card_button: {
    borderColor: '#000000',
    borderWidth: 0.5,
    borderRadius: 5,
    backgroundColor: '#F1F7E7',
    width: 55,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card_button_text: {
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  title: {
    textAlign: 'left',
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
  },
  description: {
    textAlign: 'left',
    fontSize: 15,
    color: '#000000',
    fontStyle: 'italic',
  },
  btn: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#FBF46D',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 30,
    right: 30,
    elevation: 5,
  },
  btnText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000',
    fontSize: 30,
  },
});

export default Home;
