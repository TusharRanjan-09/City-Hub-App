import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import MiniCards from '../components/MiniCards';
import MiniCards2 from '../components/MiniCards2';

import Card1 from '../cards/card1';
import Card2 from '../cards/card2';
import Card3 from '../cards/card3';
import Card4 from '../cards/card4';
import Card5 from '../cards/card5';

import Search from "../components/Search";
export default function Explore({ navigation }) {
    return (
        <View style={styles.container}>
            <Search />
            <ScrollView>
                <Text style={styles.title}>Discover featured listings</Text>
                <ScrollView horizontal={true}>
                    <MiniCards />
                    <MiniCards2 />
                    <MiniCards />
                    <MiniCards2 />
                    <MiniCards />
                    <MiniCards2 />
                </ScrollView>
                <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', padding: 10, marginLeft: 5 }}>Popular Categories</Text>
                <ScrollView horizontal={true}>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />

                </ScrollView>

            </ScrollView>
        </View>
    );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        width: width,
        height: height,
    },
    title: {
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 10
    }
});
