/*
 * File Created: Monday, 6th September 2021 11:32:02 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 11:32:03 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React, { useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { Avatar } from 'react-native-elements/dist/avatar/Avatar';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { connect } from 'react-redux';
import { chooseTeacher } from '../store/actions';

const SearchResultScreen = (props) => {
  const data = [
    {
      id: '1',
      name: 'zack',
      lastName: 'El',
      avatar:
        'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
      rate: 4.8,
      price: '200.00 DHS',
      totalVotes: 453,
    },
    {
      id: '2',
      name: 'simo',
      lastName: 'Marb',
      avatar: 'null',
      rate: 4.5,
      price: '150.00 DHS',
      totalVotes: 153,
    },
    {
      id: '3',
      name: 'joe',
      lastName: 'Ben',
      avatar: 'null',
      rate: 4.3,
      price: '180.00 DHS',
      totalVotes: 450,
    },
    {
      id: '4',
      name: 'Zineb',
      lastName: 'Eso',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAAwQyKxGO39mWtUYjD0s_uhMSmEi4wXyPg&usqp=CAU',
      rate: 4.7,
      price: '280.00 DHS',
      totalVotes: 253,
    },
    {
      id: '5',
      name: 'zack',
      lastName: 'El',
      avatar:
        'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
      rate: 4.8,
      price: '200.00 DHS',
      totalVotes: 453,
    },
    {
      id: '6',
      name: 'simo',
      lastName: 'Marb',
      avatar: 'null',
      rate: 4.5,
      price: '150.00 DHS',
      totalVotes: 153,
    },
    {
      id: '7',
      name: 'joe',
      lastName: 'Ben',
      avatar: 'null',
      rate: 4.3,
      price: '180.00 DHS',
      totalVotes: 450,
    },
    {
      id: '8',
      name: 'Zineb',
      lastName: 'Eso',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAAwQyKxGO39mWtUYjD0s_uhMSmEi4wXyPg&usqp=CAU',
      rate: 4.7,
      price: '280.00 DHS',
      totalVotes: 253,
    },
    {
      id: '9',
      name: 'zack',
      lastName: 'El',
      avatar:
        'https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png',
      rate: 4.8,
      price: '200.00 DHS',
      totalVotes: 453,
    },
    {
      id: '10',
      name: 'simo',
      lastName: 'Marb',
      avatar: 'null',
      rate: 4.5,
      price: '150.00 DHS',
      totalVotes: 153,
    },
    {
      id: '11',
      name: 'joe',
      lastName: 'Ben',
      avatar: 'null',
      rate: 4.3,
      price: '180.00 DHS',
      totalVotes: 450,
    },
    {
      id: '12',
      name: 'Zineb',
      lastName: 'Eso',
      avatar:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjAAwQyKxGO39mWtUYjD0s_uhMSmEi4wXyPg&usqp=CAU',
      rate: 4.7,
      price: '280.00 DHS',
      totalVotes: 253,
    },
  ];
  useEffect(() => {
    console.log(
      'MAKE AN API REQUEST TO LOAD TEACHER FOR',
      props.level,
      ' ',
      props.subject
    );
  }, []);
  const makeAvatarTitle = (item) => {
    return `${item.name.toUpperCase().charAt(0)}${item.lastName
      .toUpperCase()
      .charAt(0)}`;
  };
  const search = () => {
    props.navigation.navigate('SearchDetail');
  };
  return (
    <View style={styles.container}>
      <View style={styles.resultBlock}>
        <Text h4 style={styles.title}>
          {' '}
          Search results : {data.length}
        </Text>
        <Button
          title="send all "
          type="outline"
          iconRight
          icon={
            <Icon name="globe" type="font-awesome-5" size={15} color="white" />
          }
          buttonStyle={styles.checkButton}
          titleStyle={styles.checkButtonLabel}
        />
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={(teacher) => teacher.id}
          showsVerticalScrollIndicator={false}
          legacyImplementation={false}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity onPress={() => search()}>
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
                      containerStyle={{ marginRight: 10 }}
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
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
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
    backgroundColor: '#062c2cd8',
    borderWidth: 2,
    borderRadius: 1,
    paddingVertical: 1,
    borderColor: 'transparent',
  },
  checkButtonLabel: {
    color: '#fff',
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
const mapStateToProps = ({ search }) => {
  return {
    level: search.level,
    subject: search.subject,
  };
};
export default connect(mapStateToProps, { chooseTeacher })(SearchResultScreen);
