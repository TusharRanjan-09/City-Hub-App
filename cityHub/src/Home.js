import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Forgot from './screens/Forgot';
import Explore from './screens/Explore';
import Gyms from './screens/Gyms';
import MyBookings from './screens/MyBookings';
import Profile from './screens/Profile';
import Shops from './screens/Shops';
import { NavigationContainer, DarkTheme, DefaultTheme, useTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Bookmarks from './screens/Bookmarks';
import Hotels from './screens/Hotels';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()
import { EventRegister } from 'react-native-event-listeners'
const customDarkTheme ={
    ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        headerColor: 'black',
        iconColor:'white',
        tabIcon: 'white',
        backGround: 'black',
        txt: 'white',
        profile: 'black',
        iconCategory: 'white',
        book: 'orange'
    }
}
const customDefaultTheme ={
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        headerColor: 'white',
        iconColor:'black',
        tabIcon: 'black',
        backGround: 'white',
        txt: 'black',
        profile: 'white',
        iconCategory: '#5dade2',
        book: 'blue'
    }
}

const RootHome = () => {
    const {colors} = useTheme()  
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color }) => {
                    let iconName;
                    if (route.name === 'Explore') {
                        iconName = 'explore';
                    } else if (route.name === 'MyBookings') {
                        iconName = 'book-online';
                    } else if (route.name === 'Bookmarks') {
                        iconName = 'bookmark-border';
                    } else if (route.name === 'Profile') {
                        iconName = 'supervised-user-circle';
                    }
                    return <MaterialIcons name={iconName} size={32} color={color} />;
                },
            })}
            tabBarOptions={{
                activeTintColor: colors.tabIcon,
                inactiveTintColor: 'grey',
            }}
        >
            <Tabs.Screen name="Explore" component={Explore} />
            <Tabs.Screen name="MyBookings" component={MyBookings} />
            <Tabs.Screen name="Bookmarks" component={Bookmarks} />
            <Tabs.Screen name="Profile" component={Profile} />
        </Tabs.Navigator>
    )
}
function Home() {
    const [dark, setDark] = useState(false)
    const appTheme = dark ? customDarkTheme : customDefaultTheme;
    useEffect(()=> {
        let eventListener = EventRegister.addEventListener('ChangeThemeEvent',
         (data) => {         
           setDark(data)
        })
    return () => {
   true;
    };
    },[]);
    return (
        <NavigationContainer theme={appTheme}>
            <Stack.Navigator headerMode="none">

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="Explore" component={RootHome} />
                <Stack.Screen name="Prof" component={Profile} />
                <Stack.Screen name="Hotels" component={Hotels} />
                <Stack.Screen name="Gyms" component={Gyms} />
                <Stack.Screen name="Shops" component={Shops} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Home;

