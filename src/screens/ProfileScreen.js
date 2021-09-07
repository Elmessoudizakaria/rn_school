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
import { Avatar, Button, Text } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View style={{ paddingHorizontal: 20, paddingVertical: 30 }}>
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          title="ZE"
          size="large"
          source={{
            uri: 'null',
          }}
          activeOpacity={0.9}
        />
      </View>
      <View style={styles.avatarContainer}>
        <Text h3 style={styles.nameLabel}>
          Zakaria EL messoudi
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text h3 style={styles.numberLabel}>
          +(212)67 89 64 39
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Text h3 style={styles.emailLabel}>
          email@email.com
        </Text>
      </View>
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

export default ProfileScreen;
