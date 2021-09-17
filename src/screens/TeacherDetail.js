/*
 * File Created: Monday, 6th September 2021 2:49:15 pm
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 2:49:15 pm
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { AirbnbRating, Avatar, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';

const TeacherDetail = (props) => {
  const backToSearch = () => {
    props.navigation.navigate('SchoolSearchResult');
  };
  return (
    <View>
      {/* rating */}
      <View>
        <AirbnbRating count={5} showRating={props.teacher.rate} isDisabled />
      </View>
      {/* avatar */}
      <View style={styles.avatarContainer}>
        <Avatar
          rounded
          title="ZE"
          size="large"
          source={{
            uri: props.teacher.avatar,
          }}
          activeOpacity={0.9}
        />
      </View>
      {/* name */}
      <View style={styles.nameContainer}>
        <Text h3>
          {props.teacher.name} {props.teacher.lastName}
        </Text>
      </View>
      {/* resumé */}
      <View style={styles.resumeContainer}>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          consectetur fugiat reprehenderit repellendus molestiae alias id
          temporibus, accusamus iusto ab. Excepturi id molestias, alias laborum
          dicta consectetur ipsa voluptas porro.
        </Text>
      </View>
      {/* decesion block */}
      <View style={styles.decesionContainer}>
        <Button
          title="reject"
          type="solid"
          containerStyle={{ width: '45%' }}
          buttonStyle={styles.rejectButton}
          onPress={() => backToSearch()}
        />
        <Button
          title="accept"
          type="outline"
          containerStyle={{ width: '45%' }}
          onPress={() => console.log('ACCEPTED')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  nameContainer: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  resumeContainer: {
    marginVertical: 10,
    paddingLeft: 10,
    paddingRight: 20,
    textAlign: 'justify',
    borderColor: '#888',
    borderStyle: 'solid',
    borderWidth: 1,
    backgroundColor: '#fff',
  },
  decesionContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 10,
    paddingRight: 20,
    justifyContent: 'space-evenly',
    width: '100%',
  },
  buttons: {
    paddingVertical: 5,
  },
  rejectButton: {
    backgroundColor: '#884646',
  },
});
const mapStateToProps = ({ search }) => {
  return {
    teacher: search.teacher,
  };
};
export default connect(mapStateToProps)(TeacherDetail);
