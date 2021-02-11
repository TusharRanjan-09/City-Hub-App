import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image, TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const HotelDetails = (props) => {
    const { colors } = useTheme()
    const navigation = useNavigation();
    const myColor = colors.txt
    const bookColor = colors.gps
    // console.warn(props)
    return (
        <SafeAreaView style={{ backgroundColor: colors.headerColor, flex: 1 }}>

            <View style={{ backgroundColor: colors.headerColor, flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate("Hotels")} style={{ backgroundColor: colors.headerColor, PaddingTop: 20 }}>
                    <Ionicons name="arrow-back" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
                </TouchableOpacity>
                <Text style={{ color: colors.txt, marginLeft: '27%', fontSize: 24, marginTop: 19 }}>Hotel Details</Text>
            </View>
            <View style={{ flex: 3.5, }}>
                <Image source={{ uri: props.route.params.uri }} style={{ width: '100%', height: 280 }} />
            </View>
            <View style={{ flex: 6.5, backgroundColor: colors.details, padding: 10, borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
               <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <Entypo name="location-pin" size={28} color={bookColor} />  
               <Text style={{fontSize: 16, color: 'lightgrey'}}>{props.route.params.address}</Text>
               </View>
               
                <Text style={{ color: colors.txt, fontSize: 25, fontWeight: 'bold', marginBottom:5 }}>{props.route.params.title}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
               <AntDesign name="star" size={28} color={props.route.params.color1} />
                <AntDesign name="star" size={28} color={props.route.params.color2} />
                <AntDesign name="star" size={28} color={props.route.params.color3} />
                <AntDesign name="star" size={28} color={props.route.params.color4} />
                <AntDesign name="star" size={28} color={props.route.params.color5} />
                <Text style={{color: colors.txt, marginHorizontal:10}}>{props.route.params.reviews}</Text>
               </View>
               
               <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
               <View style={{flexDirection: 'column'}}>
               <FontAwesome5 name="award" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
               <Text style={{width: 170, color: colors.txt}}>Won Awards for Good Customer Services.</Text>
               </View>
               
               
               <View style={{flexDirection: 'column'}}>
               <Ionicons name="people" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
                   <Text style={{width: 170, color: colors.txt}}>Happy Customers Every year</Text>
                   <Text style={{color:colors.book, fontSize :20}}>{props.route.params.customers}</Text>
               </View>
               </View>
               <View style={{flexDirection: 'row', alignItems: 'center', alignContent: 'center'}}>
               <MaterialIcons name="sanitizer" size={28} color={myColor} style={{ paddingLeft: 2, marginTop: 22 }} />
               <Text style={{color: 'red', marginTop: 20, width: 340, marginLeft: 5}}>Sanatized Before Your Eyes | Contactless Check-In | All staffs temp checked </Text>
               </View>
               
               <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:89}}>
                   <View style={{flexDirection: 'column'}}>
                  
               <Text style={{fontSize:20,marginLeft:22, fontWeight: 'bold', color: 'white'}}>{props.route.params.cost}</Text>
               <Text style={{fontSize:20, color: colors.txt,}}>Total Amount</Text>
                   </View>
             
               <TouchableOpacity style={{elevation:5, backgroundColor :'orange', justifyContent :'center', alignItems :'center', borderRadius:10, width:200, height:60}}>
                   <Text style={{fontSize: 28, color: 'white',fontWeight: 'bold'}}>Book Now</Text>
               </TouchableOpacity>
               </View>
               <View style={{flexDirection: 'row'}}>
               <Text style={{marginLeft:15, marginTop:6, color: colors.txt}}>By proceeding, you agree to our</Text>
               <Text style={{ marginTop:6, color :'red'}}> Terms & Conditions</Text>
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

export default HotelDetails;