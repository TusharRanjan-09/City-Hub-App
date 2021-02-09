import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Carousel from '../components/sharedComponents/Carousel';
import Search from "../components/sharedComponents/Search";
export default function Explore({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Search />
           <Carousel />
        </SafeAreaView>
    );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        width: width,
        height: height,
    },
});
