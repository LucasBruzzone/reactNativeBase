import { StyleSheet } from 'react-native';

import { white, blue } from '../../utils/constants';

export default StyleSheet.create({
  text: {
    fontSize: 18,
    color: white,
    fontWeight: 'bold',
  },

  button: {
    height: 50,
    marginTop: 20,
    padding: 15,
    color: white,
    backgroundColor: blue,
    borderRadius: 8,
    justifyContent: 'center',
  },
});
