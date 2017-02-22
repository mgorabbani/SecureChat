'use strict'
import React, {Component} from 'react'
import { View, Text,Image,TouchableOpacity,Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome';

class TopOptions extends Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      call: (<Icon name="envelope" color="#fff" size={16}/>),
      chat: (<Icon name="address-card" color="#fff" size={16}/>)
    }
  }



  render(){
    return (
      <View style={{flexDirection:'row',justifyContent:'space-between',width:100}}>

        <TouchableOpacity style={{width:20,alignItems:'center'}} >
          <Icon name="search" color="#fff" size={16}/>
        </TouchableOpacity>
          <TouchableOpacity style={{width:20,alignItems:'center'}}>
            {this.state.chat}
        </TouchableOpacity>
          <TouchableOpacity style={{width:20,alignItems:'center'}}>
          <Icon name="ellipsis-v" color="#fff" size={16}/>
        </TouchableOpacity>

      </View>
    )
  }
    }

export default TopOptions;
