'use strict'
import React from 'react'
import { View, Text,Image,TouchableOpacity,Button } from 'react-native'


 const SingleChatView = ({ navigation }) => (

      <View style={{
        flex:1,
        backgroundColor:'lime',
        alignItems:'center',
        justifyContent:'center'
      }}>

          <Text>Hi I am single Chat view
          </Text>
      </View>
    );


    SingleChatView.navigationOptions = {
      headerMode:'screen',
      header: ({ state, setParams }) => ({
        title: `${state.params.dr.name}'s Profile!`,
        // Render a button on the right side of the header.
        // When pressed switches the screen to edit mode.
        right: (
          <Button
            title={state.params.mode === 'edit' ? 'Done' : 'Edit'}
            onPress={() => setParams({ mode: state.params.mode === 'edit' ? '' : 'edit' })}
          />
        ),
      }),
    };

export default SingleChatView;
