import { Text, View, Image } from "react-native"
import Menu from "./../Menu"

import { TextInput, Button } from "@react-native-material/core";
import styles from "./styles";
import { ScrollView } from "react-native-web";

export default function Profile({ navigation }) {

    return (

        <View style={styles.wrapper}>

            <ScrollView style={styles.container}>

                <View style={styles.header}>
                    <Image style={styles.image} source={{uri: 'https://picsum.photos/500'}} />
                    <Text style={styles.hello}>Olá, <Text style={styles.name}>Mobile User</Text></Text>
                </View>

                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Dados pessoais</Text>
                    <TextInput editable={false} label="Nome" variant="standard" value="Mobile User" />
                    <TextInput editable={false} label="E-mail" variant="standard" value="mobileuser@test.com" />
                    <TextInput editable={false} label="Celular" variant="standard" value="(11)99242-5202" />
                </View>

                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Satus</Text>
                    <TextInput editable={false} label="Titulo" variant="standard" value="Protetor da Natureza" />
                    <TextInput editable={false} label="Incidentes registrados" variant="standard" value="27" />
                    <TextInput editable={false} label="Incidentes denunciados" variant="standard" value="3" />
                </View>

                <Button style={styles.logout} color="#D47575" tintColor="white" title="Sair" onPress={() => navigation.navigate('Login')}/>

            </ScrollView>

            <Menu navigation={navigation} isHome={false} openDialog={boolean => setDialogVisible(boolean)} {...{ navigation }} />

        </View>

    )

}