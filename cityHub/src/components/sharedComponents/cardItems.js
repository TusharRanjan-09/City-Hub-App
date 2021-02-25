import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export const scaleSize = (size, width) => (width / 375) * size;
export default function cardItems() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Shops')}>
                <View style={styles.card}>
                    <Image source={{ uri: 'https://imgcontent.lbb.in/lbbnew/wp-content/uploads/sites/1/2017/03/29132939/290317BanjaranMarket%40GGN13.jpg?w=1200&h=628&fill=blur&fit=fill' }}
                        style={{ width: inputWidth*.4, height: inputHeight, borderTopLeftRadius: 30, borderBottomLeftRadius: 30 , borderColor: 'black', borderWidth: 1}}
                    />
                    <Text style={{ width: inputWidth*.55, fontSize: 17, color: 'white', margin: 5 }}>A big artefacts Market, at reasonable price, sector-56, Gurgaon</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(360, width)
const buttonHeight = scaleSize(45, height)
const inputWidth = scaleSize(300, width)
const inputHeight = scaleSize(60, height)
const styles = StyleSheet.create({
  container: {
    width: buttonWidth*.86,
    height:buttonHeight*1.5,
    alignItems: 'center',
    justifyContent:'center',
  },
  card: {
    backgroundColor: '#fc5373', 
    alignItems: 'center', 
    width: inputWidth, 
    height: inputHeight, 
    borderRadius: 30, 
    flexDirection: 'row', 
    borderWidth: 2
  }
});
