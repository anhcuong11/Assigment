import React, { Component } from 'react'
import { Text, View,FlatList,Image } from 'react-native'

export default class Tintucso2 extends Component {
   render() {
    return (
      <View style={{flex:1}}>
        <FlatList
          data = {
            [{
              id:1,
              image: 'https://kenh14cdn.com/2018/8/7/photo-1-153364740076165688032.jpg',
              Title:'Dự án sân bay quốc tế...',
              content: '(PLO)- Chính phủ yêu cầu Bộ GTVT đẩy nhanh tiến độ các dự án như sân bay quốc tế Tân Sơn Nhất, sân bay Long Thành, đường bộ cao tốc và đường sắt cao tốc Bắc-Nam.'
            }, {
              id: 2,
              image: 'https://i-vnexpress.vnecdn.net/2018/11/11/01-7558-1541943637_140x84.jpg',
              Title: 'Thiền sư Thích Nhất Hạnh thiền hành cùng phật tử',
              content: 'Người mộ đạo đến chùa Từ Hiếu hôm nay đã có duyên tháp tùng thiền sư Thích Nhất Hạnh vãn cảnh chùa.'
            }, {
              id: 3,
              image: 'https://i-vnexpress.vnecdn.net/2018/11/11/Phapset-1541933058-9175-1541933631_140x84.jpg',
              Title: 'Quốc gia ít lãng phí thực phẩm nhất thế giới ...',
              content: 'Pháp cấm các siêu thị vứt thực phẩm còn sử dụng được và chỉ lãng phí khoảng 1,8% tổng lượng sản xuất mỗi năm.'
            }, {
              id: 4,
              image: 'https://i-thethao.vnecdn.net/2018/11/11/LVT-2534-1541933258_140x84.jpg',
              Title: 'HLV Park Hang-seo đuổi Công Phượng vì hành vi phi thể thao ',
              content: 'Ông thầy người Hàn Quốc hài hước truất quyền thi đấu của Công Phượng vì cố tình sút bóng vào người Duy Mạnh trong phần tập đối kháng chiều 11/11.'
            }, {
              id: 5,
              image: 'https://i-thethao.vnecdn.net/2018/11/11/Untitled-1541945105-1328-1541945173_140x84.jpg',
              Title: 'Salah lập công, Liverpool soán ngôi đầu của Man City',
              content: 'Thầy trò Jurgen Klopp tìm lại cảm giác chiến thắng khi đánh bại đội bét bảng Fulham 2-0 ở vòng 12 Ngoại hạng Anh.'
            }, {
              id: 6,
              image: 'https://i-vnexpress.vnecdn.net/2018/11/11/satlo5-1541932297-9211-1541932741_140x84.jpg',
              Title: '4 người suýt chết vì hàng xóm xây nhà gây sạt lở  ',
              content: 'Sáng 11/11, máy xúc đào móng công trình đã sạt lở đất gây sập căn nhà hai tầng ở Đà Lạt, khiến cả gia đình đang ngủ phải tháo chạy.'
            }, {
              id: 7,
              image: 'https://i-vnexpress.vnecdn.net/2018/11/11/baythu2-1541918599-3849-1541918622_140x84.jpg',
              Title: '300 bẫy thú rừng giăng dày đặc trên núi Hồng Lĩnh 29',
              content: 'Có khu vực cứ cách 10 m, kiểm lâm Hà Tĩnh thu được một chiếc bẫy thú trong rừng Hồng Lĩnh.'
            }, {
              id: 8,
              image: 'https://i-vnexpress.vnecdn.net/2018/11/11/1-1541940525-8392-1541940553_140x84.jpg',
              Title: 'Hàn Quốc điều vận tải cơ chở 200 tấn quýt đáp lễ  Triều Tiên 20',
              content: 'Hàn Quốc gửi lượng lớn đặc sản quýt trồng tại đảo Jeju để tặng Triều Tiên sau khi nhận được hai tấn nấm thông từ Bình Nhưỡng.Hàn Quốc gửi lượng lớn đặc sản quýt trồng tại đảo Jeju để tặng Triều Tiên sau khi nhận được hai tấn nấm thông từ Bình Nhưỡng.'
            }, ]
          }
        
          keyExtractor = {
            (item, index) => item.id
          }
            renderItem={
              ({
                item
              }) => item.id == 1 ? < View style = {
                {
                  flexDirection: 'column',
                
               
                 paddingBottom: 10
                }
              } >
                <Image style={{width:'100%',height:200}} source={{uri:item.image}}/>
                  <View style={{flexDirection:'column',marginLeft:10,marginRight:10,borderBottomWidth: 1,
                  borderBottomColor: '#DDDDDD',}}>  
                   <Text style={{fontSize:18,fontWeight:"bold"}}> {item.Title} </Text>
                 <Text style={{fontSize:14}}> {item.content} </Text>
                 </View>
              </View> :<View style={{flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#DDDDDD',paddingBottom:10,paddingTop:10,marginLeft:10,marginRight:10}} >
                <Image style={{width:80,height:80,flex:1,marginRight:5}} source={{uri:item.image}}/>
                  <View style={{flexDirection:'column',flex:3}}>  
                   <Text style={{fontSize:14,fontWeight:"bold"}}> {item.Title} </Text>
                 <Text style={{fontSize:10}}> {item.content} </Text>
                 </View>
              </View>
              
              
              }


        />
      </View>
    )
  }
}