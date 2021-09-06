/*
 * File Created: Monday, 6th September 2021 3:21:47 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 3:21:47 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { View } from 'react-native';
import { Avatar, Button, Text } from 'react-native-elements';

const ProfileScreen = () => {
  return (
    <View style={{ paddingHorizontal: 20 }}>
      <View>
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
      <View>
        <Text h3>Zakaria EL messoudi</Text>
      </View>
      <View>
        <Text h3>+(212)67 89 64 39</Text>
      </View>
      <View>
        <Text h3>email@email.com</Text>
      </View>
      <View>
        <Button title="update profile" type="outline" />
      </View>
      {/* Avatar */}
      {/* Name */}
      {/* number */}
      {/* email */}
      {/* change button */}
    </View>
  );
};

export default ProfileScreen;
