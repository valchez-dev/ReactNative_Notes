import React, {useEffect} from "react"
import { Text, StyleSheet, Image, View } from "react-native"

const welcome = ({navigation}) => {

useEffect(()=> {
    setTimeout(()=>{
        navigation.replace('Home');
    },1500);

},[])


    return(
    <View style={styles.container}>
        <Image style={styles.image} source={require('../images/login.png')} />
        <Text style={styles.text}>ToDo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#94DAFF",
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        color:'#2F86A6',
        fontSize:32,
        fontWeight:'700',
        margin:10
    },
    image:{
        width:130,
        height:130,
    },
});

export default welcome;




