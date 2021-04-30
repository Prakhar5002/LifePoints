import React from 'react'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile'
import BottomNavigation from './BottomNavigation'

const Stack = createStackNavigator();

function QRCode() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="QRCode" component={MainQRCode} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="Profile" component={Profile} options={{
                headerShown: false
            }}/>
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} options={{
                headerShown: false
            }}/>
        </Stack.Navigator>
    );
}

function MainQRCode({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity style={styles.circleBtn}
                        onPress={() => navigation.push('Profile', {
                            moduleName: 'QRCode'
                        })}>
                        <Image style={styles.circleBtn}
                            source={require('../assets/my.jpg')}/>
                    </TouchableOpacity>
                    <Text style={{marginLeft:10,color:'#FFFFFF'}}>Prakhar Pandey</Text>
                </View>
                <View>
                    <Text style={{color:'#FFFFFF',fontSize:11}}>Points</Text>
                    <Text style={{color:'#FFFFFF',fontSize:18,textAlign:'center'}}>40</Text>
                </View>
                <Image style={styles.circleBtn2}
                    source={require('../assets/logo.png')}/>
            </View>
            <Text style={{margin:20,color:'#FFFFFF'}}>DIGITAL MEMBER CARD</Text>
            <View style={{flex:1,justifyContent: 'center'}}>
                <Image source={require('../assets/qr.jpeg')}
                    style={styles.qr}/>
            </View>
            
        </View>
    )
}

export default QRCode

const circleDim = 60;

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:"#00001F"
    },
    topBar: {
        flexDirection:'row',
        height: 100,
        backgroundColor:"#534AA2",
        alignItems: 'center'
    },
    circleBtn: {
        width: circleDim,
        height: circleDim,
        borderRadius: circleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 12
      },
      circleBtn2: {
        width: circleDim,
        height: circleDim,
        borderRadius: circleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 12,
        borderWidth:4,
        borderColor:'#181835'
      },
      qr: {
          width: '60%',
          height: 250,
          alignSelf:'center'
      }
})
