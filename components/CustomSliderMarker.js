import React from 'react';
import { View } from 'react-native';
import Entypo from "react-native-vector-icons/Entypo";
import  Colors  from '../constants/styles';

export default function CustomSliderMarker() {
  return (
    <Entypo name='dot-single' size={55} color={Colors.main}/>
  );
}
