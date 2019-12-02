import React, { Component } from 'react';
import {
  Platform,
  PermissionsAndroid,
  Text,
  View,
  Image,
  Dimensions
} from 'react-native';
import styles from './Home.style';
import {  Card, Divider } from 'react-native-elements';
const height = Math.round(Dimensions.get('window').height);

//const gap = height * 0.015


class HomeBox extends Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount(){
       // Orientation.lockToPortrait();
    }


        render(){
            return(
            <View style={styles.container} >
            <View style={[styles.box]}>
                <Text style={[styles.notes,{color:this.props.color}]}>
                {this.props.location},<Text style={[styles.notescountry,{color:this.props.color}]}>{this.props.country} </Text>
                </Text>
                {/* <Text style={styles.notes}>{this.props.date}</Text> */}
            </View> 
            <View style={[styles.box2]}>
            <Image style={[styles.tempImage]} resizeMode="contain"
                    source={this.props.source}
                  // source = {this.props.source}
             />
             <Text style={[styles.temp,{color:this.props.color}]}>{Math.round( this.props.temp -273.15) }&#8451;</Text>
                {/* <Text style={styles.notes}>{this.props.date}</Text> */}
            </View>
            <View style={styles.box3}>
            <Text style={[styles.notes,{color:this.props.color}]}>{this.props.description}</Text>
            {
                this.props.time && 
                <Text style={[styles.time,{color:this.props.color}]}>{this.props.time }   {this.props.date}</Text>
            }
            
                {/* <Text style={styles.notes}>{this.props.date}</Text> */}
            </View>
            {/* <View style={[styles.box4]}>
            <Text style={styles.notes}>Wind  : </Text>
            <Text style={styles.notes}>{this.props.wind}&#845;,{this.props.speed} <Text style={styles.unit}>m/s</Text></Text>
            </View> */}
            <View style={[styles.box4]}>
            <Text style={[styles.notes,{color:this.props.color}]}>humidity  : </Text>
            <Text style={[styles.notes,{color:this.props.color}]}>{this.props.humidity}%</Text>
            </View>
            <View style={[styles.box4]}>
            <Text style={[styles.notes,{color:this.props.color}]}>pressure  : </Text>
            <Text style={[styles.notes,{color:this.props.color}]}>{this.props.pressure} <Text style={[styles.unit,{color:this.props.color}]}> hpa </Text></Text>
            </View>

            <View style={[styles.box4]}>
            <Text style={[styles.notes,{color:this.props.color}]}>Sunrise  : </Text>
            <Text style={[styles.notes,{color:this.props.color}]}>{this.props.sunrise} <Text style={[styles.unit,{color:this.props.color}]}>am</Text></Text>
            </View>

            <View style={[styles.box4]}>
            <Text style={[styles.notes,{color:this.props.color}]}>Sunset  : </Text>
            <Text style={[styles.notes,{color:this.props.color}]}>{this.props.sunset} <Text style={[styles.unit,{color:this.props.color}]}>pm</Text></Text>
            </View>

                  {/* Display a banner */}
                  
			</View>
            )
        }
}

export default HomeBox