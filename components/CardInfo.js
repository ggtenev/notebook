import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  ScrollView
} from "react-native";

import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Colors from "../constants/styles";

import Photo from "./Photo";

export default function CardInfo({ likes, uri, minAway, name, title, song }) {
  return (
    <View>
      <ImageBackground
        source={{
          uri:
            "https://i.ytimg.com/vi/jzhDkdOqDb8/maxresdefault.jpg"
        }}
        style={{
          width: "100%",
          height: 250,
          zIndex: 0,
          justifyContent: "flex-end",
          alignItems: "flex-end"
        }}
      >
        <View style={styles.rightIcons}>
          <TouchableOpacity>
            <Ionicons name='md-share-alt' size={26} color='white' />
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.likes}>{likes} 44</Text>
            <EvilIcons name='like' size={26} color='white' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={styles.eventInfo}>
        <View style={styles.nameMin}>
          <Text style={styles.name}>{name} Yoda</Text>
          <View style={styles.rightMin}>
            <Entypo name='location-pin' size={18} color={Colors.text} />
            <Text style={styles.away}>{minAway}33 min away</Text>
          </View>
        </View>
        <View style={styles.eventTitle}>
          <Text style={styles.title}>
            {title}No! Try not! Do or do not, there is no try.
          </Text>
        </View>
        <View style={styles.chosenSong}>
          <Entypo name='spotify' size={22} color={Colors.text} />
          <Text>{song} Tool - Pneuma</Text>
        </View>
        <View style={styles.attendees}>
          <Photo />
          <Photo />
          {/* <Ionicons name='ios-add-circle-outline' size={55} color={Colors.main} /> */}
          <EvilIcons name='plus' size={70} color={Colors.main} />
        </View>
        
      </View>

      <Text></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  eventInfo: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    zIndex: 2,
    position: "relative",
    top: -15
  },
  nameMin: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    alignItems: "center",
    marginHorizontal: 15
  },
  away: {
    color: Colors.text
  },
  name: {
    color: Colors.text,
    fontSize: 20
  },
  rightMin: {
    flexDirection: "row"
  },
  likes: {
    color: "white"
  },
  rightIcons: {
    margin: 15,
    alignItems: "center",
    // backgroundColor: "white",
    opacity: 0.7,
    padding: 3,
    borderRadius: 16
  },
  eventTitle: {
    marginHorizontal: 15,
    marginVertical: 8
  },
  title: {
    fontSize: 21,
    fontWeight: "bold",
    color: Colors.text
  },
  chosenSong: {
    marginHorizontal: 15,
    flexDirection: "row"
  },
  attendees:{
    flexDirection:'row',
    justifyContent:'flex-end',
    marginHorizontal:5,
    alignItems:'center'
  }
});
