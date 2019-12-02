import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width * 0.03

const styles = StyleSheet.create({
    container : {
         flex : 1 ,
        // justifyContent : 'center',
        // alignItems : 'center'
    },
    loading :{
        fontSize:width,
        letterSpacing : 2.5,
        color : '#ffffff',
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center'
      }
})

export default styles ;

