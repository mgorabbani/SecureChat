'use strict'
import React from 'react'
import { View,
  Text,
  Button,
  ListView,Image,
  TouchableHighlight
} from 'react-native'
export default class TabOneScreenOne extends React.Component {
  constructor(){
    super()


     const ds = new ListView.DataSource({
       rowHasChanged: (r1,r2) => r1 !=r2
     })

     this.state = {
       dataSource: ds.cloneWithRows([])
     }
  }
  componentDidMount(){
    var titles= []

    fetch('https://facebook.github.io/react-native/movies.json')
    .then(res=> res.json())
    .then(result=>{
      var movies = result.movies
      for (var i = 0; i < movies.length; i++) {
        titles.push(movies[i].title)
      }
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(titles)
      })
    })
}


  render(){
    return(
      <View style={{
        flex:1,
        backgroundColor:this.state.color,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <ListView
          enableEmptySections={true}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    )
  }
  renderRow(dataRow){
    return (
      <TouchableHighlight>
        <Image
          source={require('../../img/thumbnails1.jpg')}
        />
      </TouchableHighlight>
    )
  }
}
