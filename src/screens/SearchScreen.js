/*
 * File Created: Monday, 6th September 2021 10:43:52 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 10:43:52 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Card, Icon, Text } from 'react-native-elements';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const SearchScreen = (props) => {
  const search = () => {
    props.navigation.navigate('SchoolSearchResult');
  };
  return (
    <View>
      <View style={styles.subjectContainerView}>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>Physique</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="atom"
              type="font-awesome-5"
              size={40}
              color={'#d47345d8'}
            />
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>Chemistry</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="vial"
              type="font-awesome-5"
              size={40}
              color={'#45d4cdd8'}
            />
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>Mathematics</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="infinity"
              type="font-awesome-5"
              size={40}
              color={'#b345d4d8'}
            />
          </TouchableOpacity>
        </Card>

        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>History</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="hourglass-end"
              type="font-awesome-5"
              size={40}
              color={'#4679e6d8'}
            />
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>Frensh</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="language"
              type="font-awesome-5"
              size={40}
              color={'#46e67bd8'}
            />
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>Biology</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="dna"
              type="font-awesome-5"
              size={40}
              color={'#e69346d8'}
            />
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity onPress={() => search()} style={{ width: '100%' }}>
            <Card.Title>English</Card.Title>
            <Card.Divider></Card.Divider>
            <Icon
              name="language"
              type="font-awesome-5"
              size={40}
              color={'#e64646d8'}
            />
          </TouchableOpacity>
        </Card>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subjectContainerView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  card: {
    width: '40%',
  },
});
export default SearchScreen;
