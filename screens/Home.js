import React, {useEffect, useState} from 'react'
import {View, Text, StyleSheet, Image, Dimensions, TouchableOpacity} from 'react-native'
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import Profile from './Profile'
import BottomNavigation from './BottomNavigation'
import { createStackNavigator } from '@react-navigation/stack';
import { ActivityIndicator, Colors } from 'react-native-paper';

const Stack = createStackNavigator();

const { width: screenWidth } = Dimensions.get('window')

function Home() {

    return(
        <Stack.Navigator>
            <Stack.Screen name="Home" component={MainHome} options={{
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

function MainHome({ navigation }) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

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
    

    function _renderItem ({item, index}, parallaxProps) {
        return (
            <TouchableOpacity style={styles.item}
                onPress={() => navigation.push('Details', {
                    image: item.thumbnailUrl
                })}>
                <ParallaxImage
                    source={{ uri: item.thumbnailUrl }}
                    containerStyle={styles.imageContainer}
                    style={styles.image}
                    parallaxFactor={0.4}
                    {...parallaxProps}
                />
                <Text style={{marginLeft:10,color:'#FFFFFF',margin:5}}>Prakhar Pandey</Text>
                <Text style={{marginLeft:10,color:'#FFFFFF',margin:5,fontSize:12}}>Good at finding solutions    ;-)</Text>
            </TouchableOpacity>
        );
    }
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity style={styles.circleBtn}
                        onPress={() => navigation.push('Profile', {
                            moduleName: 'Home'
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

            <Text style={{margin:20,color:'#FFFFFF'}}>NEWS</Text>

            {isLoading ? 
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                    <ActivityIndicator animating={true} color={Colors.red800} />
                </View>
                :
                <Carousel
                sliderWidth={screenWidth}
                sliderHeight={screenWidth}
                itemWidth={screenWidth - 60}
                data={data}
                renderItem={_renderItem}
                hasParallaxImages={true}
            />
            }

        </View>
    )
}

export default Home

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
      item: {
        width: screenWidth - 60,
        height: screenWidth + 60,
        backgroundColor:'#171732',
        borderRadius: 8,
      },
      imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
      },
      image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
      },
})
