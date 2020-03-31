import React, { useState } from 'react';
import { View,Text, StyleSheet, Picker, TextInput } from 'react-native';

export default function Motive() {
  
const [code, setCode] = useState('+44')
const [phone,setPhone] = useState('')
console.log(typeof Number(code+phone),code+phone)
  return (
    <View style={styles.container}>
      <Text>Motive</Text>
      
      
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
})
