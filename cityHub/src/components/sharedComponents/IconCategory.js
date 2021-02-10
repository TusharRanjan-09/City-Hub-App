import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, ImageBackground, Image } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function IconCategory() {
    const {colors} = useTheme()  
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Gyms')}>
                <View style={{ backgroundColor: '#fc5373', alignItems: 'center', width: 100, height: 100, borderRadius: 50, borderWidth: 2 ,marginBottom: 20}}>
                    <Image source={{ uri: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' }}
                        style={{ width: 100, height: 100, borderRadius: 50}}
                    />
                    <Text style={{ fontSize: 20, color: colors.iconCategory,fontWeight :'bold' }}>Gym</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        margin: 8
    },

});
