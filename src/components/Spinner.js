/*
 * File Created: Wednesday, 8th September 2021 11:33:55 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 11:33:55 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => {
  return (
    <View style={styles.spinnerStyle}>
      <ActivityIndicator size={size || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export { Spinner };
