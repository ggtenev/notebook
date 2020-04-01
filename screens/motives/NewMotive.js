import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Picker, TextInput, TouchableOpacity, Dimensions,Alert } from "react-native";
import Modal from "react-native-modal";
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions'

import CardInfo from "../../components/CardInfo";


export default function Motive({navigation}) {
  const [isVisible, setIsVisible] = useState(true);
  const [img,setImage] = useState()
  // useEffect(() => {
  //   setIsVisible(true)
  // },[])

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA,Permissions.CAMERA_ROLL)
    if(result.status !== 'granted'){
      Alert.alert('Permissions Error','No permissions to access the camera. Check your system settings')
      return false
    }
    return true
  }

  const takeImage = async () => {
    const result = await verifyPermissions()
    if(!result){
      return
    }
    const image = ImagePicker.launchCameraAsync({
      // allowsEditing:true,
      quality:0.5
    })
    setImage(image.uri)
  }

  const deviceWidth = Dimensions.get("window").width;


  const toggleModal = () => {
    setIsVisible(!isVisible);
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
       {/* <Button title='Show modal' onPress={} /> */}
      <Modal isVisible={isVisible}
      deviceWidth={deviceWidth}
      // style={styles.modalContainer}
      style={{justifyContent:'flex-end'}}
      animationIn='slideInUp'
      coverScreen
      animationInTiming={600}
      coverScreen={false}
      backdropColor='black'
      backdropOpacity={0.90}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity style={styles.modalItem} onPress={() => navigation.navigate('AddEvent')}>
            <Text style={styles.modalText}>Create Motive</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalItem} onPress={takeImage}>
            <Text style={styles.modalText}>Add Story</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.modalItem} onPress={toggleModal}>
            <Text style={styles.modalText}>Cancel</Text>
          </TouchableOpacity>
          
        </View>
      </Modal>
     </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor:'black',
    // opacity:0.7
  },
  modalContainer:{

    height:250,
    width:'100%',
    backgroundColor:'white',
    justifyContent:'flex-end',
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  modalItem:{
    borderBottomColor:'grey',
    borderBottomWidth:0.4,
    alignItems:'center',
    justifyContent:'center',
    flex:1
  },
  modalText:{
    fontWeight:'600',
    fontSize:20
  }
});
