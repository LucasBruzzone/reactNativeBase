import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as appActions from '../../redux/actions/appActions';

import styles from './styles';

const HomeScreen = ({ reduxExample, setReduxExample }) => (
  <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>React Native Boilerplate.</Text>
      <View style={styles.buttonContainer}>
        <Text style={styles.text()}>{`Redux Example Value: ${reduxExample}`}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setReduxExample('secondValue')}
        >
          <Text style={styles.text(true)}>Change value</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

HomeScreen.propTypes = {
  reduxExample: PropTypes.string.isRequired,
  setReduxExample: PropTypes.func.isRequired,
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
