'use strict'
import React from 'react'
import { View, Text,Image,TouchableOpacity,Button,Picker } from 'react-native'
import TopOptions from './TopOptions'

export default class CallView extends React.Component {

  render() {
    return (
      <View>
        <Button
  onPress={() => this.props.navigation.navigate('Chat', { user: 'Lucy' })}
  title="Chat with Lucy"
/>
      </View>
    )
  }
}

CallView.navigationOptions = {
  header: ({ state, navigation}) => ({
    title:'WhatsApp',
    right:(<TopOptions page={'call'}/>),
    style: {
      backgroundColor:'#085E55',
    },
    tintColor: '#fff'
  }),
}
