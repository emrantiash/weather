import React, { Component } from 'react';
import {
  Platform,
  PermissionsAndroid,
  Text,
  View,
  FlatList
} from 'react-native';
import {  
  AdMobInterstitial
} from 'react-native-admob'
import LinearGradient from 'react-native-linear-gradient';
import Geolocation from 'react-native-geolocation-service';
import {connect} from 'react-redux' ;
import styles from './Location.style';
import LocationBox from '../../components/location/Location'
import {setValue} from '../../redux/action/location';
import Header  from  '../../components/header/Header' ;


class Location extends Component {
    constructor(props){
        super(props)
        this.state=({
            forecast: [],
            color : [ '#a0a09e','#395a94','#a0a09e'] ,
            loading : true
        })
    }

    componentDidMount () {
      AdMobInterstitial.setAdUnitID('ca-app-pub-3573352011816698/4837118853');
     // AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
      AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
        this.getForcastData()      
    }

    getForcastData =  () =>{      
      let url = 'https://api.openweathermap.org/data/2.5/forecast?lat=' + this.props.latitude + '&lon=' + this.props.longitude + '&appid=2f1e23b452d65810864060adc8f93509';
        fetch(url)
        .then(response => response.json())
        .then(data => { 
          console.log(data)        
            this.setState({
              forecast  : data,
              loading : false 
            })
        })

    }


        render(){
          
            return(
              
              <View style={{flex:1}}>
              <Header name="Four Days Weather Forecast"/>
              <LinearGradient colors={this.state.color} style={styles.container}>
              
              
              {
                !this.state.loading ?
                <FlatList data={this.state.forecast.list} style={{marginTop:0}} 
                keyExtractor={item => item.dt_txt} 
                renderItem={({item}) => <LocationBox 
                 location={this.state.forecast.city.name} 
                 detail={item}
                 />} 
                 /> : <View><Text style={styles.loading}>wait data loading ....</Text></View>
              }
              
              </LinearGradient>
              </View>
            )
        }
}

function mapStateToProps(state){
  return({

      latitude : state.homeReducer.latitude,
      longitude : state.homeReducer.longitude
      

  })
}

function mapDispatchToProps(dispatch){

  return({

    setValue : (val) =>{
      dispatch(setValue(val))
    }
      
  })
}


export default connect(mapStateToProps,mapDispatchToProps)(Location)