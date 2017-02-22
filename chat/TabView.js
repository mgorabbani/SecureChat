'use strict'
import React, {Component} from 'react';
import { TabNavigator } from 'react-navigation'

// Tab-Navigators
import CallView from './tabs/CallView'
import ChatView from './tabs/ChatView'
import ContactsView from './tabs/ContactsView'


const routeConfigs = {
  CALLS: { screen: CallView },
  CHATS: { screen: ChatView },
  CONTACTS: { screen: ContactsView },
}

const tabBarConfiguration = {
title: 'WhatsApp',
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

export default TabBar;
