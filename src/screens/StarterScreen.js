/*
 * File Created: Monday, 6th September 2021 8:36:39 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 8:36:40 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
const StarterScreen = ({ navigation }) => {
  const goHome = () => {
    navigation.navigate('App');
  };
  const goToLogin = () => {
    navigation.navigate('AuthPage');
  };

  useEffect(() => {
    async function getUid() {
      const uid = await useAsyncStorage('uid').getItem();
      const email = await useAsyncStorage('email').getItem();
      if (uid && email) {
        goHome();
      }
    }
    getUid();
  }, []);
  return (
    <View style={styles.backPage}>
      <View style={styles.upperPage}>
        <Icon
          name="user-graduate"
          type="font-awesome-5"
          iconStyle={styles.icon}
          size={160}
        />
        <Text h3 style={styles.title}>
          Welcome To The Virtual School
        </Text>
      </View>
      <View>
        <Button
          title="Let's Get Started"
          type="outline"
          containerStyle={styles.buttonContainer}
          onPress={goHome}
        />
        <Button
          title="Sign In"
          type="solid"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.signButton}
          onPress={goToLogin}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  backPage: {
    height: '100%',
  },
  upperPage: {
    paddingVertical: 25,
    height: '70%',
    backgroundColor: '#466888',
    marginBottom: 20,
  },
  icon: {
    color: '#fff',
    marginVertical: 30,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'NewRoman',
  },
  buttonContainer: {
    width: '80%',
    marginLeft: '10%',
    marginBottom: 10,
  },
  signButton: {
    backgroundColor: '#46887d',
  },
});
export default StarterScreen;
