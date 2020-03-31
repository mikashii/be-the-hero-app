import React, { useEffect, useState } from 'react'
import { View, Text, Image, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../assets/logo.png'
import styles from './styles'
import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import api from '../../services/api'


export default function Incidents() {
    const natigation = useNavigation()
    const [incident, setIncidents] = useState([])
    const [total, setTotal] = useState(0)


    function navigationToDetail() {
        natigation.navigate('Detail')
    }
    async function loadIncidents() {
        const response = await api.get('incidents')
        setIncidents(response.data)
        setTotal(response.headers['x-total-count'])
    }
    useEffect(() => {
        loadIncidents
    }, [])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo} />
                <Text style={styles.headerText}>Total de <Text style={styles.haederTextBold}> {total} casos</Text>.</Text>
            </View>
            <Text style={styles.title}>Bem vindo!</Text>
            <Text style={styles.description}>Escolha um dos casos abaixo e salve o dia</Text>

            {/**
             * 
             * 
             */}
            <FlatList
                data={incidents}
                keyExtractor={incident => String(incident.id)}
                showsVerticalScrollIndicator={false}
                style={styles.incidentList}
                renderItem={({ item: incident }) => (
                    <View style={styles.incident}>
                        <Text style={styles.incidentProperty}>ONG:</Text>
                        <Text style={styles.incidentValue}>{incident.name}</Text>

                        <Text style={styles.incidentProperty}>Caso:</Text>
                        <Text style={styles.incidentValue}>{incident.title}</Text>

                        <Text style={styles.incidentProperty}>Valor:</Text>
                        <Text style={styles.incidentValue}>{Intl.NumberFormat('pt-BR', {
                            style: 'currency',
                            currency: 'BRL'
                        }).format(incident.value)}</Text>

                        <TouchableOpacity style={styles.detailsButton} onPress={navigationToDetail}>
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name='arrow-right' size={16} color="#e02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>

    )
}