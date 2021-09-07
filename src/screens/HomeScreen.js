/*
 * File Created: Monday, 6th September 2021 9:45:35 am
 * Author: El Messoudi Zakaria (you@you.you)
 * -----
 * Last Modified: Monday, 6th September 2021 9:45:36 am
 * Modified By: El Messoudi Zakaria (you@you.you>)
 * -----
 */
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { connect } from 'react-redux';
import { chooseLevel } from '../store/actions';

const HomeScreen = (props) => {
  const serach = () => {
    props.navigation.navigate('SchoolSearch');
  };
  const changeLevel = (level) => {
    props.chooseLevel(level);
  };
  return (
    <View>
      <View style={styles.upperPage}>
        <Text h3 style={styles.title}>
          School Helper
        </Text>
        <Icon
          name="university"
          type="font-awesome"
          size={150}
          color={'#fff'}
          style={{ marginTop: 40 }}
        />
      </View>
      <View style={styles.lowerPage}>
        <Text h4 style={styles.levelTitle}>
          Choose level
        </Text>
        <View style={styles.levelView}>
          <TouchableOpacity
            onPress={() => changeLevel('secondary')}
            style={{ width: '20%', height: 50, zIndex: 1 }}
          >
            <View
              style={[
                styles.levelContainer,
                styles.secondary,
                props.level === 'secondary'
                  ? styles.selectedLevel
                  : styles.nonSelectedLevel,
              ]}
            ></View>
            <Text style={styles.levelLabel}>College</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => changeLevel('hightSchool')}
            style={{ width: '20%', height: 50, zIndex: 1 }}
          >
            <View
              style={[
                styles.levelContainer,
                styles.highSchool,
                props.level === 'hightSchool'
                  ? styles.selectedLevel
                  : styles.nonSelectedLevel,
              ]}
            ></View>
            <Text style={styles.levelLabel}>Lycée</Text>
          </TouchableOpacity>
        </View>
        <Button
          title="check"
          type="outline"
          buttonStyle={styles.checkButton}
          containerStyle={styles.buttonContainer}
          titleStyle={styles.checkButtonLabel}
          onPress={() => serach()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  upperPage: {
    backgroundColor: '#284d4dd8',
    height: 350,
    borderBottomEndRadius: 150,
    borderBottomStartRadius: 150,
  },
  lowerPage: {
    paddingVertical: 20,
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    marginVertical: 14,
  },
  levelView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginBottom: '20%',
  },
  levelContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  levelTitle: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: '700',
  },
  checkButton: {
    marginTop: 25,
    width: '60%',
    marginLeft: '20%',
    borderColor: '#062c2cd8',
    borderWidth: 2,
    borderRadius: 10,
  },
  checkButtonLabel: {
    color: '#062c2cd8',
    fontWeight: 'bold',
    textTransform: 'capitalize',
    // fontFamily:'GoodFeelingSans'
  },
  buttonContainer: {
    width: '100%',
  },
  secondary: { backgroundColor: '#94db82d8' },
  highSchool: { backgroundColor: '#828fdbd8' },
  prepaClasses: { backgroundColor: '#db9e82d8' },
  selectedLevel: {
    borderWidth: 2,
    borderColor: '#885946',
  },
  nonSelectedLevel: {
    borderWidth: 0,
    borderColor: 'black',
  },
  levelLabel: {
    // textAlign: 'center',
    fontSize: 17,
    // fontFamily: 'TimeNewRoman',
    fontWeight: '700',
    paddingTop: 5,
    color: '#062c2cd8',
    textTransform: 'capitalize',
  },
});
const mapStateToProps = ({ search }) => {
  return {
    level: search.level,
  };
};
export default connect(mapStateToProps, { chooseLevel })(HomeScreen);
