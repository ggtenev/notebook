import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Keyboard
} from "react-native";
import CodeInput from "react-native-confirmation-code-input";
import Colors from "../../constants/styles";

export default function VerificationCode({ navigation }) {
  const _onFinishCheckingCode2 = (isValid, code) => {
    Keyboard.dismiss();
    navigation.navigate("Available");
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          marginVertical: 40,
          flex: 1,
          width: "100%",
          alignItems: "center"
        }}
      >
        <Text style={styles.text}>Enter the verification code below</Text>
        <View style={{ height: 100 }}>
          <CodeInput
            activeColor='grey'
            inactiveColor='grey'
            // ref="codeInputRef2"
            keyboardType='numeric'
            codeLength={5}
            // className='border-circle'
            compareWithCode='12345'
            autoFocus={false}
            codeInputStyle={{ fontWeight: "800" }}
            onFulfill={(isValid, code) => {
              Keyboard.dismiss();
              _onFinishCheckingCode2(isValid, code);
            }}
          />
        </View>

        <View style={{ ...styles.btn }}>
          <Button
            title='Continue'
            onPress={() => _onFinishCheckingCode2}
            color={Colors.main}
          />
        </View>
        <TouchableOpacity style={styles.didCode} onPress={() => navigation.goBack()}>
          <Text style={{ color: Colors.main,marginTop:3 }}>Didn't get the code?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent:'center',
    alignItems: "center"
  },
  text: {
    textAlign: "center",
    marginVertical: 40,
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.text
  },
  btn: {
    width: "70%",
    overflow: "hidden",
    borderRadius: 14
  },
  didCode: {
    marginVertical: 7
  }
});
