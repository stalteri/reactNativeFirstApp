import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';

import styles from './styles'

class Input extends PureComponent {

  render() {
    const { secureTextEntry } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.label}>{this.props.label}</Text>

        <TextInput
          hitSlop={{ top: 25, right: 25, bottom: 25, left: 25 }}
          underlineColorAndroid='transparent'
          secureTextEntry={secureTextEntry}
          style={styles.input}
        />
      </View>
    );
  }
}

export default Input;