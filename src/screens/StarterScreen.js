/*
 * File Created: Monday, 6th September 2021 8:36:39 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 8:36:40 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Icon, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import Skeleton from '../components/Skeleton';
import { resetToken } from '../store/actions';
const StarterScreen = (props) => {
  const [loading, setLoading] = useState(true);
  const authStateChanged = (currentUser) => {
    if (currentUser) {
      props.resetToken({ email: currentUser.email, uid: currentUser.uid });
      goHome();
    } else {
      setLoading(false);
    }
  };
  useEffect(() => {
    const auth = getAuth();
    return onAuthStateChanged(auth, authStateChanged);
  }, []);
  const goHome = () => {
    props.navigation.navigate('App');
  };
  const goToLogin = () => {
    props.navigation.navigate('AuthPage');
  };
  return (
    <View style={styles.backPage}>
      {loading ? (
        <Skeleton />
      ) : (
        <>
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
        </>
      )}
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
const mapStateToProps = ({ auth }) => {
  return { uid: auth.uid, email: auth.email };
};
export default connect(mapStateToProps, { resetToken })(StarterScreen);
