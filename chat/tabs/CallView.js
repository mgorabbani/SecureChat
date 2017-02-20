'use strict'
import React from 'react'
import { View, Text,Image,TouchableOpacity,Button } from 'react-native'


export default class RecentChatsScreen extends React.Component {
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
