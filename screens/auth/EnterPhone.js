import React, { Component, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Keyboard,
  Button,
  AsyncStorage,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  KeyboardAvoidingView,
  Picker,
  Alert
} from "react-native";
import Colors from "../../constants/styles";
import PhoneInput from "react-native-phone-input";

export default function EnterPhone({ navigation }) {
  const [code, setCode] = useState("+44");
  const [phone, setPhone] = useState("");
  const [validNumber, setValidNumber] = useState("");


  const signIn = async number => {
    if (phone.length < 5) {
      // Alert.alert("Invalid number", "Please enter your phone number");
      setValidNumber("Enter a valid phone number");
      return;
    }
    Keyboard.dismiss();
    setPhone('')

    await AsyncStorage.setItem("token", "ddd");
    navigation.navigate("VerificationCode");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={60}
      >
        <View>
          <Text style={styles.text}>
            Enter your phone number for verification
          </Text>
        </View>
        <View style={styles.phonePicker}>
          <Picker
            selectedValue={code}
            style={{ height: 30, width: 130, fontSize: 14 }}
            onValueChange={(itemValue, itemIndex) => setCode(itemValue)}
          >
            <Picker.Item label='GB +44' value='+44' />
            <Picker.Item label='AU +61' value='+61' />
            <Picker.Item label='US +1' value='+1' />
          </Picker>
          <TextInput
            fontSize={18}
            style={styles.phoneNumber}
            onChangeText={t => setPhone(t)}
            autoCorrect={false}
            autoFocus={false}
            keyboardType='phone-pad'
            value={phone}
            maxLength={12}

          />
        </View>
        <Text style={{color:'red',marginBottom:2}}>{validNumber}</Text>

        <View style={{ ...styles.btn, width: "70%" }}>
          <Button
            title='Continue'
            onPress={() => signIn(phone)}
            color={Colors.main}
          />
        </View>
        <Text style={styles.terms}>
          By signing in you agree with our{" "}
          <Text style={styles.underline}>Terms</Text> and{" "}
          <Text style={styles.underline}>Privacy Policy</Text>
        </Text>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  info: {
    // width: 200,
    borderRadius: 5,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 20
  },
  terms: {
    textAlign: "center",
    marginVertical: 20,
    color: Colors.text
  },
  underline: {
    textDecorationLine: "underline"
  },
  button: {
    marginTop: 20,
    padding: 10
  },
  phoneContainer: {
    alignItems: "center",
    padding: 20,
    paddingTop: 60
  },
  container: {
    // flex:1,
    padding: 20,
    alignItems: "center",
    paddingTop: 80
  },
  text: {
    textAlign: "center",
    marginVertical: 40,
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.text
  },
  btn: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 14
  },
  phoneNumber: {
    width: "60%",
    marginVertical: 14,
    borderBottomColor: Colors.text,
    borderBottomWidth: 0.2
  },
  phonePicker: {
    flexDirection: "row",
    alignItems: "center"
  }
});
