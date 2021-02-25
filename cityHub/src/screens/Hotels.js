import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
export const scaleSize = (size, width) => (width / 375) * size;
const DATA = [
    {
        id: '1',
        title: 'Dreamz Resort',
        uri: 'https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '144, MG Road, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '21,278',
        cost: '₹3599/-'
    },
    {
        id: '2',
        title: 'Holiday Inn',
        uri: 'https://images.unsplash.com/photo-1602013414997-f8f7f52d1d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'white',
        color5: 'white',
        reviews: '10,512 Reviews',
        customers: '41,164',
        cost: '₹2199/-'
    },
    {
        id: '3',
        title: 'Hotel Gold',
        uri: 'https://images.unsplash.com/photo-1580747182325-66c1cbcdb289?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'orange',
        reviews: '9,352 Reviews',
        customers: '42,652',
        cost: '₹4199/-'
    },
    {
        id: '4',
        title: 'Hotel Palace',
        uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/75/27/32/hotel-palace-heights.jpg?w=900&h=-1&s=1',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '5,686 Reviews',
        customers: '38,125',
        cost: '₹2199/-'
    },
    {
        id: '5',
        title: 'Sky Rise Hotel',
        uri: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        address: '72, Sector-23, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'white',
        color4: 'white',
        color5: 'white',
        reviews: '8,128 Reviews',
        customers: '46,215',
        cost: '₹1199/-'
    },
    {
        id: '6',
        title: 'Hotel Pristen',
        uri: 'https://images.unsplash.com/photo-1552515721-216a4c25c5fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'orange',
        reviews: '21,176 Reviews',
        customers: '46,417',
        cost: '₹3999/-'
    },
    {
        id: '7',
        title: 'Dreamz Resort',
        uri: 'https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '144,MG Road,Rohtak,Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '28,118',
        cost: '₹4299/-'
    },
    {
        id: '8',
        title: 'Holiday Inn',
        uri: 'https://images.unsplash.com/photo-1602013414997-f8f7f52d1d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '32,879',
        cost: '₹3599/-'
    },
    {
        id: '9',
        title: 'Hotel Gold',
        uri: 'https://images.unsplash.com/photo-1580747182325-66c1cbcdb289?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '47,001',
        cost: '₹3599/-'
    },
    {
        id: '10',
        title: 'Hotel Palace',
        uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/75/27/32/hotel-palace-heights.jpg?w=900&h=-1&s=1',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '36,215',
        cost: '₹3599/-'
    },
    {
        id: '11',
        title: 'Sky Rise Hotel',
        uri: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        address: '72, Sector-23, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '36,215',
        cost: '₹3599/-'
    },
    {
        id: '12',
        title: 'Hotel Pristen',
        uri: 'https://images.unsplash.com/photo-1552515721-216a4c25c5fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        customers: '36,215',
        cost: '₹3599/-'
    },
];

const Hotels = () => {   
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    const bookColor = colors.book
    return (
        <SafeAreaView style={[styles.container,{backgroundColor: colors.headerColor}]}>
            <View >
                <View style={{ backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={{ backgroundColor: colors.headerColor, PaddingTop: 20 }}>
                        <Ionicons name="arrow-back" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
                    </TouchableOpacity>
                    <Text style={{ color: colors.txt, fontSize: 24, marginTop: 19, marginLeft: width*.35 }}>Hotels</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => (<TouchableOpacity onPress={()=> navigation.navigate('Hotel', {id: item.id, uri: item.uri,reviews:item.reviews, title: item.title, address: item.address, color1: item.color1,color2: item.color2,color3: item.color3,color4: item.color4,color5: item.color5, customers: item.customers, cost: item.cost})}>
                            <View style={{ flexDirection: 'row', borderWidth: 2, margin: 10, borderColor: colors.txt,width: buttonWidth,height:buttonWidth*.33 }}>
                                <Image source={{ uri: item.uri }} style={{ width: buttonWidth*.33, height: buttonWidth*.325 }} />
                                <View style={{ flexDirection: 'column', marginHorizontal: 10, marginTop: 10, width: buttonWidth*.60 }}>
                                    <Text style={{ color: colors.txt, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text style={{ color: colors.txt, fontSize: 18,width: buttonWidth*.65 }} ellipsizeMode="tail" numberOfLines={2}>{item.address}</Text>
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

export default Hotels;