import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions,ScrollView, ImageBackground, Image } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Category from '../sharedComponents/categoryCarousel';
import OfferBanner from '../sharedComponents/offerBanner';
import CardCarousel from '../sharedComponents/cardCarousel';
import CardItems from '../sharedComponents/cardItems';
import IconCategory from '../sharedComponents/IconCategory';
import Footer from '../sharedComponents/Footer';
import { Colors } from 'react-native/Libraries/NewAppScreen';
export default function Carousel({navigation}) {
    const {colors} = useTheme()
  return (
    <View style={styles.container}>
        <ScrollView>
                <Text style={{fontSize: 32,color: colors.txt,fontWeight: 'bold',paddingHorizontal: 20,paddingTop: 5,paddingBottom: 5}}>Categories</Text>
                <ScrollView horizontal={true}>
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                    <Category />
                </ScrollView>
            
                <Text style={{fontSize: 32,color: colors.txt,fontWeight: 'bold',paddingHorizontal: 20,paddingTop: 5,paddingBottom: 5}}>Card Items</Text>
                <ScrollView horizontal={true}>
                    <CardItems/>
                    <CardItems/>
                    <CardItems/>
                    <CardItems/>
                </ScrollView>
                <Text style={{fontSize: 32,color: colors.txt,fontWeight: 'bold',paddingHorizontal: 20,paddingTop: 5,paddingBottom: 5}}>Icon Categories</Text>
                <ScrollView horizontal={true}>
                  <IconCategory/>
                  <IconCategory/>
                  <IconCategory/>
                  <IconCategory/>
                  <IconCategory/>
                </ScrollView>
                <Text style={{fontSize: 32,color: colors.txt,fontWeight: 'bold',paddingHorizontal: 20,paddingTop: 5,paddingBottom: 5}}>Offers</Text>
                <ScrollView horizontal={true}>
                    <OfferBanner />
                    <OfferBanner />
                    <OfferBanner />
                    <OfferBanner />
                </ScrollView>
                <Text style={{fontSize: 32,color: colors.txt,fontWeight: 'bold',paddingHorizontal: 20,paddingTop: 5,paddingBottom: 5}}>Our Collections</Text>
                <ScrollView horizontal={true}>
                    <CardCarousel/>
                    <CardCarousel/>
                    <CardCarousel/>
                    <CardCarousel/>
                </ScrollView>
               <Footer/>
              
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
