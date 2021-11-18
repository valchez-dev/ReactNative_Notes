import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import {Text, StyleSheet, TouchableOpacity, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setTasks, setTaskID} from '../redux/actions';

const Home = ({navigation}) => {
  const {tasks} = useSelector(state => state.taskReducer);
  const dispatch = useDispatch();


  useEffect(()=>{
    getTasks()
  },[])

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

  return (
    <View style={styles.container}>
      <FlatList 
      data={tasks}
      renderItem={({item})=>(
        <TouchableOpacity 
        style={styles.card}>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
        </TouchableOpacity>
      )}
      />
      <TouchableOpacity
        onPress={() => {
          dispatch(setTaskID(new Date().getMilliseconds()))
          navigation.navigate('Details')}}
        style={styles.btn}>
        <Text style={styles.btnText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#94B3FD',
  },
  card:{
    padding:10, 
    margin:10,
    width:'80%',
    justifyContent:'center',
    elevation:5,
    borderColor:"#000000",
    borderWidth:1,
    borderRadius:10,
    backgroundColor:"#009DAE"
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
