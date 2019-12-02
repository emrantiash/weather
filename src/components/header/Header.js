import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
//import  './Home.style' ;
import styles from './Home.style';


class Header extends Component {
    constructor(props){
        super(props)
        this.state=({
            color : ['#230A57','#230A57'] 
        })
    }

        render(){
            return(
                <LinearGradient colors={this.state.color} style={styles.container}>
                    <Text style={styles.text}>{this.props.name}</Text>
                </LinearGradient>
            )
        }
}

export default Header ;