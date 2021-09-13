/*
 * File Created: Saturday, 11th September 2021 10:14:38 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Saturday, 11th September 2021 10:14:39 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */

import React, { useEffect, useRef } from 'react';
import { Animated, SafeAreaView, StyleSheet, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
// import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

const Skeleton = () => {
  const changeOpacity = () => {
    // console.log(opacity._value)
    if (opacity._value == 0) {
      fadeIn();
    } else {
      fadeOut();
    }
  };
  const opacity = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
    }).start();
  };
  useEffect(() => {
    const intervalOpactity = setInterval(() => {
      changeOpacity();
    }, 1500);
    return () => clearInterval(intervalOpactity);
  }, [opacity]);
  return (
    <SafeAreaView style={styles.container}>
      <Animated.View style={{ opacity }}>
        <View style={styles.upperPage}>
          <Icon
            name="university"
            type="font-awesome"
            size={150}
            color={'#fff'}
          />
        </View>
      </Animated.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccccccaf',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  upperPage: {
    height: '90%',
    opacity: 0.8,
  },
});
export default Skeleton;
