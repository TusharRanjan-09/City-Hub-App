import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DATA = [
    {
        id: '1',
        title: 'Dreamz Resort',
        uri: 'https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '144,MG Road,Rohtak,Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '2',
        title: 'Holiday Inn',
        uri: 'https://images.unsplash.com/photo-1602013414997-f8f7f52d1d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '3',
        title: 'Hotel Gold',
        uri: 'https://images.unsplash.com/photo-1580747182325-66c1cbcdb289?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '4',
        title: 'Hotel Palace',
        uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/75/27/32/hotel-palace-heights.jpg?w=900&h=-1&s=1',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '5',
        title: 'Sky Rise Hotel',
        uri: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        address: '72, Sector-23, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '6',
        title: 'Hotel Pristen',
        uri: 'https://images.unsplash.com/photo-1552515721-216a4c25c5fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '7',
        title: 'Dreamz Resort',
        uri: 'https://images.unsplash.com/photo-1580835845971-a393b73bf370?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '144,MG Road,Rohtak,Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '8',
        title: 'Holiday Inn',
        uri: 'https://images.unsplash.com/photo-1602013414997-f8f7f52d1d50?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '9',
        title: 'Hotel Gold',
        uri: 'https://images.unsplash.com/photo-1580747182325-66c1cbcdb289?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '10',
        title: 'Hotel Palace',
        uri: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/04/75/27/32/hotel-palace-heights.jpg?w=900&h=-1&s=1',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '11',
        title: 'Sky Rise Hotel',
        uri: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80',
        address: '72, Sector-23, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '12',
        title: 'Hotel Pristen',
        uri: 'https://images.unsplash.com/photo-1552515721-216a4c25c5fb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
];

const Hotels = () => {
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    const bookColor = colors.book
    return (
        <SafeAreaView style={{ backgroundColor: colors.headerColor }}>
            <View >
                <View style={{ backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center', }}>
                    <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={{ backgroundColor: colors.headerColor, PaddingTop: 20 }}>
                        <Ionicons name="arrow-back" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
                    </TouchableOpacity>
                    <Text style={{ color: colors.txt, marginLeft: '36%', fontSize: 24, marginTop: 19 }}>Hotels</Text>
                </View>
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => (<TouchableOpacity>
                            <View style={{ flexDirection: 'row', borderWidth: 2, margin: 10, borderColor: colors.txt }}>
                                <Image source={{ uri: item.uri }} style={{ width: 120, height: 120 }} />
                                <View style={{ flexDirection: 'column', marginHorizontal: 10, marginTop: 10 }}>
                                    <Text style={{ color: colors.txt, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                    <Text style={{ color: colors.txt, fontSize: 18, width: 250 }} ellipsizeMode="tail" numberOfLines={2}>{item.address}</Text>
                                    <Text style={{ color: colors.txt, fontSize: 18 }}>{item.contact}</Text>
                                </View>
                                <Ionicons name="ios-bookmark-outline" size={40} color={bookColor} style={{position: 'absolute', marginLeft:330}} />
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
const styles = StyleSheet.create({
    container: {
        flex: 1,
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