'use strict'
import React, {Component} from 'react';
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import CallView from './tabs/CallView'
import ChatView from './tabs/ChatView'
import ContactsView from './tabs/ContactsView'
import TopOptions from './TopOptions'

const routeConfigs = {
  CALLS: { screen: CallView },
  CHATS: { screen: ChatView },
  CONTACTS: { screen: ContactsView },
}

const tabBarConfiguration = {
 title: 'My Chats',
  headerMode: 'modal',
backBehavior: 'none',
tabBarOptions:{
    showIcon: false,
    showLabel:true,
    swipeEnabled: true,
    tabBarPosition:'top',
    indicatorStyle:{backgroundColor:'#fff'},
    labelStyle: {
   fontSize: 14,
   fontWeight:'bold',
   color:'#fff'

 },
    style: {
    backgroundColor: '#085E55',
  }
  }
}

 const TabBar = TabNavigator(routeConfigs,tabBarConfiguration)
 TabBar.navigationOptions = {
   title: 'My Chats',

   header: ({ state, setParams }) => ({
      // Render a button on the right side of the header
      // When pressed switches the screen to edit mode.
      right: (
       <TopOptions navigation />
     ),
      style : {
        backgroundColor:'#085E55',
        borderColor:'red'
      },
      tintColor: '#fff'
    }),
 }
export default TabBar;
