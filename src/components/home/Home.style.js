import React, { Component } from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

const width = Math.round(Dimensions.get('window').width);
const height = Math.round(Dimensions.get('window').height);
const lettergap = 2.0;
//const color = '#D0D0D0';
const color = '#DB7093'; 
const size = height  * 0.025;
const bigSize = width * 0.10; 
const gap = height * 0.008
const family = "Iowan Old Style" ;
const styles = StyleSheet.create({
    container : {
		 flex : 1,
         backgroundColor:'rgba(56, 172, 236, 0)',
		 borderColor : 'transparent',
		justifyContent : 'center',
		alignSelf : 'center'
	},
	box:{
		flexDirection:'column', 
		justifyContent:'center', 
		alignItems:'center',
		fontFamily : family ,
		marginVertical : gap	
	},
	box2:{
		flexDirection:'row', 
		justifyContent:'center', 
		alignItems:'center',
		marginVertical : gap	,
		fontFamily : family 
	},
	box3:{
		flexDirection:'column', 
		justifyContent:'center', 
		alignItems : 'center',
		marginVertical : gap	,
		fontFamily : family 
	},
	box4:{
	//	marginHorizontal : gap,
		marginVertical : gap,
		color : color,
		flexDirection:'row', 
		justifyContent:'center', 
		alignItems:'center',
		//fontFamily : family 
	
	},
	time:{
		fontSize:size,
		fontWeight : 'bold',
		color:color,
		fontFamily : family ,
		letterSpacing : lettergap
	},
	notes: {
		fontSize: size,
		fontWeight : 'bold',
		color:color,
		textTransform:'capitalize',
		fontFamily : family ,
		letterSpacing : lettergap
		
	},
	notescountry: {
		fontSize: size,
		fontWeight : 'bold',
		color:color,
		textTransform:'none',
		fontFamily : family ,
		letterSpacing : lettergap
		
	},
	unit :{
		fontSize: size,
		fontWeight : 'bold',
		color:color,
		textTransform : 'lowercase',
		fontFamily : family ,
		letterSpacing : lettergap
	},
	notesextend : {
		flex : 1,
		fontSize: 15,
		fontWeight : 'bold',
		color:color,
		textTransform:'capitalize',
		fontFamily : family ,
		//borderWidth : 1,
		padding : 5,
		letterSpacing : lettergap
		//borderColor : color
	},
	temp: {
		fontSize: bigSize,
		//color:'#3f2b96',
		color:color,
		textTransform:'capitalize',
		fontFamily : family ,
		fontWeight : 'bold',
		letterSpacing : lettergap
		
	},
	tempImage : {
		//flex: 1,
		width:width * 0.15, 
		height:width * 0.15,
		alignSelf : 'center'
	}
})

export default styles ;