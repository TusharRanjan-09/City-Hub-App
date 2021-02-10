import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity, Touchable } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
const DATA = [
    {
        id: '1',
        title: 'Ambience Mall',
        uri: 'https://cabgurgaon.files.wordpress.com/2013/06/gurgaon-ambience-mall.jpg',
        address: '144,MG Road,Rohtak,Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '2',
        title: 'MGF Metropolis Mall',
        uri: 'https://zricks.com/ImagesPostProject/200000000000204651/vdjbp.jpg',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '3',
        title: 'Banjara Market',
        uri: 'https://th.bing.com/th/id/OIP.WfafU81VfcUt244Ceqx5YwHaEK?pid=Api&rs=1',
        address: '72, Sector-23, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '4',
        title: 'Vypaar Kendra',
        uri: 'https://www.zricks.com/ImagesPostProject/200000000000215661/Banner.jpg',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '5',
        title: 'Sahara Mall',
        uri: 'https://www.zricks.com/ImagesPostProject/200000000000216653/Sahara_Mall_Banner001.jpg',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    {
        id: '6',
        title: 'Sadar Bazaar',
        uri: 'https://kathryndarrow.files.wordpress.com/2008/07/the_world1169404200tunis_003_souq.jpg',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999'
    },
    
];

const Shops = () => {
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    return (
        <SafeAreaView style={{backgroundColor: colors.headerColor}}>
            <View >
                <View style={{backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center',}}>
                <TouchableOpacity onPress={() => navigation.navigate("Explore")} style={{backgroundColor : colors.headerColor, PaddingTop:20}}>
                    <Ionicons name="arrow-back" size={28} color={myColor} style={{ paddingLeft: 2 , marginTop: 22}} />
                </TouchableOpacity>
                <Text style={{color: colors.txt, marginLeft : '36%', fontSize: 24, marginTop: 19}}>Shops</Text>
                </View>              
                <FlatList
                    data={DATA}
                    renderItem={
                        ({ item }) => (
                            <TouchableOpacity>
                                <View style={{ flexDirection: 'row', borderWidth: 2, margin: 10, borderColor: colors.txt, elevation: 2 }}>
                            <Image source={{ uri: item.uri }} style={{ width: 120, height: 120 }} />
                            <View style={{ flexDirection: 'column', marginHorizontal: 10, marginTop: 10 }}>
                                <Text style={{ color: colors.txt, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                <Text style={{ color: colors.txt, fontSize: 18, width: 250 }} ellipsizeMode="tail" numberOfLines={2}>{item.address}</Text>
                                <Text style={{ color: colors.txt, fontSize: 18 }}>{item.contact}</Text>
                            </View>
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

export default Shops;