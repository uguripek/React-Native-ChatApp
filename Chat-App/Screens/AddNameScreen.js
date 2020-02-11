import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, Text, Dimensions } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import { firebaseApp } from '../config/FirebaseConfig';

import ChatScreen from './ChatScreen';
import { ColorWheel } from '../components/ColorWheel';

import colorsys from 'colorsys'

class AddName extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        color: '',
        icon: '',
    };
  }

  addName() {
    const userId = firebaseApp.auth().currentUser.uid
    firebaseApp.database().ref('Users/' + userId).update({
        Name: this.state.name,
        Icon: this.state.icon,
        Color: colorsys.hsv2Hex( this.state.color.h, this.state.color.s, this.state.color.v )
    })
    this.props.navigation.navigate('ChatScreen')
  }

  render() {
    return (
      <View style={{ marginTop: 100, flex: 1 }}>
        <TextInput
            style={{ flex: 1, borderColor: 'black', borderWidth: 1 }}
            value={this.state.name}
            onChangeText={(name) => this.setState({name})}
        />
        <TextInput
            style={{ flex: 1, borderColor: 'black', borderWidth: 1 }}
            value={this.state.icon}
            onChangeText={(icon) => this.setState({icon})}
        />

        <View style={{flex: 4}}>
            <ColorWheel
            initialColor="#ee0000"
            onColorChange={color => this.setState({color})}
            style={{width: 200, height: 200}}
            thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
            <Text> convert: <Text style={{ color: colorsys.hsv2Hex( this.state.color.h, this.state.color.s, this.state.color.v ) }}> {colorsys.hsv2Hex( this.state.color.h, this.state.color.s, this.state.color.v )} </Text></Text>
        </View>

        <TouchableOpacity 
            style={{ flex: 4, width: 200, height: 30, backgroundColor: 'yellow' }}
            onPress={() => this.addName()}
        >
            <Text>Add name</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const appNavigator = createStackNavigator(
    {
        AddNameScreen: AddName,
        ChatScreen: ChatScreen,
    },
    {
        initialRouteName: 'AddNameScreen',
        headerMode: "none",
    }
)

const AppContainer = createAppContainer(appNavigator)

export default class AddNameScreen extends Component {
    render() {
      return (
        <AppContainer />
      )
    };
};

