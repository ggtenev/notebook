import React, { useEffect } from "react";
import { View, StyleSheet, Animated, Text, Dimensions,AsyncStorage } from "react-native";

export default function Welcome({navigation}) {
  const width = Dimensions.get('screen').width

  let position1 = new Animated.ValueXY(0, 0);
  let position2 = new Animated.ValueXY(0, 0);
  useEffect(() => {
    Animated.timing(position1, {
      toValue: { x: width/4.5, y: 0 },
      duration:900
    }).start();
    Animated.timing(position2, {
      toValue: { x: -width/3, y: 0 },
      duration:900
    }).start();
  }, []);

  _retrieveData = async () => {
    try {
      const token = await AsyncStorage.getItem('tokehhn');
      if (token !== null) {
        // We have data!!
         setTimeout(() => navigation.navigate('Home'),2000)
      } else{
        setTimeout(() => navigation.navigate('Auth'),2000)
      } 
    } catch (error) {
      // Error retrieving data
    }
  };

  useEffect(() => {
    _retrieveData()
  },[])

  return (
    <View style={styles.container}>
    <Animated.View style={position1.getLayout()}>
      {/* <View style={styles.ball} /> */}
      <Text style={{position:'relative',fontWeight:'bold',fontSize:24,color:'#5790f9'}}>Welcome to Glue</Text>
    </Animated.View>
    <Animated.View style={position2.getLayout()}>
      {/* <View style={styles.ball} /> */}
      <Text style={{position:'relative',right:-220,fontWeight:'bold', fontSize:21,color:'#5790f9'}}>Where everything happens</Text>
    </Animated.View>
    </View>
  );
}  

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent:'center'
  }
});