import React from 'react';
import { View,Text, StyleSheet,ScrollView } from 'react-native';
import CardInfo from '../components/CardInfo'

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <CardInfo/>
      <Text></Text>
     </ScrollView>
  );
}

Home.navigationOptions = ({navigation}) =>{
  return{
    title:'',

    
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white'
  }
})
