import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation, useTheme } from '@react-navigation/native';
export default function card2({navigation}) {
  const {colors} = useTheme()
  return (
    <View style={{alignContent: 'center',}}> 
    <TouchableOpacity>
    <View style={styles.container}>
    <FontAwesome name="music" size={44} color="white" />
    </View>    
        </TouchableOpacity> 
     
        <Text style={{marginLeft: 20, color: colors.txt, fontWeight: 'bold'}}>Events</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#810081',
    width: 80,
    height:80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7
  },
 
});
