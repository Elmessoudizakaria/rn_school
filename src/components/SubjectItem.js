/*
 * File Created: Wednesday, 8th September 2021 9:17:51 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Wednesday, 8th September 2021 9:17:51 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const SubjectItem = (props) => {
  return (
    <Card containerStyle={styles.card}>
      <TouchableOpacity
        onPress={() => props.search(props.subjectName)}
        style={{ width: '100%' }}
      >
        <Card.Title>{props.subjectName}</Card.Title>
        <Card.Divider></Card.Divider>
        <Icon
          name={props.icon}
          type="font-awesome-5"
          size={40}
          color={props.iconColor}
        />
      </TouchableOpacity>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '40%',
  },
});
export default SubjectItem;
