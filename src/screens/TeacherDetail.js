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
import { Avatar, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';

const TeacherDetail = (props) => {
  const backToSearch = () => {
    props.navigation.navigate('SchoolSearchResult');
  };
  return (
    <View style={styles.pageContainer}>
      <View style={styles.avatarViewContainer}>
        {/* avatar */}
        <View style={styles.avatar}>
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
        {/* Name and title */}
        <View>
          <Text h3>
            {' '}
            {props.teacher.name} {props.teacher.lastName}
          </Text>
          <Text>
            {props.teacher.title
              ? props.teahcer.title
              : 'Developer and lead instructor '}
          </Text>
        </View>
      </View>
      <View style={{ display: 'flex', flexDirection: 'row' }}>
        {/* Nombre des avis */}
        <View style={{ marginRight: 5 }}>
          <Text>Nombre d'avis : {props.teacher.totalVotes}</Text>
        </View>
        {/* Rate */}
        <View>
          <Text>Rate: {props.teacher.rate}</Text>
        </View>
      </View>
      {/* Personal information */}
      <View>
        <Text h3>Information personnelles</Text>
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
  pageContainer: {
    paddingHorizontal: 15,
    paddingVertical: 25,
    backgroundColor: '#fff',
  },
  avatarViewContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  avatar: { marginRight: 5 },
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
