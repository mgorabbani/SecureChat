'use strict'
import React from 'react'
import { View,
  Text,
  Button,
  ListView,Image,
  TouchableOpacity
} from 'react-native'
export default class TabOneScreenOne extends React.Component {
  constructor(){
    super()


     const ds = new ListView.DataSource({
       rowHasChanged: (r1,r2) => r1 !=r2
     })

     this.state = {
       dataSource: ds.cloneWithRows([
         {
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
         }
       ])

     }
  }
  componentDidMount(){
    var titles= []


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
        renderRow={this.renderRow}
      />
      </View>
    )
  }
  renderRow(dr){

    return (
      <TouchableOpacity onPress={()=> alert("Coming Soon")}>
        <View style={{justifyContent:'space-between',flexDirection:'row',padding:15}}>
          <Image
            style={{height:60,width:60,borderRadius:30,marginRight:20}}
            source={{uri: dr.img}}
          />
        <View style={{justifyContent:'space-between',flexDirection:'row',flex:.8,borderBottomWidth:1,borderBottomColor:'#E7E7E8'}}>
          <View>
            <Text style={{fontSize:18,fontWeight:'bold',paddingBottom:5,color:'#000'}}>{dr.name}</Text>
            <Text>{dr.lastMsg}</Text>
          </View>
          <Text>
            {dr.time}
          </Text>
        </View>
      </View>
      </TouchableOpacity>
    )
  }
}
