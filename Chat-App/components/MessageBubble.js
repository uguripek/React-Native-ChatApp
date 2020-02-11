import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colorsys from 'colorsys'

function MessageBubble ({ icon, name, message, bubbleColor }) {

    function converComplementary(bubbleColors) {
        const r = colorsys.hex2Rgb(bubbleColors).b
        const b = colorsys.hex2Rgb(bubbleColors).g
        const g = colorsys.hex2Rgb(bubbleColors).r + 100
        return colorsys.rgb2Hex(r, g, b)
    }

    return (
      <View style={{ backgroundColor: bubbleColor, marginTop: 25 }}>
        <Text style={{ color: converComplementary(bubbleColor), fontSize: 18 }}> {icon} → {name} </Text>
    <Text style={{ color: converComplementary(bubbleColor), fontSize: 16 }}> {message} {converComplementary(bubbleColor)}</Text>
      </View>
    );
}

export default MessageBubble;
