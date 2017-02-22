'use strict'
import React from 'react'
import { View, Text,Image,TouchableOpacity,Button } from 'react-native'


export default class ContactsView extends React.Component {
  render() {
    return <Text>List of Contacts</Text>
  }
}

ContactsView.navigationOptions = {
  header: ({ state, navigation}) => ({
    right:(<TopOptions page={'contact'}/>),
    style: {
      backgroundColor:'#085E55',
    },
    tintColor: '#fff'
  }),
}
