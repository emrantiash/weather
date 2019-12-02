import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Dimensions.get('window').width 
const loadingwidth =  Dimensions.get('window').width * 0.03 ;

const styles = StyleSheet.create({
    container : {
         flex : 1 ,
         
          justifyContent : 'center',
          alignItems : 'center'
    },
    loading :{
      fontSize:loadingwidth,
        letterSpacing : 2.5,
        color : '#ffffff',
        justifyContent : 'center',
        alignItems : 'center',
        alignSelf : 'center'
    },
    imgBackground :{
      flex : 1 ,
      justifyContent : 'center',
      alignItems : 'center',
      width : width 
    },
    banner : {
      position: 'absolute',
      bottom:0
    }
    // ca-app-pub-3573352011816698/4837118853
})

export default styles ;