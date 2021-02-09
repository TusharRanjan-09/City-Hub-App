import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, useTheme } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
export default function card3({navigation}) {
  const {colors} = useTheme()
  return (
    <View style={{alignContent: 'center',paddingHorizontal:10}}> 
    <TouchableOpacity>
    <View style={styles.container}>
    <Ionicons name="fast-food" size={44} color="white" />
    </View>  
        </TouchableOpacity> 
      
        <Text style={{marginLeft: 5, color: colors.txt, fontWeight: 'bold'}}>Resturants</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#fc5373',
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
 
});
