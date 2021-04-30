import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home'
import SplashScreen from './screens/SplashScreen'
import LoginScreen from './AuthStack/LoginScreen'
import SignUp from './AuthStack/SignUp'
import Verification from './AuthStack/Verification'
import ForgotPassword from './AuthStack/ForgotPassword'
import BottomNavigation from './screens/BottomNavigation'
import Details from './screens/Details'
import Profile from './screens/Profile'

const Stack = createStackNavigator();

function Routes() {

    const [isSplashScreen, setIsSplashScreen] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsSplashScreen(false)
        }, 2000)
    })

    if(isSplashScreen){
        return(
            <SplashScreen/>
        );
    }
    return (
        <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen} options={{
                headerShown: false
            }}/>

            <Stack.Screen name="SignUp" component={SignUp} options={{
                headerShown: false
            }}/>

            <Stack.Screen name="Home" component={Home} options={{
                    headerShown: false
                }}/>

            <Stack.Screen name="Verification" component={Verification} options={{
                    headerShown: false
                }}/>

            <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{
                    headerShown: false
                }}/>

            <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{
                    headerShown: false
                }}/>

            <Stack.Screen name="Details" component={Details} options={{
                    headerShown: false
                }}/>

            <Stack.Screen name="Profile" component={Profile} options={{
                    headerShown: false
                }}/>
        </Stack.Navigator>
    )
}

export default Routes

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00001F"
    }
})
