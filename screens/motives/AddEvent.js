import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Slider,
  TextInput,
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
// import Slider from '@react-native-community/slider'
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/styles";

const AddEvent = () => {
  const [motiveName, setMotivename] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState(null);
  const [distance, setDistance] = useState("");
  const [age, setAge] = useState("");

  //PREMIUM ACCOUNT

  const [attendees, setAttendees] = useState(0);
  const [showMe, setShowMe] = useState(0);
  const [males, setMales] = useState(0);
  const [females, setFemales] = useState(0);

  //DATE TIME PICKER STATE

  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='Create a motive' style={styles.newMotive} />
      <View style={styles.locationView}>
        <Text style={styles.title}>Location</Text>
        <TextInput
          placeholder='Type in the the name place'
          style={styles.locationInput}
        />
      </View>
      <View style={styles.locationView}>
        <Text style={styles.title}>Time</Text>
        <TouchableOpacity onPress={showTimepicker} style={styles.locationView}>
          <Ionicons name='md-time' size={26} color={Colors.text} />
        </TouchableOpacity>
        {show && (
          <DateTimePicker
            testID='dateTimePicker'
            timeZoneOffsetInMinutes={0}
            value={date}
            mode={mode}
            is24Hour={true}
            display='clock'
            onChange={onChange}
          />
        )}
        {console.log(date)}
      </View>
      <View style={styles.sliderTitle}>
        <Text style={styles.title}>Maximum Distance</Text>
        <Text>98mi</Text>
      </View>
      <View style={{ marginLeft: -10,width:'110%' }}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={30}
          minimumTrackTintColor={Colors.main}
          maximumTrackTintColor='#000000'
          thumbTintColor={Colors.main}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 25
  },
  newMotive: {
    padding: 5,
    fontSize: 20,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10
    // justifyContent:'space-between'
  },
  locationInput: {
    fontSize: 16
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: Colors.text,
    marginRight: 10
  },
  sliderTitle:{
    flexDirection:'row',
    justifyContent:'space-between'
  }
});

export default AddEvent;
