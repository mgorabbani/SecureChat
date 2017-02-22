'use strict'
import React from 'react'
import { View,
  Text,
  Button,
  ListView,Image,
  TouchableOpacity
} from 'react-native'

import TopOptions from './TopOptions'

import {StackNavigator} from 'react-navigation'
export default class ChatView extends React.Component {

  constructor(props){
    super(props)
     const ds = new ListView.DataSource({
       rowHasChanged: (r1,r2) => r1 !=r2
     })

     const navigation =  props.navigation;
     this.state = {
       dataSource: ds.cloneWithRows([
         {
           name:'Rabbani',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/12715783_1528794054081781_3909963567593896903_n.jpg?oh=87127330a2339bc6d8160a50983961ac&oe=592D1588',
           lastMsg:'Oh Okay! Thats Cool',
           time:'YESTERDAY'
         },
         {
           name:'Rabbani',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/12715783_1528794054081781_3909963567593896903_n.jpg?oh=87127330a2339bc6d8160a50983961ac&oe=592D1588',
           lastMsg:'Oh Okay! Thats Cool',
           time:'YESTERDAY'
         },
         {
           name:'Rabbani',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/12715783_1528794054081781_3909963567593896903_n.jpg?oh=87127330a2339bc6d8160a50983961ac&oe=592D1588',
           lastMsg:'Oh Okay! Thats Cool',
           time:'YESTERDAY'
         },
         {
           name:'Rabbani',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/12715783_1528794054081781_3909963567593896903_n.jpg?oh=87127330a2339bc6d8160a50983961ac&oe=592D1588',
           lastMsg:'Oh Okay! Thats Cool',
           time:'YESTERDAY'
         },{
           name:'Rabbani',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/12715783_1528794054081781_3909963567593896903_n.jpg?oh=87127330a2339bc6d8160a50983961ac&oe=592D1588',
           lastMsg:'Oh Okay! Thats Cool',
           time:'YESTERDAY'
         },{
           name:'Rabbani',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/12715783_1528794054081781_3909963567593896903_n.jpg?oh=87127330a2339bc6d8160a50983961ac&oe=592D1588',
           lastMsg:'Oh Okay! Thats Cool',
           time:'YESTERDAY'
         },
         {
           name:'Jahid',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p200x200/15977665_595333687342239_1114973996585291434_n.jpg?oh=df79aa08031981052cbe95108dced0f6&oe=59321A2B',
           lastMsg:'Oh Omg! Thats Cool',
           time:'2/11/2017'
         },
         {
           name:'Rokib',
           img:'https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/p320x320/16681959_1485788874799650_718179434320387167_n.jpg?oh=714e29fd7d5a96693dfb2bda853588db&oe=593404D2',
           lastMsg:'Horrah!',
           time:'JUST NOW'
         }
       ])
     }
  }

  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:this.state.color,
      }}>

      <ListView
        enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={this.renderRow.bind(this)}

      />
      </View>
    )
  }

  renderRow(dr){
    return (

      <TouchableOpacity onPress={()=>this.props.navigation.navigate('Chat',{dr})}>
        <View style={{ alignItems:'center', padding:10, flexDirection:'row', borderBottomWidth:1, borderColor:'#f7f7f7' }}>
          <Image
            style={{height:60,width:60,borderRadius:30,marginRight:20}}
            source={{uri: dr.img}}
          />
          <View>
            <View style={{ flexDirection:'row', justifyContent:'space-between', width:280 }}>
              <Text style={{ marginLeft:15, fontWeight:'600' }}>{dr.name}</Text>
              <Text style={{ color:'#333', fontSize:10 }}>{dr.time}</Text>
            </View>
            <View style={{ flexDirection:'row', alignItems:'center' }}>
              <Text style={{ fontWeight:'400', color:'#333', marginLeft:15 }}>{dr.lastMsg}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}


ChatView.navigationOptions = {
  header: ({ state, navigation}) => ({
    right:(<TopOptions page={'chat'}/>),
    style: {
      backgroundColor:'#085E55',
    },
    tintColor: '#fff'
  }),
}
