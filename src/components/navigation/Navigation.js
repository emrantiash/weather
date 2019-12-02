import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import {Text,StyleSheet,Dimensions} from 'react-native'

import Home from '../../screens/home/Home' ;
import Search from '../../screens/search/Search'
import Location from '../../screens/location/Location';
const width = Dimensions.get('window').width ;

const TabIcon = ({ selected, title }) => {
    return (
      <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
  }
const Routes = () => {
    return (
      <Router navigationBarStyle={styles.navBar} titleStyle={styles.navTitle} sceneStyle={styles.routerScene}>
        <Scene key="root">
         
        <Scene
          key="tabbar"
          tabs={true}
          tabBarStyle={{ backgroundColor: '#373B44' ,justifyContent : 'center',alignSelf:'center',alignItems : 'center' }}
         // tabStyle = {{fontSize : 18}}
          hideNavBar = "false"
          activeBackgroundColor = "#395a94"
          labelStyle ={{fontSize : width * 0.035,color: 'gray',fontFamily:'Iowan Old Style',bottom : 3,letterSpacing : 2.5}}
  >
          <Scene key="Home"  icon={TabIcon}>
            <Scene 
              key="scarlet"
              component={Home}
              hideNavBar = "false"
              initial 
              
            />            
          </Scene>
          <Scene key="Forecast"  icon={TabIcon}>
            <Scene
              key="gold"
              component={Location}
              hideNavBar = "false"
              
            />
            </Scene>

            <Scene key="Search"  icon={TabIcon}>
            <Scene
              key="gold"
              component={Search}
              hideNavBar = "false"
              //hideTabBar = "false"
            />
            </Scene>
            
         
        </Scene>

        </Scene>
      </Router>
    );
  }
  
  export default Routes;

  const styles = StyleSheet.create({
    navBar: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'red', // changing navbar color
    },
    navTitle: {
      color: 'white', // changing navbar title color
    },
    routerScene: {
      //paddingTop: Navigator.NavigationBar.Styles.General.NavBarHeight, // some navbar padding to avoid content overlap
    },
  })