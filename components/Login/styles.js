import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100vh',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 12,
        textAlign: 'center',
        padding: 24
    },
    title: {
        color: '#84D478',
        fontWeight: '900',
        fontSize: 32,
        fontFamily: 'Roboto_900Black,'
    },
    subtitle: {
        fontSize: 16,
        opacity: .4
    },
    logo: {
        width: 300,
        height: 345
    },
    loginButton: {
        width: '100%',
        marginTop: 24
    }
})

export default styles