import React, { useState } from 'react';
import {Text, StyleSheet, View, TextInput, Button, Keyboard} from 'react-native';

const Details = () => {

const [title, setTitle] = useState('');
const [description, setDescription] = useState('');


const btnHandler = () => {

  Keyboard.dismiss();

}


  return (
    <View style={styles.container}>
      <TextInput
      value={title}
      onChangeText={text=>setTitle(text)}
      style={styles.input}
      placeholder="Title..." />

<TextInput
      value={description}
      onChangeText={text=>setDescription(text)}
      multiline={true}
      style={styles.input}
      placeholder="Description..." />

      <Button 
      onPress={btnHandler} 
      title='Save'
      color="#0480BA"/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#C0D2DB',
    padding:10,
    justifyContent:'flex-start',
    alignItems:'center'
  },
  input: {
    backgroundColor:'#FFFFFF90',
    padding:10,
    margin:10,
    fontSize:20,
    width:"80%",
    borderRadius:10,
    borderWidth:1,
    borderColor:"#000000",
  },
});

export default Details;
