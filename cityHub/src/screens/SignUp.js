import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions } from 'react-native';
import Input from '../components/Input';
import Entypo from 'react-native-vector-icons/Entypo';
export default function SignUp({ navigation }) {
    const [tt, setTt] = useState({ email: 'Email', pass: 'Password', user: 'UserName' })
    return (
        <View style={{ backgroundColor: 'white', flex: 1 }}>
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Entypo name="cross" size={28} style={{ marginTop: 22, paddingLeft: 2 }} />
            </TouchableOpacity>
            <View style={styles.container}>

                <View style={{ marginTop: 45 }}>
                    <Text style={styles.txt}>Create an account</Text>
                    <Input email={tt} />

                    <TouchableOpacity style={styles.button} onPress={() => navigation.replace("Explore")}>
                        <Text style={styles.btntxt}>SIGN Up</Text>
                    </TouchableOpacity>
                    <View style={{ marginTop: 80 }}>
                        <Text style={{ fontSize: 15 }}>   By clicking Sign Up you agree to the following</Text>
                        <TouchableOpacity >
                            <Text style={{ fontSize: 18, color: 'black', marginLeft: 55 }}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>


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
        paddingHorizontal: 30
    },
    txt: {
        fontSize: 39,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 45
    },
    button: {
        backgroundColor: '#4cb8ff',
        width: 320,
        alignSelf: 'center',
        height: 50,
        borderRadius: 10,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    btntxt: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }
});
