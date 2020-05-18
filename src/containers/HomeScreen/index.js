import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Button from '../../components/Button';

import * as appActions from '../../redux/actions/appActions';

import styles from './styles';

const HomeScreen = ({ reduxExample, setReduxExample, navigation }) => (
  <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>React Native Boilerplate.</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{`Redux Example Value: ${reduxExample}`}</Text>
        <Button onPress={() => setReduxExample('secondValue')}>
          Change value
        </Button>
      </View>
      <Button onPress={() => navigation.navigate('SecondScreen')}>
        Go to SecondScreen
      </Button>
    </View>
  </View>
);

HomeScreen.propTypes = {
  reduxExample: PropTypes.string.isRequired,
  setReduxExample: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  reduxExample: state.appReducer.toJS().reduxExample,
  errorExample: state.appReducer.toJS().errorExample,
});

const mapDispatchToProps = (dispatch) => {
  const {
    setReduxExample,
  } = bindActionCreators(appActions, dispatch);

  return {
    setReduxExample,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
