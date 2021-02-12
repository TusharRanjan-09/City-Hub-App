import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import Carousel from '../components/sharedComponents/Carousel';
import Search from "../components/sharedComponents/Search";
import { useNavigation, useTheme } from '@react-navigation/native';
export default function Explore() {
    const {colors} = useTheme()
    const Width = Dimensions.get('screen').width
    const Height = Dimensions.get('screen').height
    return (
        <SafeAreaView style={{backgroundColor: colors.backGround, alignItems: 'center',width: Width,height: Height, paddingBottom:105}}>
            <Search />
           <Carousel />
        </SafeAreaView>
    );
}

