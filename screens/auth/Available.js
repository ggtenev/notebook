import React, { useEffect } from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Keyboard
} from "react-native";
import Colors from '../../constants/styles'

export default function Available({ navigation }) {

  useEffect(() => {
    Keyboard.dismiss()
  },[])

  return (
    <ImageBackground
      source={require("../../assets/images/available.png")}
      style={styles.image}
    >
      <View style={{justifyContent:'center',flex:1}}>
        <Text style={styles.title}>Available to hang out?</Text>
      </View>

      <View style={{ justifyContent: "flex-end" }}>
        <View style={styles.text}>
          <TouchableOpacity style={styles.notyet} onPress={() => navigation.navigate("Home")}>
            <Text style={{color:'#dddbdd',fontSize:18}}>Not yet...</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.yes} onPress={() => navigation.navigate("Home")}>
            <Text style={{color:'black',fontSize:24}}>Yes!</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    flex: 1
    // justifyContent: "center"
  },
  text: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "white",
    fontSize: 26,
    marginTop: 110,
    alignSelf: "center",
    position:'relative',
    top:10
  },
  notyet:{
    // color:'#e3e3ef',
    position:'relative',
    left:15,
    fontSize:17,
    bottom:10
  },
  yes:{
    // color:'black',
    position:'relative',
    right:15,
    fontSize:25,
    bottom:12
  }
});
