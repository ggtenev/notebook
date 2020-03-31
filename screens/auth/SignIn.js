import React from 'react';
import { View,Text, StyleSheet, Image, Button } from 'react-native';

import Colors from '../../constants/styles'

export default function SignIn() {
  return (
    <View style = {styles.container}>
      <Image source={require('../../assets/images/download')}/>
      <Image source={require('../../assets/images/front')}/>
      <View style={styles.buttons}>
        <View style={styles.phoneButton}>
          <Button title='Sign in with phone number'/>
        </View>
      </View>
      <Text>By signing in you agree  with our <Text style={styles.underline}>Terms</Text> and  <Text style={styles.underline}>Privacy Policy</Text></Text>
     </View>
  );
}

const styles = StyleSheet.create({
  container:{
    padding:10,
    justifyContent:'space-between',

  },
  buttons:{

  },
  phoneButton:{
    backgroundColor:Colors.main
  },
  underline:{
    textDecorationLine:'underline'
  }
})
