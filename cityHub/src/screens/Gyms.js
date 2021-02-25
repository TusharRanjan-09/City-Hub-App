import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Touchable, Dimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const scaleSize = (size, width) => (width / 375) * size;
const DATA = [
    {
        id: '1',
        title: 'Fitness Club',
        uri: 'https://images.unsplash.com/photo-1607172611142-b800d035dc4b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '144,MG Road,Rohtak,Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '2',
        title: 'Gold Gym',
        uri: 'https://images.unsplash.com/photo-1578874691223-64558a3ca096?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '3',
        title: 'Fitness World',
        uri: 'https://images.unsplash.com/photo-1543975200-8e313fb04fc7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '4',
        title: 'Raghav Gym',
        uri: 'https://images.unsplash.com/photo-1576511420003-e33641629f94?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '5',
        title: 'Anytime Fitness',
        uri: 'https://images.unsplash.com/photo-1590240092097-775ca54bd2b5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=967&q=80',
        address: '72, Sector-23, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '6',
        title: 'Health freak',
        uri: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    
];

const Gyms = () => {
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    const bookColor = colors.book
    const Width = Dimensions.get('screen').width
    const Height = Dimensions.get('screen').height
    return (
        <SafeAreaView style={[styles.container,{backgroundColor: colors.headerColor}]}>
            <View >
                <View style={{backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center',}}>
                <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={{backgroundColor : colors.headerColor, PaddingTop:20}}>
                    <Ionicons name="arrow-back" size={28} color={myColor} style={{ paddingLeft: 2 , marginTop: 22}} />
                </TouchableOpacity>
                <Text style={{color: colors.txt, marginLeft : '36%', fontSize: 24, marginTop: 19}}>Gyms</Text>
                </View>              
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => (
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', borderWidth: 2, margin: 10, borderColor: colors.txt, elevation: 2,width: Width*.95,height:Height*.15 }}>
                            <Image source={{ uri: item.uri }} style={{ width: Width*.29, height: Height*.145 }} />
                            <View style={{ flexDirection: 'column', marginHorizontal: 10, marginTop: 10 }}>
                                <Text style={{ color: colors.txt, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: colors.txt, fontSize: 18, width: Width*.65 }} ellipsizeMode="tail" numberOfLines={2}>{item.address}</Text>
                                <Text style={{ color: colors.txt, fontSize: 18 }}>{item.contact}</Text>
                            </View>
                            {/* <Ionicons name="ios-bookmark-outline" size={40} color={bookColor} style={{position: 'absolute', marginLeft:330}} /> */}
                            </View>
                            </TouchableOpacity>
                            
                       
                        )
                    }
                    keyExtractor={item => item.id}
                />
            </View>
        </SafeAreaView>
    );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(350, width)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(305, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
    container: {
        width:width,
        height: height,
        alignItems: 'center'
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default Gyms;