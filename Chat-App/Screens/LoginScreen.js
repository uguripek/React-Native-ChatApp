import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, Alert } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ChatScreen from './ChatScreen';
import AddNameScreen from './AddNameScreen';

import { firebaseApp } from '../config/FirebaseConfig';

export class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email: '',
        password: ''
    };
  }

  goAddNameScreen() {
      this.props.navigation.navigate('AddNameScreen')
  }

  register() {
    firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
        this.goAddNameScreen()
        const userId = firebaseApp.auth().currentUser.uid
        firebaseApp.database().ref('Users/' + userId).set({
            UserEmail: this.state.email,
            UserPassword: this.state.password,
        });
    })
    .catch(function(error) {
      Alert.alert(
        'Ko đăng kí được',
        'Kieemr tra laij',
        [
          {
            text: '',
            style: 'cancel',
          },
          {text: 'Ukm'},
        ],
        {cancelable: false},
      )  
    });
  }

  goChatScreen() {
    this.props.navigation.navigate('ChatScreen')
  }

  login() {
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {
      this.goChatScreen()
    })
    .catch(function(error) {
      Alert.alert(
        'Ko vô được vì',
        'ko vô được',
        [
          {
            text: '',
            style: 'cancel',
          },
          {text: 'Ukm'},
        ],
        {cancelable: false},
      );
    });
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'white', marginTop: 100 }}>
        <TextInput
            style={{ borderColor: 'black', borderWidth: 1 }}
            placeholder='email'
            value={this.state.email}
            onChangeText={(email) => this.setState({email})}
        />
        <TextInput
            placeholder='password'
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity style={{ height: 30, width: 200, backgroundColor: 'red' }} onPress={() => this.login()}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ height: 30, width: 200, backgroundColor: 'red' }} onPress={() => this.register()}>
            <Text>Reg</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const appNavigator = createStackNavigator(
    {
        LoginRegisterScreen: LoginRegister,
        ChatScreen: ChatScreen,
        AddNameScreen: AddNameScreen,
    },
    {
        initialRouteName: 'LoginRegisterScreen',
        headerMode: "none",
    }
)

const AppContainer = createAppContainer(appNavigator)

export default class LoginScreen extends Component {
    render() {
      return (
        <AppContainer />
      )
    };
};
