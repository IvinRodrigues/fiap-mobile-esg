import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        gap: 12,
        alignItems: 'center'
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: '50%'
    },
    hello: {
        color: '#00000066',
        flexDirection: 'row',
        gap: 4,
        fontSize: 32,
        fontFamily: 'Roboto_300Light'
    },
    name: {
        color: '#000000bd'
    },
    container: {
        padding: 24,
        paddingBottom: 80
    },
    data: {
        gap: 16
    },
    dataTitle: {
        fontSize: 24,
        marginTop: 32,
        opacity: .4
    },
    logout: {
        marginTop: 32
    }
})

export default styles