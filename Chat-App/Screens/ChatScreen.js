import React, { Component } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import MessageBubble from '../components/MessageBubble';
import { firebaseApp } from '../config/FirebaseConfig'

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      name: '',
      icon: '',
      bubbleColors: '',
      chatData: [],
    };
  }

  async componentDidMount() {
    const userId = firebaseApp.auth().currentUser.uid
    console.log(userId);
    
    //this.setState({name})
    firebaseApp.database().ref('Users/' + userId).on("value", snapshot => {
      this.setState({ 
        name: snapshot.val().Name,
        icon: snapshot.val().Icon,
        bubbleColor: snapshot.val().Color,
      })      
    })
    firebaseApp.database().ref('/Messages').on("value", snapshot => {
      if(snapshot.val() !== undefined && snapshot.val() !== null )
      {
          this.setState({
              chatData: Object.values(snapshot.val())
          });
      }
      
  });
  }

  _renderChatLine = (item) =>
    {
        return(
            <MessageBubble icon={item.Icon} name={item.Name}  message={item.Message} bubbleColor={item.Color} />
        );
    };

  send() {
    const userName = this.state.name
    firebaseApp.database().ref('Messages/').push({
      Name: userName,
      Message: this.state.message,
      Icon: this.state.icon,
      Color: this.state.bubbleColor
    })
    this.setState({ message: '' })
  }

  render() {
    return (
      <View style={{ flex: 1}}>
        <View style={{ flex: 1 }}>
        <FlatList data={this.state.chatData} renderItem={({item}) => this._renderChatLine(item)} />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            placeholder="inputhere"
            onChangeText={(message) => this.setState({message})}
            value={this.state.message}
            style={{ borderColor: 'black', borderWidth: 1 }}
          />
          <Button
            title='gui'
            style={{ height: 30, width: 200 }}
            onPress={() => this.send()}
          />
        </View>
      </View>
    );
  }
}

export default ChatScreen;
