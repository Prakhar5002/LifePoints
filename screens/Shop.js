import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Image, Switch, FlatList, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile'
import BottomNavigation from './BottomNavigation'
import { ActivityIndicator, Colors } from 'react-native-paper';

const Stack = createStackNavigator();

function Shop() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Shop" component={MainShop} options={{
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

function MainShop({navigation}) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(response => response.json())
        .then(json => {
            console.log(Object.keys(json).length)
            console.log(Object.keys(json[0]).length)
            setData(json)
            setIsLoading(false)
        })
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity style={styles.circleBtn}
                        onPress={() => navigation.push('Profile', {
                            moduleName: 'Shop'
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
            <Text style={{margin:20,color:'#FFFFFF',fontSize:15}}>SHOP</Text>
            {isLoading ?
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <ActivityIndicator animating={true} color={Colors.red800} />
            </View>
            :
            <FlatList
            numColumns={2}
            data={data}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.btn}>
                    <Image
                        source={{uri: item.thumbnailUrl}}
                        style={{width:160,height:200,borderRadius:12}}/>
                </TouchableOpacity>
            )}/>
            }
        </View>
    )
}

export default Shop

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
      btn: {
          flex:1,alignItems: 'center',
          padding:15
      }
})
