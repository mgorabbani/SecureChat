'use strict'
import { TabNavigator } from 'react-navigation'
// Tab-Navigators
import TabOneNavigation from '../tabOne/views/TabOneNavigation'
import TabTwoNavigation from '../tabTwo/views/TabTwoNavigation'
import TabThreeNavigation from '../tabThree/views/TabThreeNavigation'


const routeConfigs = {
  CALLS: { screen: TabOneNavigation },
  CHATS: { screen: TabTwoNavigation },
  CONTACTS: { screen: TabThreeNavigation },
}

const tabBarConfiguration = {

backBehavior: 'none',
tabBarOptions:{
    showIcon: false,
    showLabel:true,
    lazyLoad: true,
    tabBarPosition:'top',
    tabStyle: {
      borderBottomColor:'#fff',

    },
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

export const TabBar = TabNavigator(routeConfigs,tabBarConfiguration)

export const tabBarReducer = (state,action) => {
  if (action.type === 'JUMP_TO_TAB') {
    return { ...state, index:0 }
  } else {
    return TabBar.router.getStateForAction(action,state)
  }
}
