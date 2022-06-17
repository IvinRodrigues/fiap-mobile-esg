import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    menu: {
    backgroundColor: '#F5F5F5',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    gap: 24
  },
  createButton: {
    backgroundColor: '#82D475',
    position: 'relative',
    top: -20,
  },
  createButtonIcon: {
    color: 'white',
    fontSize: 32,
  },
  sideButton: {
    fontSize: 32,
    color: '#0000001f'
  },
  hidden: {
    height: 0
  }
})

export default styles