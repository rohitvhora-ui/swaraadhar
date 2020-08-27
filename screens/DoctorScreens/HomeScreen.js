import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PatientsList from './../../components/PatientsList';
import { patients } from '../../json/patients';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const HomeScreen = ({navigation}) => {
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.label}>Below is the list of your patients</Text>
                {/* <Text style={styles.icon}>
                    <FontAwesome name="plus" color="cadetblue" size={40}/>
                </Text> */}
            </View>
            <PatientsList patients={patients} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 5
    },
    header: {
        marginVertical: 20,
        paddingHorizontal: 30
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        color: '#555'
    },
    icon: {
        position: 'absolute',
        right: 30,
        marginTop: -15
    }
})

export default HomeScreen;