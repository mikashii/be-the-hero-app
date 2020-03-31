import React from 'react'
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native'
import { useNavigation } from '@react-navigation/native'
// import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons'
import Logo from '../../assets/logo.png'
import styles from './styles'




export default function Detail() {
    const navigation = useNavigation()
    const message = `Olá, estou entrando em contato, pois gostaria de falar que você é uma gostosa.`

    function navigateBack() {
        navigation.goBack()
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: 'Herói do caso: Nome do caso',
            recipients: 'carolina.portas@outlook.com',
            body: message
        })
    }
    function sendWhats() {
        Linking.openURL(`whatsapp://send?phone=5511951238044&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
                <TouchableOpacity>
                    <Feather name='arrow-left' size={28} color={'#e82041'} onPress={navigateBack}></Feather>
                </TouchableOpacity>
            </View>
            <View style={styles.incident}>
                <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
                <Text style={styles.incidentValue}>APAD</Text>

                <Text style={styles.incidentProperty}>Caso:</Text>
                <Text style={styles.incidentValue}>Cadelinha Atropelada</Text>

                <Text style={styles.incidentProperty}>Valor:</Text>
                <Text style={styles.incidentValue}>R$ 120,00</Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroeTitle}>Salve o dia</Text>
                <Text style={styles.heroeTitle}>Seja o herói desse caso.</Text>

                <Text style={styles.heroeDescription}>Entre em contato:</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhats}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}