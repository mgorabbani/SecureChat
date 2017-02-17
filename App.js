import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    TextInput,Picker,
    TouchableHighlight
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {TabRouter} from 'react-navigation';
import  { TabBar} from './app/tabBar/navigationConfiguration'
export default class Index extends Component {


  render () {
    return (
      <View style={{
        flex:1,
        backgroundColor:'white',

        justifyContent:'center'
      }}>
      <View style={{height:50,backgroundColor:'#085E55',paddingTop:20,paddingLeft:20,paddingRight:20,justifyContent:'space-between',flexDirection:'row'}}>
        <Text style={{color:'#fff',fontWeight:'bold',fontSize:18}}>WhatsApp</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:100}}>
          <TouchableOpacity style={{width:20,alignItems:'center'}}>
            <Icon name="search" color="#fff" size={16}/>
          </TouchableOpacity>
            <TouchableOpacity style={{width:20,alignItems:'center'}}>
            <Icon name="user" color="#fff" size={16}/>
          </TouchableOpacity>
            <TouchableOpacity style={{width:20,alignItems:'center'}}>
            <Icon name="ellipsis-v" color="#fff" size={16}/>
          </TouchableOpacity>

        </View>

      </View>
          <TabBar/>
      </View>
    )
  }
}
