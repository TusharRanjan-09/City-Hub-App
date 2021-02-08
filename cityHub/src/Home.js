import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Forgot from './screens/Forgot';
import Explore from './screens/Explore';
import Search from './components/Search';
import MyBookings from './screens/MyBookings';
import Profile from './screens/Profile';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Bookmarks from './screens/Bookmarks';
const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator()
const RootHome = () => {
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
                activeTintColor: 'red',
                inactiveTintColor: 'black',
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
    return (
        <NavigationContainer>
            <Stack.Navigator headerMode="none">

                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Forgot" component={Forgot} />
                <Stack.Screen name="Explore" component={RootHome} />
                <Stack.Screen name="Prof" component={Profile} />

            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default Home;

