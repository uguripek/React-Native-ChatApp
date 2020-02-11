import React, { Component } from 'react';
import { View, Text } from 'react-native';
import colorsys from 'colorsys';
import PropTypes from 'prop-types';

export default  function MessageBubble ({ icon, name, message, bubbleColor }) {

    function converComplementary(bubbleColors) {
        const r = colorsys.hex2Rgb(bubbleColors).b
        const b = colorsys.hex2Rgb(bubbleColors).g
        const g = colorsys.hex2Rgb(bubbleColors).r + 100
        return colorsys.rgb2Hex(r, g, b)
    }

    return (
      <View style={{
        flexDirection: 'column', width: 200, alignItems: 'flex-start',
        padding: 8, backgroundColor: bubbleColor, borderRadius: 8,marginBottom : 10,marginTop : 10,marginLeft : 5,marginRight : 5
    }}>
        <Text style={{ color: converComplementary(bubbleColor), marginBottom: 5 }} >{icon} {name}</Text>
        <Text style={{ color: converComplementary(bubbleColor), marginBottom: 5 }}> > {message}</Text>
    
      </View>
    );
}

MessageBubble.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  bubbleColor: PropTypes.string.isRequired
}


MessageBubble.defaultProps = {
  bubbleColor: '#000000',
  message: 'none'
}
