import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import Input from '../components/sharedComponents/Input';
import Entypo from 'react-native-vector-icons/Entypo';
export const scaleSize = (size, width) => (width / 375) * size;
import {FONTSIZE} from '../utilities/font';
export default function SignUp({ navigation }) {
    const [tt, setTt] = useState({ email: 'Email', pass: 'Password', user: 'UserName' })
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")} style={{position: 'absolute', top:2,left:5}}>
                <Entypo name="cross" size={32} style={{ marginTop: width/20, paddingLeft: 2 }} />
            </TouchableOpacity>
                        
                    <Text style={styles.txt}>Create an account</Text>
                    <Input email={tt} />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Explore")}>
                        <Text style={styles.btntxt}>SIGN UP</Text>
                    </TouchableOpacity>
                    <View style={styles.tnc}>
                        <Text style={{fontSize:FONTSIZE. regular_medium}}>   By clicking Sign Up you agree to the following</Text>
                        <TouchableOpacity style={{alignItems:'center'}}>
                            <Text style={{ fontSize:FONTSIZE. regular_medium, color: 'black', }}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
           
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
        width: width,
        height: height,
       alignItems:'center',
       justifyContent:'center'   
    },
    txt: {
        fontSize: FONTSIZE.larger,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: buttonHeight
    },
    button: {
        backgroundColor: '#4cb8ff',
        width: buttonWidth,
        alignSelf: 'center',
        height: buttonHeight,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: buttonHeight*2
    },
    btntxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: FONTSIZE.extra_large
    },
    tnc: {
        marginTop:buttonHeight,
        alignItems:'center'
    }
});
