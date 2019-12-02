import React, { Component } from 'react';
import {
  Platform,
  PermissionsAndroid,
  Text,
  View,
  ImageBackground,
  ToastAndroid
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import styles from './Home.style';
import {connect} from 'react-redux' ;
import Header  from  '../../components/header/Header' ;
import HomeBox from '../../components/home/Home' ;
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from 'react-native-geolocation-service';

var Sound = require('react-native-sound');
 
// Enable playback in silence mode
Sound.setCategory('Playback');


import {setLocationValue,getCurrentWeatherData} from  '../../redux/action/home' ;
import { AdMobBanner} from 'react-native-admob'



class Home extends Component{
    constructor(props){
        super(props)
        this.state=({
            forecast: [],
            //color : ['#2193b0', '#6dd5ed'] ,
            net : true ,
            color : [ '#a0a09e','#395a94','#a0a09e'] ,
            latitude : 0,
            longitude : 0 ,
            time : 0,
            path : '',
            sunset : 0,
            fontColor : '#ffffff',
            music : '',
            connected : true 
        })
    }

    componentDidMount () {
    //  console.log(this.state.music+'.mp3')
     
    NetInfo.addEventListener(connect => {
      //console.log("net="+connect.isConnected);
      //alert("Is connected?", state.isConnected);
      this.setState({
        connected : connect.isConnected
      })
      if(!connect.isConnected){
        ToastAndroid.showWithGravityAndOffset(
          'no internet',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          25,
          100,
        );
      }
    }); 
    
        this.getPermission()    
    }

    static getDerivedStateFromProps(props,state){

      if(props.path==='Rain' || props.path==='Drizzle')  {
        const track = new Sound('Rain'+'.mp3', null, (e) => {
          if (e) {
            console.log('error loading track:', e)
          } else {
            track.play()
          }
        })
  
        track.setVolume(0.2);
        track.setNumberOfLoops(-1);
       
      }
      

        return {
            time : props.time,
            path : props.path,
            sunset : props.sunset,
            fontColor : props.fontColor,
          //  music : props.music
        }
    }

   setValue = () => {

    let options ={
        latitude : this.state.latitude ,
        longitude : this.state.longitude
    }
    this.props.setLocationValue(options)

    this.getCurrentData();
   }

   getCurrentData = () =>{
    let options ={
        latitude : this.state.latitude ,
        longitude : this.state.longitude
    }
    this.props.getCurrentWeatherData(options)
   }

    getPermission = async  () => {

        try {
            const granted =  await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
              {
                'title': 'Example App',
                'message': 'Example App access to your location '
              }
            )
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {

                    Geolocation.getCurrentPosition(
                (position) => {
                  //this.setState({ location: position, loading: false });
                  console.log(position.coords);
                  this.setState({
                    latitude : position.coords.latitude,
                    longitude : position.coords.longitude

                  }, () => { this.setValue(); })

                  
                },
                (error) => {
                  //this.setState({ location: error, loading: false });
                  console.log(error);
                },
               // { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, distanceFilter: 50, forceRequestLocation: true }
              );
              
            } else {
              console.log("location permission denied")
              
            }
          } catch (err) {
            console.warn(err)
          }
        
    }

    
    render(){
        //alert(this.state.connected)
        let time = this.state.time  ;
        var date = new Date(this.state.time*1000);
        
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = date.getFullYear();
        var month = months[date.getMonth()] ? months[date.getMonth()]  : 0 ;
        var cdate = date.getDate() ? date.getDate() : 0;

		    var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        
       // console.log(hours)

        time = hours + ':' + minutes.substr(-2);
     

      //  let sunsetStr = this.state.sunset ;
      //  sunsetStr = sunsetStr.split(":");
      //  sunsetStr = sunsetStr[0]
      //  console.log(sunsetStr ) // false : sunset not happend yet
      //  console.log(sunsetStr>hours)
        
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
                    
            <View style={{flex:1}} >
                <Header name="Weather Now" />
                <LinearGradient colors=  {this.state.color}  style={styles.container}
                >
                {  !this.props.isLoading && this.props.path ?
             
                <ImageBackground style={ styles.imgBackground } 
                 resizeMode='cover' 
                 source={pic}>
                 <HomeBox 
                location = {this.props.name}
                date = {month +' '+ cdate}
                time = {time}
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
                
                : (this.props.error) ? <Text style={styles.loading}>Something went wrong....</Text> 
                : (this.state.connected) ? <Text style={styles.loading}>Wait data loading....</Text> 
                : <Text style={styles.loading}>No Internet....</Text>
               
                }
                 </LinearGradient> 

            </View>
           
        )
    }
}

function mapStateToProps(state) {
	return {
       // courseData:state
       isLoading : state.homeReducer.isLoading ,
       name : state.homeReducer.name,
       time : state.homeReducer.time,
       icon : state.homeReducer.icon,
       temp : state.homeReducer.temp,
       description : state.homeReducer.description,
       color : state.homeReducer.color ,
       country : state.homeReducer.country,
       humidity : state.homeReducer.humidity,
       pressure : state.homeReducer.pressure,
       sunrise  : state.homeReducer.sunrise ,
       sunset : state.homeReducer.sunset,
       path : state.homeReducer.path,
       fontColor : state.homeReducer.fontColor,
       error : state.homeReducer.error 
    //   music : state.homeReducer.music
    //    wind : state.homeReducer.wind,
    //    speed : state.homeReducer.speed
	};
}
function mapDispatchToProps(dispatch) {
	return {
		setLocationValue : (val) =>{
            dispatch(setLocationValue(val))
          },

          getCurrentWeatherData : (data)=>{
              dispatch(getCurrentWeatherData(data))
          }
            
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);