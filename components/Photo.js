import React from 'react';
import { View,Text, StyleSheet,Image } from 'react-native';

export default function Photo() {
  return (
      <Image style={styles.photo} source={{uri:'http://media.breitbart.com/media/2017/07/chinese-president-xi-jinping-waving-getty.jpg'}}/>
  );
}

const styles = StyleSheet.create({
  photo:{
    height:50,
    width:50,
    borderRadius:25,
    marginHorizontal:3
  }
})
