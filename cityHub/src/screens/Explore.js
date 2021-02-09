import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Carousel from '../components/sharedComponents/Carousel';
import Search from "../components/sharedComponents/Search";
import { useNavigation, useTheme } from '@react-navigation/native';
export default function Explore({ navigation }) {
    const {colors} = useTheme()
    return (
        <SafeAreaView style={{backgroundColor: colors.backGround, alignItems: 'center',width: '100%',height: '100%',}}>
            <Search />
           <Carousel />
        </SafeAreaView>
    );
}

// const width = Dimensions.get('screen').width
// const height = Dimensions.get('screen').height
// const styles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.backGround,
//         alignItems: 'center',
//         width: width,
//         height: height,
//     },
// });
