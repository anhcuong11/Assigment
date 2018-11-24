/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Splash from './Screens/SplashScreen';
import Main from './Screens/MainScreen';
import Detail from './Screens/Detail';
import Tintuc1 from "./Tabs/TinTucsomot"
import Tintucso2 from './Tabs/Tintucsohai'
import Tintuc3 from './Tabs/Tintuc3'

 
const Application = StackNavigator({
    Home:{
      screen:Splash,
    },
    main:{
      screen:Main,
    }, 
    Details: {
      screen: Detail,

    },
    'Tin nổi':{
        screen: Tintuc1,
    },
    'Xã Hội': {
      screen: Tintucso2,
    }, 
    'Văn Hóa': {
      screen: Tintuc3,
    }

 
 
})
export default class App extends Component {
  constructor(props){
    super(props)
   
  }
  render() {
    return (
      <Application   />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
