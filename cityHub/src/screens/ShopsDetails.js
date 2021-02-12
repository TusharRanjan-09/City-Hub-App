import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Communications from 'react-native-communications';

const ShopsDetails = (props) => {
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    const bookColor = colors.gps
    const Width = Dimensions.get('screen').width
    const Height = Dimensions.get('screen').height
    //    console.warn(props)
    return (
        <SafeAreaView style={{ backgroundColor: colors.headerColor, flex: 1,height: Height, width: Width   }}>
            <View style={{ backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate("Shops")} style={{ backgroundColor: colors.headerColor, PaddingTop: 20 }}>
                    <Ionicons name="arrow-back" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.txt, marginLeft: '27%', fontSize: 24, marginTop: 19 }}>Shops Details</Text>
            </View>
            <View style={{ flex: 3, elevation: 50, alignItems: 'center' }}>
                <Image source={{ uri: props.route.params.uri }} style={{ width: Width*.95, height: Height*.43, borderRadius: 10 }} />
            </View>
            <View style={{ flex: 2.5, backgroundColor: colors.details, padding: 10,paddingBottom: 15}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="location-pin" size={28} color={bookColor} />
                    <Text style={{ fontSize: 16, color: colors.txt }}>{props.route.params.address}</Text>
                </View>
                <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                    <Text style={{ color: colors.txt, fontSize: 25, fontWeight: 'bold', marginBottom: 5 }}>{props.route.params.title}</Text>
                    {/* <Text style={{ color: colors.txt, fontSize: 17.5,marginLeft:10, fontWeight: 'bold', marginBottom: 5 }}>{props.route.params.contact}</Text> */}
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={28} color={props.route.params.color1} />
                    <AntDesign name="star" size={28} color={props.route.params.color2} />
                    <AntDesign name="star" size={28} color={props.route.params.color3} />
                    <AntDesign name="star" size={28} color={props.route.params.color4} />
                    <AntDesign name="star" size={28} color={props.route.params.color5} />
                    <Text style={{ color: colors.txt, marginHorizontal: 10 }}>{props.route.params.reviews}</Text>
                </View>
                <Text style={{ fontSize: 20, color: colors.txt, fontWeight: 'bold' }}>Description</Text>
                <Text style={{ fontSize: 17, color: colors.txt }} ellipsizeMode="tail" numberOfLines={5}>{props.route.params.des}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                    <TouchableOpacity style={{ marginLeft: 10, elevation: 5, width: Width*.45, height: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, margin: 5 }}>Get Direction</Text>
                        <FontAwesome5 name="directions" size={28} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 5, width: Width*.45, height: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', flexDirection: 'row', marginLeft: 10 }}
                    onPress={()=> Communications.phonecall('9999999999', true)}
                    >
                        <Text style={{ color: colors.txt, fontSize: 18, margin: 5, fontWeight: 'bold' }}>Call Now</Text>
                        <Feather name="phone-call" size={28} color='white' />
                    </TouchableOpacity>
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

export default ShopsDetails;