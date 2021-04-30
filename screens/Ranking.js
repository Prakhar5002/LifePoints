import React, { useState, useEffect } from 'react'
import {View, StyleSheet, Text, Image, Switch, FlatList, TouchableOpacity} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile'
import BottomNavigation from './BottomNavigation'
import { ActivityIndicator, Colors } from 'react-native-paper';

const Stack = createStackNavigator();

function Ranking() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Ranking" component={MainRanking} options={{
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

function MainRanking({navigation}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
                            moduleName: 'Ranking'
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

            <View style={styles.ranking}>
                <View style={{padding:20,flex:1}}>
                    <Text style={{color:'#FFFFFF'}}>RANKING</Text>
                </View>
                <View style={{flexDirection:'row',justifyContent:'center'}}>
                    <Text style={{color:'#FFFFFF'}}>Monthly</Text>
                    <Switch
                        style={{marginLeft:10}}
                        trackColor={{ false: "#212143", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#36C7FF" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />

                    <Text style={{color:'#FFFFFF',marginRight:20}}>Yearly</Text>
                </View>
            </View>

            {isLoading ? 
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator animating={true} color={Colors.red800} />
                </View>
                :
                <FlatList
                data={data}
                keyExtractor={(item, index) => String(index)}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{color:'#fff', margin:10}}>{item.id}</Text>
                        <Image
                            source={{uri: item.thumbnailUrl}}
                            style={styles.circleBtn2}/>
                        <View>
                            <Text style={{color:'#fff', margin:10}}>Prakhar Pandey</Text>
                            <Text style={{color:'#fff',margin:10,fontSize:11}}>Good at finding solutions...</Text>
                        </View>
                    </TouchableOpacity>
                )}/>
            }

        </View>
    )
}

export default Ranking

const circleDim = 60;
const circleDim2 = 40;

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
    ranking: {
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btn: {
        width:'90%',
        alignSelf:'center',
        borderBottomWidth:2,
        borderBottomColor:"#181835",
        flexDirection:'row',
        alignItems:'center',
        paddingVertical:5
    },
    poster: {
        width:50,
        height:50,
        margin:10
    }
})
