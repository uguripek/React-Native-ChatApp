import React, { Component } from 'react';
import { View, Text } from 'react-native';
import MessageBubble from '../components/MessageBubble';

class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <MessageBubble
          name='꧁༒•TheKing•༒꧂ '
          icon='👅'
          message='askdjhaskdajh'
          bubbleColor='#f9ff53'
        />
        <MessageBubble
          name='꧁༒•TheKing•༒꧂ '
          icon='👅'
          message='askdjhaskdajh'
          bubbleColor='#ff3d67'
        />
        <MessageBubble
          name='꧁༒•TheKing•༒꧂ '
          icon='👅'
          message='askdjhaskdajh'
          bubbleColor='#e82e7f'
        />
      </View>
    );
  }
}

export default ChatScreen;
