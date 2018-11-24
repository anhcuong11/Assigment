import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import {TabNavigator,StackNavigator} from 'react-navigation'
import Tintuc1 from "../Tabs/TinTucsomot"
import Tintucso2 from '../Tabs/Tintucsohai'
import Tintuc3 from '../Tabs/Tintuc3'


export const Listcv =StackNavigator({
      'Tin nổi':{
                screen: Tintuc1,

              },           
                
});

const ApplicationTintuc = TabNavigator(
    {
    'Tin Nổi': {
        screen: Listcv,
      
        
    },
    'Xã Hội': {
        screen: Tintucso2,
    },
    'Văn Hóa': {
        screen: Tintuc3,
    }
},
{
    tabBarPosition:'top',
    animationEnabled:true,
     tabBarOptions:{
    activeTintColor: '#fff', 
    

    style: {
        backgroundColor: '#DC143C',
        color:'#fff',
        height:70,
        
       borderRightWidth:1,
      
      
    }, labelStyle: {
        fontSize: 18,
        lineHeight:40,
         
    }

},

})
export default class Main extends Component {
    
    static navigationOptions={
        header:null 
    }
  render() {
    return (
      <View  style={styles.container}>
      <ApplicationTintuc screenProps={{conten:({item})=>this.props.navigation.navigate('Details',{item:item})}}  />
      
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,     
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
