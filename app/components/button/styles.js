import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#194462',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },  
  label: {
    fontSize: 16,
    textTransform: 'uppercase',
    color: '#ffffff',
    fontWeight: '800',
    fontFamily: 'Avenir',
  },
  arrow: {
    color: '#ffffff',
    fontSize: 25,
  },  
});

export default styles;