import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function cardItems({ navigation }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <View style={{ backgroundColor: '#fc5373', alignItems: 'center', width: width - 94, height: height - 650, borderRadius: 30, flexDirection: 'row', borderWidth: 2 }}>
                    <Image source={{ uri: 'https://imgcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/03/29132939/290317BanjaranMarket%40GGN13.jpg?w=1200&h=628&fill=blur&fit=fill' }}
                        style={{ width: width - 280, height: height - 654, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 }}
                    />
                    <Text style={{ width: 199, fontSize: 17, color: 'white', margin: 5 }}>A big artefacts Market, at reasonable price, sector-56, Gurgaon</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        //    flex: 1,
        // backgroundColor: '#fff',
        margin: 10
    },

});
