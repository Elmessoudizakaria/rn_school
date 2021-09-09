/*
 * File Created: Wednesday, 8th September 2021 3:36:48 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 3:36:48 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card, Input } from 'react-native-elements';

const AuthForm = ({ submitButtonText, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Card style={styles.container}>
      {/* <Text h3 style={styles.title}>
        {headerText}
      </Text> */}
      <Input
        label="Email"
        inputStyle={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
        placeholder="Set your email please"
        leftIcon={{ type: 'font-awesome', name: 'envelope-o' }}
      />
      <Input
        inputStyle={styles.input}
        secureTextEntry
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
        placeholder="Set your password please"
        leftIcon={{ type: 'font-awesome', name: 'lock' }}
      />
      <Button
        title={submitButtonText}
        onPress={() => onSubmit(email, password)}
        buttonStyle={styles.submitButton}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    marginHorizontal: 10,
    border: '1px',
    borderStyle: 'solid',
    borderColor: '#88888',
  },
  title: {
    marginVertical: 20,
    color: 'blue',
    fontFamily: 'didot',
  },
  submitButton: {
    backgroundColor: '#292D3E',
    color: 'white',
    paddingVertical: 6,
  },
  input: {
    marginVertical: 15,
    shadowColor: 'none',
  },
  inputLabel: {},
});
export default AuthForm;
