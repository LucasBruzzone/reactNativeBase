import { StyleSheet } from 'react-native';

import { white } from '../../utils/constants';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
  },

  container: {
    width: '100%',
    height: '40%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  title: {
    fontSize: 28,
  },
});
