import React, { Component } from 'react';
import {
  Platform,
  PermissionsAndroid,
  Text,
  View,
  Image
} from 'react-native';
import styles from './Location.style';
import {  Card, Divider } from 'react-native-elements';



class LocationBox extends Component {
    constructor(props){
        super(props)
        this.state=({
           
        })
    }

        render(){
            let time;

		// Create a new date from the passed date time
        var date = new Date(this.props.detail.dt*1000);
        var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        var year = date.getFullYear();
        var month = months[date.getMonth()] ? months[date.getMonth()]  : 0 ;
        var cdate = date.getDate() ? date.getDate() : 0;
        // Hours part from the timestamp
		var hours = date.getHours();		
		// Minutes part from the timestamp
		var minutes = "0" + date.getMinutes();

		time = hours + ':' + minutes.substr(-2);
            return(
            <Card containerStyle={styles.container}>
				<Text style={styles.notes}>{this.props.location}</Text>
				
				 <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                    <Image style={{width:80, height:80,resizeMode:'stretch'}} 
                    source={{uri:"https://openweathermap.org/img/w/" + this.props.detail.weather[0].icon + ".png"}}
                  // source = {this.props.source}
                     />
					<Text style={styles.time}>{month+'/'+cdate+' '+time}</Text>
				</View>
				<Divider style={{ backgroundColor: 'green', marginVertical:10}} />
				
				<View style={{flexDirection:'row', justifyContent:'space-between'}}>
					<Text style={styles.notes}>{this.props.detail.weather[0].description}</Text>
					<Text style={styles.notes}>{Math.round( this.props.detail.main.temp -273.15) }&#8451;</Text>
				</View> 
			</Card>
            )
        }
}

export default LocationBox