import React from 'react';
import {Text, StyleSheet, TouchableOpacity, View} from 'react-native';

const home = () => {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <TouchableOpacity style={styles.btn}>
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
  btn: {
    width: 60,
    height:60,
    borderRadius:50,
    backgroundColor:"#FBF46D",
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    bottom:30,
    right:30,
    elevation:5
  },
  btnText:{
    textAlign:'center',
    fontWeight:'bold',
    color:'#000000',
    fontSize:30
  }
});

export default home;
