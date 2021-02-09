import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions,ScrollView, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Card1 from '../../cards/card1';
import Card2 from '../../cards/card2';
import Card3 from '../../cards/card3';
import Card4 from '../../cards/card4';
import Card5 from '../../cards/card5';
export default function Footer({ navigation }) {
    return (
        <View style={styles.container}>
             <Text style={styles.title}>Popular Categories</Text>
                <ScrollView horizontal={true} style={{marginBottom: 180}}>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />
                </ScrollView>
        </View>
    );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        margin: 8
    },
    title: {
        fontSize: 34,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5
    }
});
