'use strict'
import { StackNavigator } from 'react-navigation'
// Screens
import SingleChatView from './SingleChatView'
import TabView from './TabView'


const routeConfiguration = {
  Tab: {
    screen: TabView,
  },
  Chat: {
    path: 'people/:name',
    screen: SingleChatView
  },

}


// going to disable the header for now
const stackNavigatorConfiguration = {
  initialRoute: 'TabView',
}
const ChatView = StackNavigator(routeConfiguration,stackNavigatorConfiguration)
export default ChatView;
