import React, { Component } from 'react';
import {
  Platform,
  StatusBar ,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import Home from './src/screens/home/Home' ;
 import Location from './src/screens/location/Location' ;
import configureStore from './src/redux';
import Routes from './src/components/navigation/Navigation'
import { Provider } from 'react-redux';
const store = configureStore();


export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
      
      <StatusBar backgroundColor="#a8c0ff" barStyle="light-content" />
        
        <Routes />
      </View>
      </Provider>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  }
});
