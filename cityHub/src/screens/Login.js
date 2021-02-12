import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,Dimensions } from 'react-native';
import Input from '../components/sharedComponents/Input';
import SignUp from './SignUp';

export default function Login({ navigation }) {
    const [tt, setTt] = useState({ email: 'Username/Email', pass: 'Password' })
    return (
        <View style={styles.container}>
            <Text style={styles.inputt}>Hi,</Text>
            <Text style={styles.input}>Welcome!</Text>
            <View style={styles.inpview}>
                <TextInput placeholder={tt.email} style={{ width: 330, height: 60, borderBottomColor: 'lightgrey', borderBottomWidth: 1, fontSize: 20 }} />
                <TextInput placeholder={tt.pass} style={{ width: 330, height: 60, borderBottomColor: 'lightgrey', borderBottomWidth: 1, fontSize: 20 }} secureTextEntry={true}/>
                {/* <Input email={tt}/>   */}
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
const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height
const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        paddingTop: 30,
        width: width,
        height: height,
alignItems:'center'
    },
    input: {
        fontSize: 42,
        fontWeight: 'bold',
        color: 'black',
        // paddingLeft: 29
    },
    inputt: {
        fontSize: 42,
        fontWeight: 'bold',
        color: 'black',
        // paddingLeft: 29,
        marginTop: 50
    },
    inpview: {
        // marginLeft: 29,
        marginTop: 40,
        marginBottom: 25
    },
    inpvieww: {
        marginLeft: width*.5,
        marginTop: 10,
    },
    txt: {
        fontSize: 16,
        color: '#4cb8ff',
        
    },
    button: {
        backgroundColor: '#4cb8ff',
        width: 320,
        alignSelf: 'center',
        marginTop: 40,
        height: 50,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    btntxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
