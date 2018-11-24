import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'



export default class Splash extends Component {
    constructor(props){
        super(props)
     
    }
    
 
   
    static navigationOptions={
        header:null 
    }
    componentDidMount(){
        setTimeout(() => {             
            this.props.navigation.navigate('main');
        }, 4000);
    }
  render() {
    return (
      <View style={styles.container}>
           
        <Image style={{width:'100%',height:'100%'}}  source = {
            {
                 
                uri: 'https://cdn.apk-cloud.com/detail/screenshot/lgyO5RbPbQPtc-XCde16S6D_9vhRFAvet7w97NrPb6z38WIa-g2d-NRdrJaWCyBJdwD8=h900.png'
            }
        }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
       
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
