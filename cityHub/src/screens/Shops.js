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
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        des: 'Ambience Mall,Rohtak is a shopping mall in Rohtak, Haryana, India. It contains a built-up area of 21 lakhs square feet and a retail area of 18 lakhs square feet. Most floors have a shopping area of 860 meters.'

    },
    {
        id: '2',
        title: 'MGF Metropolis Mall',
        uri: 'https://zricks.com/ImagesPostProject/200000000000204651/vdjbp.jpg',
        address: '72/6, Sector-51, Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'orange',
        reviews: '21,768 Reviews',
        des: 'MGF Metropolis Mall has been located at MG Road and is extremely close to high affluent residential complexes. This commercial project has been given an extremely futuristic look with tons of external design elements decorating the exterior. MGF Metropolis Mall is made entirely of glass and metal and, as a show of excellence in design.'
    },
    {
        id: '3',
        title: 'Banjara Market',
        uri: 'https://th.bing.com/th/id/OIP.WfafU81VfcUt244Ceqx5YwHaEK?pid=Api&rs=1',
        address: '72, Sector-56, New Palam Vihar, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '32,426 Reviews',
        des: 'Banjara market, as the name suggests is the flea market, which is in Rohtak has grabbed its attention for its home decor products. It’s the best place to shop home decor items, furniture, accessories, photo frames, bar tables, pots, stools of various sizes and a lot more at the affordable price.'
    },
    {
        id: '4',
        title: 'Vypaar Kendra',
        uri: 'https://www.zricks.com/ImagesPostProject/200000000000215661/Banner.jpg',
        address: '54/3, sector-47, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'orange',
        reviews: '9,765 Reviews',
        des: 'Being one of the oldest markets in Rohtak, Vyapar Kendra has been the go-to hub for everything affordable! From clothes, food and accessories to kitchenware, home essentials and affordable services, Vyapar Kendra has it all. Its a big market and you are bound to get lost at least once here'
    },
    {
        id: '5',
        title: 'Sahara Mall',
        uri: 'https://www.zricks.com/ImagesPostProject/200000000000216653/Sahara_Mall_Banner001.jpg',
        address: '52, Sector-46, Iffco Chowk, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'white',
        color5: 'white',
        reviews: '15,245 Reviews',
        des: 'Sahara Mall is a high-end shopping mall in the industrial city of Rohtak. One of the oldest in the city, it is a vast mall flooded with national and international brands. Visit this mall with your friends and loved ones and shop what you want. Be it clothes, shoes, accessories or electronic items, you are sure to get something of your choice.'
    },
    {
        id: '6',
        title: 'Sadar Bazaar',
        uri: 'https://kathryndarrow.files.wordpress.com/2008/07/the_world1169404200tunis_003_souq.jpg',
        address: '86/4, Sector-22,Near Ansal Plaza, Rohtak, Haryana',
        contact: 'Ph no.- 9999999999',
        color1: 'orange',
        color2: 'orange',
        color3: 'orange',
        color4: 'orange',
        color5: 'white',
        reviews: '11,276 Reviews',
        des: 'Sadar Bazaar is the largest wholesale cosmetics jewellery market of household items in Delhi, India. Like other major markets of Old Delhi, this market is very crowded and buzzes with activity.'
    },

];

const Shops = ({ props }) => {
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
                    <Text style={{ color: colors.txt, marginLeft: '36%', fontSize: 24, marginTop: 19 }}>Shops</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FlatList
                        data={DATA}
                        renderItem={
                            ({ item }) => (
                                <TouchableOpacity onPress={() => navigation.navigate("ShopsDetails", {id: item.id, uri: item.uri,reviews:item.reviews, title: item.title, address: item.address, color1: item.color1,color2: item.color2,color3: item.color3,color4: item.color4,color5: item.color5, des: item.des, contact :item.contact})}>
                                    <View style={{ flexDirection: 'row', borderWidth: 2, margin: 10, borderColor: colors.txt, width: 370, elevation: 2 }}>
                                        <Image source={{ uri: item.uri }} style={{ width: 120, height: 120 }} />
                                        <View style={{ flexDirection: 'column' }}>
                                            <Text style={{ color: colors.txt, fontSize: 20, fontWeight: 'bold' }}>{item.title}</Text>
                                            <Text style={{ color: colors.txt, fontSize: 18, width: 250 }} ellipsizeMode="tail" numberOfLines={2}>{item.address}</Text>
                                            <Text style={{ color: colors.txt, fontSize: 18 }}>{item.contact}</Text>
                                        </View>
                                        <Ionicons name="ios-bookmark-outline" size={40} color={bookColor} style={{ position: 'absolute', }} />
                                    </View>
                                </TouchableOpacity>
                            )
                        }
                        keyExtractor={item => item.id}
                    />

                </View>
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