import { Icon, IconButton } from "@react-native-material/core";
import { View } from 'react-native'
import styles from './styles'

export default function Menu(props) {

    let stylesCreateButton = [styles.createButton]

    if(!props.isHome) {

        stylesCreateButton.push(styles.hidden)

    }

    return (

        <View style={styles.menu}>
            <IconButton onPress={() => props.navigation.navigate('Home')} style={styles.sideButton} icon={props => <Icon name="home" style={styles.sideButton} />} />
            <IconButton onPress={() => props.openDialog(true)} style={stylesCreateButton} icon={props => <Icon name="plus" style={styles.createButtonIcon} />} />
            <IconButton onPress={() => props.navigation.navigate('Profile')} style={styles.sideButton} icon={props => <Icon name="account" style={styles.sideButton} />} />
        </View>

    )

}