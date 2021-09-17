/*
 * File Created: Monday, 6th September 2021 11:32:02 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 11:32:03 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';
import useLocation from '../hooks/useLocation';
import { chooseTeacher, searchTeachers } from '../store/actions';
const SearchResultScreen = (props) => {
  const [errorMsg, location] = useLocation();
  const makeAvatarTitle = (item) => {
    return `${item.name.toUpperCase().charAt(0)}${item.lastName
      .toUpperCase()
      .charAt(0)}`;
  };
  const search = (teacher) => {
    props.chooseTeacher(teacher);
    props.navigation.navigate('SearchDetail');
  };
  useEffect(() => {
    if (props.uid.length > 0) {
      if (location !== null) {
        const searchBody = {
          level: props.level,
          subject: props.subject,
          lat: location.coords.latitude,
          lng: location.coords.longitude,
        };
        // set(push(fireRef(db, 'users/' + props.uid)), searchBody);
        props.searchTeachers(searchBody);
      }
    } else {
      props.navigation.navigate('AuthPage');
    }
  }, [location]);
  return (
    <View style={styles.container}>
      {props.errorMessage ? <Text h4>{props.errorMessage}</Text> : null}
      {location ? (
        <>
          {props.teachers.length > 0 ? (
            <>
              <View style={styles.resultBlock}>
                <Text h4 style={styles.title}>
                  {' '}
                  Search results : {props.teachers.length}
                </Text>
                <Button
                  title="lucky "
                  type="outline"
                  iconRight
                  icon={
                    <Icon
                      name="globe"
                      type="font-awesome-5"
                      size={15}
                      color="#062c2cd8"
                    />
                  }
                  buttonStyle={styles.checkButton}
                  titleStyle={styles.checkButtonLabel}
                />
              </View>
              <View>
                <FlatList
                  data={props.teachers}
                  keyExtractor={(teacher) => teacher.name + teacher.lastName}
                  showsVerticalScrollIndicator={false}
                  legacyImplementation={false}
                  renderItem={({ item }) => {
                    return (
                      <TouchableOpacity onPress={() => search(item)}>
                        <View style={styles.row}>
                          <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Avatar
                              rounded
                              title={makeAvatarTitle(item)}
                              size="small"
                              source={{
                                uri: item.avatar,
                              }}
                              activeOpacity={0.9}
                              containerStyle={{
                                marginRight: 10,
                                alignSelf: 'center',
                              }}
                            />
                            <View>
                              <Text style={styles.title}>
                                {item.name} {item.lastName}
                              </Text>
                              <Text>
                                <Icon
                                  name="star"
                                  type="font-awsome"
                                  size={12}
                                  color={'yellow'}
                                />{' '}
                                {item.rate}{' '}
                                <Text style={styles.totalVotes}>
                                  ({item.totalVotes})
                                </Text>
                              </Text>
                            </View>
                          </View>
                          <Text style={styles.price}>
                            {Number(item.price).toFixed(2)} DHS
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </>
          ) : (
            <Text>Pas de resultas</Text>
          )}
        </>
      ) : (
        <Spinner size={120} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    marginTop: '1%',
    marginBottom: '25%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 8,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
    textTransform: 'capitalize',
  },
  icon: {
    fontSize: 24,
    color: 'red',
  },
  navigationIcon: {
    color: 'blue',
  },
  resultBlock: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 8,
  },
  checkButton: {
    backgroundColor: '#fff',
    borderWidth: 2,
    borderRadius: 1,
    paddingVertical: 1,
    borderColor: '#062c2cd8',
  },
  checkButtonLabel: {
    color: '#062c2cd8',
    textTransform: 'capitalize',
    // fontFamily:'GoodFeelingSans'
  },
  totalVotes: {
    color: '#888',
    fontSize: 11,
  },
  price: {
    alignSelf: 'flex-end',
  },
});
const mapStateToProps = ({ search, auth }) => {
  return {
    level: search.level,
    subject: search.subject,
    teachers: search.teachers,
    loading: search.loadTeachers,
    errorMessage: search.loadTeacherError,
    uid: auth.user.uid,
  };
};
export default connect(mapStateToProps, { chooseTeacher, searchTeachers })(
  SearchResultScreen
);
