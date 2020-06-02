import React, { PureComponent } from 'react';
import {
  ScrollView,
  View,
  Text,
  Platform,
  KeyboardAvoidingView
} from 'react-native';
import styles from './styles';

import Input from 'app/components/input'
import CustomButton from 'app/components/button'

class LoginScreen extends PureComponent {

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        contentContainerStyle={{ flexGrow: 1 }}
        enabled={Platform.OS === 'ios'}
        behavior='padding'
      >
        <ScrollView contentContainerStyle={styles.container} bounces={false}>
          <View>
            <View accessibilityRole='button' style={styles.socialButton}></View>
          </View>
          <View>
            <Text style={styles.title}>Welcome Back</Text>
            <Text style={styles.subtitle}>Sign in to continue</Text>
            <Input label='username' secureTextEntry={false}></Input>
            <Input label='password' secureTextEntry={true}></Input>
            <CustomButton label='proceed'></CustomButton>
          </View>
          <View style={styles.footer}>
            <Text accessibilityRole='button' style={styles.littleLink}>Forgot Password?</Text>
            <Text accessibilityRole='button' style={styles.littleLink}>Create Account</Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

    );
  }
}

export default LoginScreen;