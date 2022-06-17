import { Text, Image, View } from "react-native"
import { Button } from "@react-native-material/core"
import styles from "./styles"

import * as Google from "expo-auth-session/providers/google";

export default function Login({ navigation }) {

    function authGoogle() {

        navigation.navigate('Home')

    }

    return(
        <View style={styles.container}>
            <Image style={styles.logo} source={require('./../../assets/logo.png')}/>
            <Text style={styles.title}>Change the World!</Text>
            <Text style={styles.subtitle}>Realize o seu login através de sua conta Google e comece a transformar o mundo em um lugar melhor!</Text>
            <Button style={styles.loginButton} color="#82D475" tintColor="white" title="Prosseguir" onPress={() => authGoogle()}/>
        </View>
    )

}