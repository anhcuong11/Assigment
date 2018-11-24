import React, { Component } from 'react'
import { Text, View,FlatList,Image,TouchableOpacity,Alert} from 'react-native'
import { withNavigation } from 'react-navigation';
import firebaseConf from '../lib/firebaseConfig';



export default class Detail extends Component {
      static navigationOptions = {
        header: null
      }
  constructor(props){
    super(props)
      this.getListNews = this.getListNews.bind(this);
    
  this.state={
      news: [],
 
      
  }
  }

  componentDidMount() {
    this.getListNews();

  }
   getListNews() {
     var that = this;
     firebaseConf.database().ref('categories/news/post/'+key).on('value', function (snapshot) {
       let Shownews = [];
       snapshot.forEach((child) => {

         let item = {  
           key:child.key,  
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
              ({item}) => <View style = {{flexDirection: 'column',paddingBottom: 10}} key={item.key} >
                <Image style={{width:'100%',height:200}} source={{uri:item.image}}  key={item.key} />
                <Text>{item.key}</Text>
                  
              </View>  
         
              }/>
      </View>
    )
  }
}

