'use strict'
import React from 'react'
import { View, Text,Image,TouchableOpacity,Button,Picker,Item } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackNavigator, CardStack }     from 'react-navigation'
const { BackButton } = CardStack.Header

 const SingleChatView = ({ navigation }) => (

      <View style={{
        flex:1,
        backgroundColor:'lime',
        alignItems:'center',
        justifyContent:'center'
      }}>

          <Text onPress={()=> navigation.goBack(null)}>Hi I am single Chat view
          </Text>

      </View>
    );


    SingleChatView.navigationOptions = {
      headerMode:'screen',
      tintColor:'#fff',

      header: ({ state, navigation,goBack  }) => ({
        backTitle:'right',

        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        right:(<Text>sdfsd</Text>),
        left:(<View style={{flexDirection:'row'}}>
                <BackButton onPress={ () => goBack() } />
                <TouchableOpacity style={{alignItems:'center',flexDirection:'row'}}>
                <Image
                  style={{height:35,width:35,borderRadius:20,marginRight:20}}
                  source={{uri: state.params.dr.img}}/>
                <Text style={{fontWeight:'bold',fontSize:16,color:'#fff'}}>{state.params.dr.name}
                </Text>
                </TouchableOpacity>
              </View>),
        style: {
          backgroundColor:'#085E55',
        },
        tintColor: '#fff'
      }),
    };

export default SingleChatView;
