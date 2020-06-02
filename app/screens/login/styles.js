import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 30,
    paddingTop: 60,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
  socialButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: '#f0f2f4',
  },
  title: {
    fontSize: 35,
    color: '#153148',
    fontFamily: 'Avenir',
    fontWeight: '800',
  },
  subtitle: {
    fontSize: 15,
    color: '#95a9b5',
    fontFamily: 'Avenir',
    fontWeight: '600',
    marginBottom: 80,
  },
  littleLink: {
    color: '#153148',
    fontWeight: '600',
  },
  
})

export default styles;