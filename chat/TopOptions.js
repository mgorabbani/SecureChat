'use strict'
import React from 'react'
import { View, Text,Image,TouchableOpacity,Button } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

 const TopOptions = ({ navigation }) => (
  <View style={{flexDirection:'row',justifyContent:'space-between',width:100}}>
    <TouchableOpacity style={{width:20,alignItems:'center'}}   onPress={() => navigation.navigate('Profile', { name: 'Jane' })}>
      <Icon name="search" color="#fff" size={16}/>
    </TouchableOpacity>
      <TouchableOpacity style={{width:20,alignItems:'center'}}>
      <Icon name="user" color="#fff" size={16}/>
    </TouchableOpacity>
      <TouchableOpacity style={{width:20,alignItems:'center'}} onPress={() => this.props.navigation.navigate('DrawerOpen')}>
      <Icon name="ellipsis-v" color="#fff" size={16}/>
    </TouchableOpacity>

  </View>
)
export default TopOptions;
