import React, { Component } from 'react';
import { Color } from './Color';
import colorsys from 'colorsys'
import {
    Text,
  Dimensions,
  StyleSheet,
  View
} from 'react-native';
import { ColorWheel } from './ColorWheel';

export default class Example extends Component {
    state = {
        color: ''
    }

  render() {
    return (
      <View style={{flex: 1}}>
        <ColorWheel
          initialColor="#ee0000"
          onColorChange={color => this.setState({color})}
          style={{width: 200, height: 200}}
          thumbStyle={{ height: 30, width: 30, borderRadius: 30}} />
        <Text> convert: <Text style={{ color: colorsys.hsv2Hex( this.state.color.h, this.state.color.s, this.state.color.v ) }}> {colorsys.hsv2Hex( this.state.color.h, this.state.color.s, this.state.color.v )} </Text></Text>
      </View>
    )
  }
}
