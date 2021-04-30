import React from 'react'
import {View, Image} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Home from './Home'
import QRCode from './QRCode'
import Ranking from './Ranking'
import Shop from './Shop'

const Tab = createBottomTabNavigator();

function BottomNavigation() {
    return (
        <Tab.Navigator  
        tabBarOptions={{
            activeTintColor:'#D93069',
            inactiveTintColor:'#DFDFDF',
            showLabel: false,
            activeBackgroundColor:'#00001F',
            inactiveBackgroundColor:'#00001F'
        }} 
        initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={{
                tabBarIcon: ({ color }) => (
                    <AntDesign name="appstore-o" color={color} size={26} />
                ),
                }}/>
            <Tab.Screen name="QRCode" component={QRCode} options={{
                tabBarIcon: ({ color }) => (
                    <MaterialCommunityIcons name="apple-keyboard-command" color={color} size={26} />
                ),
                }}/>
            <Tab.Screen name="Ranking" component={Ranking} options={{
                tabBarIcon: ({ color }) => (
                    <EvilIcons name="trophy" color={color} size={35} />
                ),
                }}/>
            <Tab.Screen name="Shop" component={Shop} options={{
                tabBarIcon: ({ color }) => (
                    <AntDesign name="shoppingcart" color={color} size={30} />
                ),
                }}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation
