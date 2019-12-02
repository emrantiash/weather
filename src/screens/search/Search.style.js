import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);

const family = "Iowan Old Style" ;
const lettergap = 2.0;

const styles = StyleSheet.create({
    container : {
		 flex : 1,
    },
    containerLower : {
        flexGrow : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    barContainer : {
        flexDirection : 'column',
        justifyContent : 'center'
    },
    searchBar : {
        fontSize : 12 ,
        fontFamily : family ,
      letterSpacing : lettergap 
    },
    imgBackground : {
      flex : 1 ,
    },
    button : {
        //flexGrow: 1,
        width : width * 0.25  ,
        height :width * 0.25,
        justifyContent : 'center',
        alignItems : 'center' ,
        backgroundColor : '#fffbd5' ,
        //alignSelf : 'center',
        borderRadius : width /2 
    },
    topImage : {
       // flexGrow : 1,
        width : width * 0.5  ,
        height :width * 0.5,
        borderRadius : width/2 ,
        justifyContent : 'center',
        alignItems : 'center',
        
    },
    text : {
        letterSpacing : 3.5,
        color : '#ff5e62',
        fontWeight  : 'bold',
        fontSize : width * 0.028
    }
})

export default styles ;