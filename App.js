// import React, { Component } from 'react';
// import { AppRegistry, View, Text,TextInput,Button,Alert,FlatList } from 'react-native';

// export default class FlexDirectionBasics extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       address: '',
//       list:[
//               {key: 'Devin'},
//               {key: 'Jackson'},
//               {key: 'James'},
//               {key: 'Joel'},
//               {key: 'John'},
//               {key: 'Jillian'},
//               {key: 'Jimmy'},
//               {key: 'Julie'},
//             ],
//     };
//   }
//   _onPressButton() {
//       Alert.alert('You tapped the button!')
//     }
//   render() {
    
//     return (
//       // Try setting `flexDirection` to `column`.
//       <View style={{flex: 1, flexDirection: 'column',justifyContent: 'center',
//         alignItems: 'center'}}>
//         <View style={{width: 200, height: 50, backgroundColor: 'powderblue'}} >
//           <Button
//             onPress={this._onPressButton}
//             title="Press Me"
//           />
//         </View>
//         <View style={{flex:1,flexDirection:'row', width: 300, height: 100, backgroundColor: 'red'}}>
//             <View style={{width:100}}><Text>{this.state.name}</Text></View>
//             <View style={{width:100}}><Text>{this.state.email}</Text></View>
//             <View style={{width:100}}><Text>{this.state.address}</Text></View>
//         </View>
//         <View style={{width: 200, height: 200, backgroundColor: 'steelblue'}}>
//           <TextInput placeholder="Your Name" onChangeText={(name) => this.setState({name})}
//           />
//           <TextInput placeholder="Your Email" onChangeText={(email) => this.setState({email})}
//           />
//           <TextInput placeholder="Your Address" onChangeText={(address) => this.setState({address})}
//           />
//            <FlatList
//            data={this.state.list}
//             renderItem={({item}) => <Text>{item.key}</Text>}
//           />
//         </View>
//       </View>
      
//     );
//   }
// };

// // skip this line if using Create React Native App
// AppRegistry.registerComponent('AwesomeProject', () => FlexDirectionBasics);

import React from 'react';
import {StyleSheet, Button, Alert, FlatList, ActivityIndicator, Text, View, TouchableHighlight } from 'react-native';
import Test from './test.js';
import axios from 'axios';
export default class FetchExample extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      reza:[],
    };
  }

  componentDidMount(){
    return fetch('https://facebook.github.io/react-native/movies.json')
      .then((response) => response.json())
      .then((responseJson) => {

        this.setState({
          isLoading: false,
          reza: responseJson.movies,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }
  pressme(){
    Alert.alert('Hi Reza');
  }



  render(){

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, paddingTop: 30}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1, alignItems:'center', paddingTop:30}}>
        <FlatList
          data={this.state.reza}
          renderItem={({item}) => <Text>Title:{item.title}  Year: {item.releaseYear}</Text>}
          keyExtractor={(item, index) => index}
        />
        <TouchableHighlight style={{backgroundColor:'red', paddingLeft:20,paddingRight:20, paddingTop:10,paddingBottom:10,borderRadius:20,}} >
         <Text style={{color: '#fff',fontSize:20,fontWeight:'bold'}}> Touch Here </Text>
        </TouchableHighlight>
        <Test />
        <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
          <Button
          onPress={this.pressme}
            title="Learn More"
            color="#841584"
          />
        </View>
        
      </View>
    );
  }
}
