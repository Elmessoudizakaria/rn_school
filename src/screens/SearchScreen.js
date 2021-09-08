/*
 * File Created: Monday, 6th September 2021 10:43:52 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 10:43:52 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import SubjectItem from '../components/SubjectItem';
import { chooseSubject } from '../store/actions';

const SearchScreen = (props) => {
  const search = (subject) => {
    props.chooseSubject(subject);
    props.navigation.navigate('SchoolSearchResult');
  };
  return (
    <View>
      <View style={styles.subjectContainerView}>
        {props.subjecList.map((subject) => (
          <SubjectItem
            key={subject.name}
            subjectName={subject.name}
            icon={subject.icon}
            iconColor={subject.color}
            search={search}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  subjectContainerView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: '100%',
  },
  card: {
    width: '40%',
  },
});
const mapStateToProps = ({ search }) => {
  return {
    subjecList: search.subjectsList,
  };
};
export default connect(mapStateToProps, { chooseSubject })(SearchScreen);
