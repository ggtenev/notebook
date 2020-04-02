import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Slider,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Button
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
// import Slider from '@react-native-community/slider'
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Foundation from "react-native-vector-icons/Foundation";
import Entypo from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/styles";
import CustomSliderMarker from "../../components/CustomSliderMarker";

const AddEvent = () => {
  const [motiveName, setMotivename] = useState("");
  const [place, setPlace] = useState("");
  const [time, setTime] = useState(null);
  const [distance, setDistance] = useState(0);
  const [age, setAge] = useState("");

  //PREMIUM ACCOUNT

  const [attendees, setAttendees] = useState(0);
  const [showMeTo, setShowMeTo] = useState("everyone");
  const [males, setMales] = useState(0);
  const [females, setFemales] = useState(0);

  //DATE TIME PICKER STATE AND METHODS
  //Library used - https://github.com/react-native-community/datetimepicker

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

  //SLIDER METHODS

  //MULTI SLIDER STATE AND METHODS
  // Library used - https://github.com/zigbang/react-native-multi-slider/blob/master/example/Example.js

  const width = Dimensions.get("window").width;

  //AGE SLIDER
  const [ageValues, setAgeValues] = useState([18, 55]);
  const ageValuesChange = values => setAgeValues(values);

  //ATTENDEES SLIDER
  const [atendeesNumber, setAttendeesNumber] = useState([1, 30]);
  const attendeesChange = values => setAttendeesNumber(values);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TextInput placeholder={`Create a motive `} style={styles.newMotive} />
        <FontAwesome name='pencil' size={30} color={Colors.text} />
      </View>
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
      </View>
      <View style={styles.sliderTitle}>
        <Text style={styles.title}>Maximum Distance</Text>
        <Text style={styles.title}>{distance}mi</Text>
      </View>
      <View style={{ marginLeft: -10, width: "110%" }}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={30}
          minimumTrackTintColor={Colors.main}
          maximumTrackTintColor='#000000'
          thumbTintColor={Colors.main}
          value={distance}
          onValueChange={(value) => setDistance(value)}
          step={1}
        />
      </View>

      {/* Range slider follows below*/}

      <View style={styles.sliderTitle}>
        <Text style={styles.title}>Age range</Text>
        <Text style={styles.title}>
          {ageValues[0]}-{ageValues[1]}
        </Text>
      </View>

      {/* Age slider follows below*/}

      <View style={{ width: "110%", marginLeft: 4 }}>
        <MultiSlider
          selectedStyle={{
            backgroundColor: Colors.main
          }}
          unselectedStyle={{
            backgroundColor: "silver"
          }}
          trackStyle={{
            height: 2.3
          }}
          values={[ageValues[0], ageValues[1]]}
          sliderLength={width / 1.188}
          onValuesChange={ageValuesChange}
          min={18}
          max={55}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          customMarker={CustomSliderMarker}
        />
      </View>
      <View style={styles.upgradeTitle}>
        <FontAwesome name='diamond' size={35} color='#fddb73' />
        <Text style={{ ...styles.title, marginLeft: 5, fontSize: 18 }}>
          UPGRADE FOR ACCESS
        </Text>
      </View>
      <View style={styles.sliderTitle}>
        <Text style={styles.title}>No. of attendees</Text>
        <Text style={styles.title}>
          {atendeesNumber[0]}-{atendeesNumber[1]}
        </Text>
      </View>
      <View style={{ width: "110%", marginLeft: 4 }}>
        <MultiSlider
          selectedStyle={{
            backgroundColor: Colors.main
          }}
          unselectedStyle={{
            backgroundColor: "silver"
          }}
          trackStyle={{
            height: 2.3
          }}
          values={[atendeesNumber[0], atendeesNumber[1]]}
          sliderLength={width / 1.188}
          onValuesChange={attendeesChange}
          min={1}
          max={30}
          step={1}
          allowOverlap={false}
          snapped
          minMarkerOverlapDistance={40}
          customMarker={CustomSliderMarker}
        />
      </View>
      <Text style={styles.title}>Show me to</Text>
      <View style={styles.showMeTo}>
        <TouchableOpacity onPress={() => setShowMeTo("everyone")}>
          <Text
            style={{
              ...styles.showMeToTitle,
              color: showMeTo == "everyone" ? Colors.main : Colors.text
            }}
          >
            Everyone
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMeTo("male")}>
          <Text
            style={{
              ...styles.showMeToTitle,
              color: showMeTo == "male" ? Colors.main : Colors.text
            }}
          >
            Male
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMeTo("female")}>
          <Text
            style={{
              ...styles.showMeToTitle,
              color: showMeTo == "female" ? Colors.main : Colors.text
            }}
          >
            Female
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMeTo("LGBT")}>
          <Text
            style={{
              ...styles.showMeToTitle,
              color: showMeTo == "LGBT" ? Colors.main : Colors.text
            }}
          >
            LGBT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setShowMeTo("couples")}>
          <Text
            style={{
              ...styles.showMeToTitle,
              color: showMeTo == "couples" ? Colors.main : Colors.text
            }}
          >
            Couples
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Group ratio</Text>
      <View style={styles.ratios}>
        <View style={styles.upgradeTitle}>
        <Foundation name='female-symbol' size={30} color={Colors.text} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Text style={styles.number}>1</Text>
            <Text style={styles.number}>2</Text>
            <Text style={styles.number}>3</Text>
            <Text style={styles.number}>4</Text>
            <Text style={styles.number}>5</Text>
            <Text style={styles.number}>6</Text>
            <Text style={styles.number}>7</Text>
            <Text style={styles.number}>8</Text>
            <Text style={styles.number}>9</Text>
            <Text style={styles.number}>10</Text>
            <Text style={styles.number}>11</Text>
            <Text style={styles.number}>12</Text>
            <Text style={styles.number}>13</Text>
            <Text style={styles.number}>14</Text>
            <Text style={styles.number}>15</Text>
          </ScrollView>
        </View>
        <View style={styles.upgradeTitle}>
        <Foundation name='male-symbol' size={30} color={Colors.text} />
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <Text style={styles.number}>1</Text>
            <Text style={styles.number}>2</Text>
            <Text style={styles.number}>3</Text>
            <Text style={styles.number}>4</Text>
            <Text style={styles.number}>5</Text>
            <Text style={styles.number}>6</Text>
            <Text style={styles.number}>7</Text>
            <Text style={styles.number}>8</Text>
            <Text style={styles.number}>9</Text>
            <Text style={styles.number}>10</Text>
            <Text style={styles.number}>11</Text>
            <Text style={styles.number}>12</Text>
            <Text style={styles.number}>13</Text>
            <Text style={styles.number}>14</Text>
            <Text style={styles.number}>15</Text>
          </ScrollView>
        </View>
      </View>
      <View style={styles.shareButton}>
        <Button title='Share' color={Colors.main}/>
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
    marginVertical: 5,
    borderBottomWidth: 0.3,
    borderBottomColor: "grey",
    width: "90%"
  },
  locationView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5
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
  sliderTitle: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  upgradeTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,

  },
  showMeTo: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 12
  },
  showMeToTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: Colors.text
  },
  number: {
    marginHorizontal: 15,
    color:Colors.text,
    fontSize:17
  },
  shareButton:{
    width:'100%',
    borderRadius:22,
    overflow:'hidden',
  
  }
});

export default AddEvent;
