import React, { Component } from 'react'
import { Text, View,FlatList,Image,TouchableOpacity,ScrollView,TextInput,Alert} from 'react-native'
import { withNavigation } from 'react-navigation';
import firebaseConf from '../lib/firebaseConfig';



export default class Detail extends Component {
      static navigationOptions = {
        header: null
      }
  constructor(props){
    super(props)
      this.getListNews = this.getListNews.bind(this);
      this.postComment = this.postComment.bind(this);
      this.getListComment = this.getListComment.bind(this);
      this.removeCommentById = this.removeCommentById.bind(this);
      this.state={
          post_content:'',
          post_id:'',
          comment:'',
          arrayComment:[]
      }
  }


  componentDidMount() {
    this.getListNews(this.props.navigation.getParam('itemInfo', 'no-id'));
    this.getListComment();
    this.postComment();
    this.removeCommentById();
  }
   getListNews(itemDetail) {
     var that = this;
     firebaseConf.database().ref('posts/' + itemDetail.id).on('value', function (snapshot) {
        that.setState({post_content: snapshot.val().post_content});
     });
   }

   removeCommentById(cateId) {
     firebaseConf.database().ref('comments/' + cateId).remove();
   }
   postComment() {
     
     var data = {
       comment: this.state.comment
     }
     // lay key moi
     var newCommentKey = firebaseConf.database().ref().child('comments').push().key;
     var comment = {};
     comment['/comments/' + newCommentKey] = data;
     if (firebaseConf.database().ref().update(comment)) {
        
     } else {
       alert('Tạo mới không thành công')
     }
   }

   getListComment(){
    var that = this;
    firebaseConf.database().ref('comments/').on('value', function (snapshot) {
        let commentTmp = [];
        snapshot.forEach((child) => {

          let item = {
            key: child.key,
            comment: child.val().comment
          }
          commentTmp.push(item);
        });

        that.setState({arrayComment: commentTmp});
    });
  }
 

  render() {
    const {
      navigation
    } = this.props;
    const itemDetail = navigation.getParam('itemInfo', 'no-id'); {
      
    }
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <Image style={{width:'100%',height:200}} source={{uri:itemDetail.image}}/>
        
                  <View style={{flexDirection:'column',marginLeft:10,marginRight:10,borderBottomWidth: 1,
                  borderBottomColor: '#DDDDDD',justifyContent:'center'}}>  
                  <Text style={{fontSize:18,fontWeight:"bold"}}  >{itemDetail.Title}</Text>
                  <Text style={{fontSize: 14, textAlign:'justify',letterSpacing: 0.5, lineHeight:15,marginTop:8, marginBottom:8 }}>{this.state.post_content}</Text>
                  <Image style={{width:'100%',height:200}} source={{uri:itemDetail.image}}/>
                  <Text style={{fontSize: 14, textAlign:'justify',letterSpacing: 0.5, lineHeight:15,marginTop:8, marginBottom:8 }}>{this.state.post_content}</Text>
           </View>
           
             <View style={{width: '100%', flexDirection:'row'}}>
               <TextInput
                style={{height: 40}}
                value={this.state.comment}
                placeholder="Type here to translate!"
                onChangeText={(value) => this.setState({comment: value})}
              />
              <TouchableOpacity onPress={()=>{this.postComment;this.setState({comment:''})}}>
                <Text>Comment</Text>
              </TouchableOpacity>
             </View>
          
            {
              this.state.arrayComment.map( item => 
                <View key={item.key} style={{flexDirection:'row'}}>
                  <Text> Anonymous </Text> 
                  <Text> {item.comment} </Text>
                  <TouchableOpacity onPress={() => {
                    this.removeCommentById(item.key)
                     
                  }}>
                    <Text>Xoá</Text>
                  </TouchableOpacity>
                </View>
              )
            }
        </ScrollView>
        
      </View>
    )
  }
}

