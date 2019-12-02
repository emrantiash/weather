import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Math.round(Dimensions.get('window').width);
const lettergap = 2.0;
const size = width * 0.033;

const styles = StyleSheet.create({
    container : {
        backgroundColor:'rgba(56, 172, 236, 0.1)',
		borderWidth:0,
		//borderRadius:20
	},
	time:{
		fontSize:size,
		color:'#ffffff',
		letterSpacing : lettergap
	},
	notes: {
		fontSize: size,
		color:'#ffffff',
		textTransform:'capitalize',
		fontFamily : 'Iowan Old Style',
		letterSpacing : lettergap
	}
})

export default styles ;