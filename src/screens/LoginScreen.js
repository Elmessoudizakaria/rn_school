/*
 * File Created: Wednesday, 8th September 2021 3:35:52 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 3:35:52 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { login, register } from '../store/actions';
const LoginScreen = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    props.login({ email, password });
    setEmail('');
    setPassword('');
  };
  const signUp = () => {
    props.register({ email, password });
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <View style={styles.pageBackend}>
        <View style={styles.titleContainer}>
          <Text h4 style={styles.title}>
            Authentification
          </Text>
        </View>
        <View style={styles.formContainer}>
          <Input
            label="Your Email Address"
            placeholder="Email"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
            leftIcon={{ type: 'font-awesome-5', name: 'envelope-open-text' }}
            containerStyle={{ marginBottom: 20 }}
          />
          <Input
            label="Password"
            secureTextEntry
            placeholder="Password"
            value={password}
            leftIcon={{ type: 'font-awesome-5', name: 'lock' }}
            containerStyle={{ marginBottom: 5 }}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={setPassword}
          />
          {props.error ? (
            <Text style={styles.erroMessage}>{props.error}</Text>
          ) : null}
          <Button
            title="Sign in"
            buttonStyle={styles.loginBtn}
            onPress={signIn}
          />
          <Button
            title="Sign up"
            buttonStyle={styles.signUpBtn}
            titleStyle={styles.signUpBtnTitle}
            onPress={signUp}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  pageBackend: {
    flex: 1,
    backgroundColor: '#52a08f',
  },
  titleContainer: {
    height: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
    paddingBottom: 20,
    paddingLeft: 20,
  },
  title: {
    color: 'white',
    fontWeight: '700',
  },
  formContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
    padding: 20,
  },
  loginBtn: {
    backgroundColor: '#52a08f',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  signUpBtn: {
    backgroundColor: 'white',
    borderColor: '#52a08f',
    borderWidth: 2,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signUpBtnTitle: {
    color: '#52a08f',
  },
  erroMessage: {
    fontSize: 15,
    color: 'red',
    fontWeight: '700',
    marginBottom: 10,
  },
});
const mapStateToProps = ({ auth }) => {
  return {
    error: auth.error,
  };
};
export default connect(mapStateToProps, { login, register })(LoginScreen);
