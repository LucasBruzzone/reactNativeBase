import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import Button from '../../components/Button';

import styles from './styles';

const SecondScreen = ({ navigation }) => (
  <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Text style={styles.title}>SecondScreen</Text>
      <Button onPress={() => navigation.goBack()}>
        Go Back
      </Button>
    </View>
  </View>
);

SecondScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default SecondScreen;
