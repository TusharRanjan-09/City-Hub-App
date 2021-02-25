import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import Input from '../components/sharedComponents/Input';
import SignUp from './SignUp';
export const scaleSize = (size, width) => (width / 375) * size;

export default function Login({ navigation }) {
    const [tt, setTt] = useState({ email: 'Username/Email', pass: 'Password' })

    return (
        <View style={styles.container}>
            <Text style={styles.inputt}>Hi,</Text>
            <Text style={styles.input}>Welcome!</Text>
            <View style={styles.inpview}>
                <TextInput placeholder={tt.email} style={styles.txtinput} />
                <TextInput placeholder={tt.pass} style={styles.txtinput} secureTextEntry={true}/>
            </View>
            <TouchableOpacity style={styles.inpvieww} onPress={() => navigation.navigate("Forgot")}>
                <Text style={styles.txt}>Forget your password ?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Explore")}>
                <Text style={styles.btntxt}>LOGIN</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 150, justifyContent: 'center' }}>
                <Text>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                    <Text style={{ color: 'black', fontWeight: 'bold' }}> Sign Up</Text>
                </TouchableOpacity>
            </View>


            <StatusBar style="auto" />
        </View>
    );
}
const {width, height} =  Dimensions.get('window')
const buttonWidth = scaleSize(305, width)
const buttonHeight = scaleSize(24, height)
const inputWidth = scaleSize(305, width)
const inputHeight = scaleSize(34, height)
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        paddingTop: 30,
        width: width,
        height: height,
        alignItems:'center',
        justifyContent:'center'
    },
    input: {
        fontSize: 42,
        fontWeight: 'bold',
        color: 'black',      
    },
    inputt: {
        fontSize: 42,
        fontWeight: 'bold',
        color: 'black',          
    },
    inpview: {
        marginTop: buttonHeight,
        marginBottom: buttonHeight
    },
    inpvieww: {
        marginTop: buttonHeight/25,
        left:buttonWidth*.25
    },
    txt: {
        fontSize: 16,
        color: '#4cb8ff',
        
    },
    button: {
        backgroundColor: '#4cb8ff',
        width: buttonWidth,
        alignSelf: 'center',
        marginTop: buttonHeight,
        height: buttonHeight,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    txtinput: {
        width: inputWidth,
        height:inputHeight, 
        borderBottomColor: 'lightgrey', 
        borderBottomWidth: 1, 
        fontSize: 20  
    }
});
