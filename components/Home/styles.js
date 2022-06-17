import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 24
  },
  containerScroll: {
    padding: 24,
    paddingBottom: 80
  },
  item: {
    backgroundColor: '#e3e3e3',
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden'
  },
  titleScreen: {
    fontSize: 32,
    fontFamily: 'Roboto_300Light',
    opacity: .8,
    marginTop: 24
  },
  icon: {
    width: 42,
    height: 42,
    position: 'absolute',
    zIndex: 1,
    top: 12,
    right: 12
  },
  picture: {
    resizeMode: "cover",
    width: '100%',
    height: 200,
    opacity: .8
  },
  content: {
    padding: 12,
    gap: 6
  },
  title: {
    opacity: .8,
    fontSize: 20,
    fontFamily: 'Roboto_400Regular'
  },
  author: {
    opacity: .6,
    fontFamily: 'Roboto_400Regular'
  },
  bold: {
    fontFamily: 'Roboto_500Medium'
  },
  backdrop: {
    backgroundColor: '#00000080',
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100%',
  },
  dialog: {
    height: '80vh',
    backgroundColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    borderRadius: 12
  },
  dialogContent: {
    gap: 24
  },
  dialogHeader: {
    width: '100%',
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  dialogTitle: {
    color: '#00000066',
    fontSize: 24,
    fontFamily: 'Roboto_300Light'
  },
  dialogContent: {
    padding: 24
  },
  previewContent: {
    gap: 12
  },
  successButton: {
    marginTop: 12
  },
  location: {
    color: '#00000066'
  },
  description: {
    color: '#00000099',
    lineHeight: 20,
    fontSize: 16
  }
})

export default styles