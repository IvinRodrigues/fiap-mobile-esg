import React, { useEffect, useState } from "react"
import { Button, Icon, TextInput, IconButton, Stack, Snackbar } from "@react-native-material/core";
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import styles from "./styles";

import Menu from '../Menu'

import { database } from "../../firebase"
import { addDoc, collection, doc, getDocs, setDoc } from "firebase/firestore"
import { ScrollView } from "react-native-web";

export default function Home({ navigation }) {

    const ocorrenciasCollection = collection(database, "ocorrencias")
    const [canReload, setCanReload] = useState(true)
    const [ocorrencias, setOcorrencias] = useState([])
    const [dialogVisible, setDialogVisible] = useState(false)
    const [viewDialogVisible, setViewDialogVisible] = useState(false)
    const [formError, setFormError] = useState(false)
    const [currentOcorrencia, setCurrentOcorrencia] = useState({})
    const [pictureForm, setPictureForm] = useState('')
    const [titleForm, setTitleForm] = useState('')
    const [locationForm, setLocationForm] = useState('')
    const [typeForm, setTypeForm] = useState('')
    const [descriptionForm, setDescriptionForm] = useState('')
    let createForm = {
        picture: pictureForm,
        title: titleForm,
        location: locationForm,
        type: typeForm,
        description: descriptionForm,
        author: 'Mobile User'
    }

    const renderItem = ({ item }) => (

        <TouchableOpacity style={styles.item} onPress={() => { setViewDialogVisible(true); setCurrentOcorrencia(item) }}>
            <Image style={styles.icon} source={require('./../../assets/fire.png')} />
            <Image style={styles.picture} source={item.picture} />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.author}>Postado por: <Text style={styles.bold}>{item.author}</Text></Text>
            </View>
        </TouchableOpacity>

    )

    async function get() {

        const dataTeste = await getDocs(ocorrenciasCollection)

        let ocorrenciasTeste = []

        dataTeste.docs.map(doc => ocorrenciasTeste.push(doc.data()))

        setOcorrencias(ocorrenciasTeste)

    }

    async function post() {

        if (Object.values(createForm).every(item => item !== '')) {

            await addDoc(collection(database, "ocorrencias"), createForm)

            setDialogVisible(!dialogVisible)
            setCanReload(!canReload)

        } else {

            setFormError(true)

            setTimeout(() => setFormError(false), 2000)

        }

    }

    useEffect(() => {

        get()

    }, [canReload])

    return (

        <View style={styles.wrapper}>

            {

                formError && (

                    <Snackbar
                        message="Preencha todos os campos"
                        style={{ position: "absolute", backgroundColor: '#D47575', start: 16, end: 16, top: 24, zIndex: 100 }}
                    />

                )

            }

            <ScrollView style={styles.containerScroll}>

                <Text style={styles.titleScreen}>Ocorrencias</Text>

                <FlatList
                    data={ocorrencias}
                    renderItem={renderItem}
                    keyExtractor={(ocorrencia, index) => index}
                />

            </ScrollView>

            <Menu navigation={navigation} isHome={true} openDialog={boolean => setDialogVisible(boolean)} {...{ navigation }} />

            {

                dialogVisible && (

                    <View style={styles.backdrop}>
                        <View style={styles.dialog}>
                            <View style={styles.dialogHeader}>
                                <Text style={styles.dialogTitle}>Novo incidente</Text>
                                <Icon style={styles.dialogIcon} name="close" onPress={() => setDialogVisible(false)} size={24} color="#00000033" />
                            </View>
                            <View style={styles.dialogContent}>
                                <TextInput label="Imagem" value={pictureForm} onChange={event => { setPictureForm(event.target.value) }} variant="standard" />
                                <TextInput label="Título" value={titleForm} onChange={event => { setTitleForm(event.target.value) }} variant="standard" />
                                <TextInput label="Localização" value={locationForm} onChange={event => { setLocationForm(event.target.value) }} variant="standard" />
                                <TextInput label="Tipo" value={typeForm} onChange={event => { setTypeForm(event.target.value) }} variant="standard" />
                                <TextInput label="Descrição" value={descriptionForm} onChange={event => { setDescriptionForm(event.target.value) }} variant="standard" />
                                <Button style={styles.successButton} color="#82D475" tintColor="white" title="Salvar" onPress={() => post()} />
                            </View>
                        </View>
                    </View>

                )

            }

            {

                viewDialogVisible && (

                    <View style={styles.backdrop}>
                        <View style={styles.dialog}>
                            <View style={styles.dialogHeader}>
                                <Text style={styles.dialogTitle}>Incidente registrado</Text>
                                <Icon style={styles.dialogIcon} name="close" onPress={() => setViewDialogVisible(false)} size={24} color="#00000033" />
                            </View>
                            <View style={[styles.dialogContent, styles.previewContent]}>
                                <Image style={styles.picture} source={currentOcorrencia.picture} />
                                <Text style={styles.author}>Postado por: <Text style={styles.bold}>{currentOcorrencia.author}</Text></Text>
                                <Text style={styles.title}>{currentOcorrencia.title}</Text>
                                <Text style={styles.location}>{currentOcorrencia.location}</Text>
                                <Text style={styles.description}>{currentOcorrencia.description}</Text>
                            </View>
                        </View>
                    </View>

                )

            }

        </View>

    )

}