import React, { Component } from 'react'
import { Text, View,FlatList,Image,TouchableOpacity,Alert} from 'react-native'
import { withNavigation } from 'react-navigation';
import firebaseConf from '../lib/firebaseConfig';
import Detail from '../Screens/Detail'


export default class Tintuc1 extends Component {
      static navigationOptions = {
        header: null
      }
  constructor(props){
    super(props)
      this.getListNews = this.getListNews.bind(this);
    
  this.state={
      news: []
  }
  }

  componentDidMount() {
    this.getListNews();

  }
   getListNews() {
     var that = this;
     firebaseConf.database().ref('categories/news/post/').on('value', function (snapshot) {
       let Shownews = [];
       snapshot.forEach((child) => {

         let item = {
           key: child.key,
           id: child.val().post_id,
           Title: child.val().post_title,
           content: child.val().post_subContent,
           image: child.val().post_image,
           post_time: child.val().post_time
         
         }
         Shownews.push(item);
        
       });

       that.setState({
         news: Shownews
       });
  
     });
   }


 

  render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data = {this.state.news}    
             renderItem={
              ({item}) => item.key==1? <View style = {{flexDirection: 'column',paddingBottom: 10}}>
                <Image style={{width:'100%',height:200}} source={{uri:item.image}}/>
                  <View style={{flexDirection:'column',marginLeft:10,marginRight:10,borderBottomWidth: 1,
                  borderBottomColor: '#DDDDDD',}}>  
                   <TouchableOpacity 
                      onPress={() => { this.props.screenProps.conten(item)}}>
                  <Text style={{fontSize:18,fontWeight:"bold"}}  >{item.Title}</Text>
               </TouchableOpacity>
                 <Text style={{fontSize:14}}> {item.content} </Text>
                 <Text style={{fontSize:12,fontStyle:"italic"}}> {item.post_time} </Text>                 
                 </View>
              </View>   :  <View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingBottom:10,paddingTop:10,marginLeft:10,marginRight:10}} >
                <Image style={{width:80,height:80,flex:1,marginRight:5}} source={{uri:item.image}}/>
                  <View style={{flexDirection:'column',flex:3}}>  
                    <TouchableOpacity
                      onPress={() => { this.props.screenProps.conten(item) }}>
                      <Text style={{ fontSize: 14, fontWeight: "bold" }}  >{item.Title}</Text>
                    </TouchableOpacity>
                 <Text style={{fontSize:10}}> {item.content} </Text>
                 <Text style={{fontSize:12,fontStyle:"italic"}}> {item.post_time} </Text>   
                 </View>
              </View> 
              }/>
      </View>
    )
  }
}

