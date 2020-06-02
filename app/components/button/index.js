import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';

import styles from './styles'

class CustomButton extends  PureComponent {

  render() {

    return (
      <View accessibilityRole='button' style={ styles.container }>
        <Text style={ styles.label }>{ this.props.label }</Text>
        <Text style={ styles.arrow }>⭢</Text>
      </View>
    );
  }
}

export default CustomButton;