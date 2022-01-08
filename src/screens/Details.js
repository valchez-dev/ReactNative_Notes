import React, {useEffect, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  Alert,
  Modal,
} from 'react-native';

import Fab from '../components/floating_action_button';

const Details = ({navigation}) => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');


  const saveNoteHandler = () => {};

  const deleteNoteHandler = () => {};


  //editing the inputs
  const titleEditingHandler = (text) => {
    setTitle(text)
  };
  const descriptionEditingHandler = (text) => {
    setDescription(text)
  };

  return (
    <View style={styles.container}>

      <Modal
        visible={modal}
        animationType="slide"
        hardwareAccelerated={true}
        onRequestClose={() => setModal(!modal)} />

      <TextInput
        value={title}
        onChangeText={titleEditingHandler}
        style={styles.input}
        placeholder="Title..."
      />

      <TextInput
        value={description}
        onChangeText={descriptionEditingHandler}
        multiline={true}
        style={styles.input}
        placeholder="Description..."
      />

      <Fab title="Delete" onPressed={deleteNoteHandler} />

      <Fab title="Save" onPressed={saveNoteHandler} />

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
});

export default Details;
