import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

import { useNavigation } from "@react-navigation/native";

const Favorite = () => {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
        <Text>Favorite Screen</Text>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
                <Text style={{color: '#111'}}>Go back Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button: {
        borderRadius: 10,
        backgroundColor: '#abcdef',
        padding: 10,
    }
})

export default Favorite;
