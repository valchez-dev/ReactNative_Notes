import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
} from 'react-native';

import Card from '../components/card';
import Fab from '../components/floating_action_button';

const Home = ({navigation}) => {
  const [input, setInput] = useState('');

  //input
  const inputHandler = text => {
    setInput(text);
  };

  //delete
  const cardDeleteHandler = () => {};

  //card pressed
  const cardPressHandler = () => {};


  //new note 
  const addNoteHandler = () => {

  };

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      <View style={styles.container}>
        <TextInput
          value={input}
          onChangeText={inputHandler}
          style={styles.searchBar}
          placeholder="Search..."
        />

        <View style={styles.placeholderView}>
          <Text style={styles.placeholderText}>ADD NOTES</Text>
        </View>


        <Fab title="Add Note" onPressed={addNoteHandler} />

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },

  searchBar: {
    marginTop: 5,
    borderWidth: 0.5,
    borderRadius: 40,
    paddingLeft: 15,
    fontSize: 18,
    borderColor: '#000',
    height: 40,
  },

  placeholderView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  placeholderText: {
    fontSize: 30,
    textTransform: 'uppercase',
    opacity: 0.2,
    fontWeight: 'bold',
  },
});

export default Home;
