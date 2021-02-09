import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions,ScrollView, ImageBackground, Image } from 'react-native';
import Card1 from '../../cards/card1';
import Card2 from '../../cards/card2';
import Card3 from '../../cards/card3';
import Card4 from '../../cards/card4';
import Card5 from '../../cards/card5';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function Footer({ navigation }) {
    const {colors} = useTheme()
    return (
        <View style={styles.container}>
             <Text style={{fontSize: 34,color: colors.txt,fontWeight: 'bold',paddingHorizontal: 20,paddingTop: 5,paddingBottom: 5}}>Popular Categories</Text>
                <ScrollView horizontal={true} style={{marginBottom: 95}}>
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
