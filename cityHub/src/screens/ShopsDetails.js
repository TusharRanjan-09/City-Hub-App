import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,Dimensions, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import Communications from 'react-native-communications';
export const scaleSize = (size, width) => (width / 375) * size;
import { FONTSIZE } from "../utilities/font";
const ShopsDetails = (props) => {
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    const bookColor = colors.gps
    const Width = Dimensions.get('screen').width
    const Height = Dimensions.get('screen').height
    //    console.warn(props)
    return (
        <SafeAreaView style={{ backgroundColor: colors.headerColor,  height: height, width: width ,}}>
            <View style={{ backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate("Shops")} style={{ backgroundColor: colors.headerColor, PaddingTop: 20 }}>
                    <Ionicons name="arrow-back" size={FONTSIZE.extra_mediu} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.txt,  marginLeft: buttonWidth*.28, fontSize: FONTSIZE.small_tiny, marginTop: 19 }}>Shops Details</Text>
            </View>
            <View style={{ width: width, height:buttonWidth*1, elevation: 50, alignItems: 'center' }}>
                <Image source={{ uri: props.route.params.uri }} style={{ width: width*.95, height: buttonWidth*.96, borderRadius: 10 }} />
            </View>
            <View style={{ width: width, height:buttonWidth*1, backgroundColor: colors.details, padding: 10,paddingBottom: 15}}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo name="location-pin" size={FONTSIZE.small} color={bookColor} />
                    <Text style={{ fontSize: FONTSIZE.larg, color: colors.txt }}>{props.route.params.address}</Text>
                </View>
                <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
                    <Text style={{ color: colors.txt, fontSize: FONTSIZE.very_larg, fontWeight: 'bold', marginBottom: 5 }}>{props.route.params.title}</Text>
                </View>


                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="star" size={FONTSIZE.extra_mediu} color={props.route.params.color1} />
                    <AntDesign name="star" size={FONTSIZE.extra_mediu} color={props.route.params.color2} />
                    <AntDesign name="star" size={FONTSIZE.extra_mediu} color={props.route.params.color3} />
                    <AntDesign name="star" size={FONTSIZE.extra_mediu} color={props.route.params.color4} />
                    <AntDesign name="star" size={FONTSIZE.extra_mediu} color={props.route.params.color5} />
                    <Text style={{ color: colors.txt, marginHorizontal: 10 }}>{props.route.params.reviews}</Text>
                </View>
                <Text style={{ fontSize: FONTSIZE.regular, color: colors.txt, fontWeight: 'bold' }}>Description</Text>
                <Text style={{ fontSize: FONTSIZE.larg, color: colors.txt }} ellipsizeMode="tail" numberOfLines={5}>{props.route.params.des}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                    <TouchableOpacity style={{ marginLeft: 10, elevation: 5, width: buttonWidth*.5, height: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'blue', flexDirection: 'row' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: FONTSIZE.large, margin: 5 }}>Get Direction</Text>
                        <FontAwesome5 name="directions" size={FONTSIZE.extra_mediu} color='white' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ elevation: 5, width: buttonWidth*.5, height: 50, borderRadius: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: 'orange', flexDirection: 'row', marginLeft: 10 }}
                    onPress={()=> Communications.phonecall('9999999999', true)}
                    >
                        <Text style={{ color: colors.txt, fontSize: FONTSIZE.large, margin: 5, fontWeight: 'bold' }}>Call Now</Text>
                        <Feather name="phone-call" size={FONTSIZE.extra_mediu} color='white' />
                    </TouchableOpacity>
                </View>
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
        alignItems: 'center',
        
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