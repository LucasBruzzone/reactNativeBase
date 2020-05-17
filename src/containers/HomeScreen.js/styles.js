import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  mainContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container: {
    width: '100%',
    height: '30%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },

  title: {
    fontSize: 28,
  },

  text: (inButton = false) => ({
    fontSize: 18,
    color: inButton ? '#ffffff' : '#383B3C',
    fontWeight: inButton ? 'bold' : 'normal',
  }),

  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  button: {
    height: 50,
    marginTop: 20,
    padding: 10,
    color: '#ffffff',
    backgroundColor: '#46BAF1',
    borderRadius: 8,
    justifyContent: 'center',
  },
});
