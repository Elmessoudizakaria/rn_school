/*
 * File Created: Monday, 6th September 2021 3:21:47 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 3:21:47 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Avatar, Button, Switch, Text } from 'react-native-elements';
import { connect } from 'react-redux';

const ProfileScreen = (props) => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          title="ZE"
          size="large"
          source={{
            uri: props.user.avatar,
          }}
          activeOpacity={0.9}
        />
      </View>
      <View style={styles.avatarContainer}>
        <Text h3 style={styles.nameLabel}>
          {props.user.name} {props.user.lastName}
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text h3 style={styles.numberLabel}>
          +(212)67 89 64 39
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text h3 style={styles.emailLabel}>
          {props.user.email}
        </Text>
      </View>
      {props.user.isTeacher ? (
        <View style={styles.avatarContainer}>
          <Text h4 style={styles.emailLabel}>
            Status Actuel{' '}
          </Text>
          <Switch
            style={{ alignSelf: 'center' }}
            value={props.user.status}
            onValueChange={() => console.log('change')}
          />
        </View>
      ) : null}
      <View>
        <Button title="update profile" type="outline" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 15,
  },
  nameLabel: {
    fontWeight: 'bold',
    color: '#062c2cd8',
    marginBottom: 10,
  },
  numberLabel: {
    marginBottom: 10,
  },
  emailLabel: {
    marginBottom: 10,
  },
  viewContainer: {},
  // avatarContainer:{}
});
const mapStateToProps = ({ auth }) => {
  return {
    user: auth.user,
  };
};
export default connect(mapStateToProps)(ProfileScreen);
