import React, { Component } from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Text,
  Image,
  Keyboard
} from 'react-native';
import { SearchBar,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux' ;
import styles from './Search.style';
import HomeBox from '../../components/home/Home' ;
import LinearGradient from 'react-native-linear-gradient';

import Header from '../../components/header/Header';
import {getSearcWeatherData,getMuteAll} from '../../redux/action/search';
import { AdMobBanner} from 'react-native-admob'

class Search extends Component{

    constructor(props){
        super(props)
        this.state={
            search : '',
            color : [ '#a0a09e','#1a2a6c','#b21f1f','#ffffff','#fdbb2d','#fff999','#000f55'] ,
            time : 0,
            path : '',
            sunset : 0,
            fontColor : '#ffffff'
        }
    }

    static getDerivedStateFromProps(props,state){
        return {
            time : props.time,path : props.path,sunset : props.sunset,
            fontColor : props.fontColor
        }
    }

    updateSearch = (val) =>{
        this.setState({
            search : val
        })        
    }

    _touched = () =>{
        this.props.getMuteAll()
        
    }

    _onPressButton = ()=>{
        let val = this.state.search ;
        Keyboard.dismiss()
        this.props.getSearcWeatherData(val)
    }
    render(){
        let time = this.state.time ? this.state.time : 0  ;
        var date = new Date(this.props.time*1000);
        
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = date.getFullYear();
        var month = months[date.getMonth()] ? months[date.getMonth()]  : 0 ;
        var cdate = date.getDate() ? date.getDate() : 0;

		var hours = date.getHours();
        var minutes = "0" + date.getMinutes();

        time = hours + ':' + minutes.substr(-2);
     
       let pic ;
       if(this.state.path === 'Haze' && (this.state.sunset > time )) pic = require('../../assets/'+ 'haze' +'.gif')
       else if(this.state.path === 'Haze' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'haze_ni8' +'.gif')
       
       else if(this.state.path === 'Clear' && (this.state.sunset > time )) pic = require('../../assets/'+ 'clear' +'.gif')
       else if(this.state.path === 'Clear' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'clear_ni8' +'.gif')

       else if(this.state.path === 'Clouds' && (this.state.sunset > time )) pic = require('../../assets/'+ 'cloudy' +'.gif')
       else if(this.state.path === 'Clouds' && (this.props.sunset <= time )) pic = require('../../assets/'+ 'cloudy_ni8' +'.gif')

       else if(this.state.path === 'Rain' && (this.state.sunset > time )) pic = require('../../assets/'+ 'rain' +'.gif')
       else if(this.state.path === 'Rain' && (this.props.sunset <= time )) pic = require('../../assets/'+ 'rain_ni8' +'.gif')

       else if(this.state.path === 'Drizzle' && (this.state.sunset > time )) pic = require('../../assets/'+ 'drizzle' +'.gif')
       else if(this.state.path === 'Drizzle' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'drizzle_ni8' +'.gif')

       else if(this.state.path === 'Smoke' && (this.state.sunset > time )) pic = require('../../assets/'+ 'smoke' +'.jpg')
       else if(this.state.path === 'Smoke' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'smoke_ni8' +'.jpg')
       
       else if(this.state.path === 'Mist' && (this.state.sunset > time )) pic = require('../../assets/'+ 'mist' +'.jpg')
       else if(this.state.path === 'Mist' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'mist_ni8' +'.gif')

       else if(this.state.path === 'Snow' && (this.state.sunset > time )) pic = require('../../assets/'+ 'snow' +'.gif')
       else if(this.state.path === 'Snow' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'snow_ni8' +'.gif')

       else if(this.state.path === 'Fog' && (this.state.sunset > time )) pic = require('../../assets/'+ 'fog' +'.jpg')
       else if(this.state.path === 'Fog' && (this.state.sunset <= time )) pic = require('../../assets/'+ 'fog_ni8' +'.jpg')
       else
       {
           if(this.state.sunset > time)
           pic = require('../../assets/nice.gif');
           else
           pic = require('../../assets/night.gif');
       }

        return(
            <View style={styles.container}>
                
                <Header name="Search City" />
                <View style={styles.barContainer}>
                <SearchBar
                placeholder= { this.state.search==='' ? "like : Toronto,CA" : this.state.search}
                inputStyle = {styles.searchBar}
                onChangeText={(val)=>this.updateSearch(val)}
                 value={this.state.search}
                 onTouchStart = {this._touched}
                />
                {/* <TouchableOpacity 
                onPress={this._onPressButton}
                style ={styles.button}
                >
                <Text style={styles.text}>SEARCH CITY</Text>
                </TouchableOpacity> */}
                </View>

                {  !this.props.isLoading && this.props.path ?
             
             <ImageBackground style={ styles.imgBackground } 
              resizeMode='cover' 
              source={pic}>
              <HomeBox 
             location = {this.props.name}
            //  date = {month +' '+ cdate}
            //  time = {time}
             source = {{uri:"https://openweathermap.org/img/w/" + this.props.icon + ".png"}}
             temp = {this.props.temp}
             description = {this.props.description}
             country = {this.props.country}
             humidity = {this.props.humidity}
             pressure = {this.props.pressure}
             sunrise = {this.props.sunrise}
             sunset = {this.props.sunset}
             color = {this.state.fontColor}
             />          
             </ImageBackground>
             
             : 
            <LinearGradient colors=  {this.state.color}  
            style={styles.containerLower}
            
            >

            <TouchableOpacity style={styles.button}
            onPress={this._onPressButton}
            >
            <ImageBackground 
            source={require('../../assets/rain.gif')}
            //imageStyle ={{borderRadius : 100}}
            style={styles.topImage}
           // resizeMode ="cover"
            >
                    <Text style={styles.text}>CLiCkME </Text>
            </ImageBackground>

            </TouchableOpacity>

            </LinearGradient>
              }
               
            <AdMobBanner
                adSize="fullBanner"
                adUnitID="ca-app-pub-3573352011816698/1664160603"

                />  
            </View>
        )
    }
}

function mapStateToProps(state, ownProps) {
	return {
        isLoading : state.searchReducer.isLoading ,
        name : state.searchReducer.name,
        time : state.searchReducer.time,
        icon : state.searchReducer.icon,
        temp : state.searchReducer.temp,
        description : state.searchReducer.description,
        color : state.searchReducer.color ,
        country : state.searchReducer.country,
        humidity : state.searchReducer.humidity,
        pressure : state.searchReducer.pressure,
        sunrise  : state.searchReducer.sunrise ,
        sunset : state.searchReducer.sunset,
        path : state.searchReducer.path,
        fontColor : state.searchReducer.fontColor 
	};
}
function mapDispatchToProps(dispatch) {
	return {
		getSearcWeatherData : (val )=>{
            dispatch(getSearcWeatherData(val))
        
        },
        getMuteAll : () =>{
            dispatch(getMuteAll())
        }
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Search);