import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,SafeAreaView, Text, View, TouchableOpacity, TextInput, ImageBackground, ScrollView, Dimensions } from 'react-native';
import MiniCards from '../components/MiniCards';
import MiniCards2 from '../components/MiniCards2';

import Card1 from '../cards/card1';
import Card2 from '../cards/card2';
import Card3 from '../cards/card3';
import Card4 from '../cards/card4';
import Card5 from '../cards/card5';
import Category from '../components/sharedComponents/categoryCarousel';
import OfferBanner from '../components/sharedComponents/offerBanner';
import CardCarousel from '../components/sharedComponents/cardCarousel';
import CardItems from '../components/sharedComponents/cardItems';
import IconCategory from '../components/sharedComponents/IconCategory';
import Search from "../components/sharedComponents/Search";
export default function Explore({ navigation }) {
    return (
        <SafeAreaView style={styles.container}>
            <Search />
            <ScrollView>
                <Text style={styles.title}>Categories</Text>
                <ScrollView horizontal={true}>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </ScrollView>
                <Text style={styles.title}>Offers</Text>
                <ScrollView horizontal={true}>
                    <OfferBanner />
                    <OfferBanner />
                    <OfferBanner />
                    <OfferBanner />
                </ScrollView>
                <Text style={styles.title}>Our Collections</Text>
                <ScrollView horizontal={true}>
                    <CardCarousel/>
                    <CardCarousel/>
                    <CardCarousel/>
                    <CardCarousel/>
                </ScrollView>
                <Text style={styles.title}>Card Items</Text>
                <ScrollView horizontal={true}>
                    <CardItems/>
                    <CardItems/>
                    <CardItems/>
                    <CardItems/>
                </ScrollView>
                <Text style={styles.title}>Icon Categories</Text>
                <ScrollView horizontal={true}>
                  <IconCategory/>
                  <IconCategory/>
                  <IconCategory/>
                  <IconCategory/>
                </ScrollView>
                <Text style={styles.title}>Popular Categories</Text>
                <ScrollView horizontal={true} style={{marginBottom: 101}}>
                    <Card1 />
                    <Card2 />
                    <Card3 />
                    <Card4 />
                    <Card5 />
                </ScrollView>
              
            </ScrollView>
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
    title: {
        fontSize: 34,
        color: 'black',
        fontWeight: 'bold',
        paddingHorizontal: 20,
        paddingTop: 5,
        paddingBottom: 5
    }
});
