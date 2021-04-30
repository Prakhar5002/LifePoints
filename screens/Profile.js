import React from 'react'
import {View, Text, StyleSheet, Image,TouchableOpacity, Alert} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'

function Profile({navigation, route}) {

    const {moduleName} = route.params;

    const showMsg = () =>{
        Alert.alert("I know there are some flaws in the app, but I tried to complete it on time...")
        navigation.navigate('LoginScreen')
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={{flexDirection: 'row',flex:1,alignItems: 'center'}}>
                    <TouchableOpacity onPress={()=> navigation.navigate(moduleName)}>
                        <MaterialIcons name="arrow-back" size={30} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <Text style={{color:'#FFFFFF',fontSize:15,marginLeft:10}}>PROFILE</Text>
                </View>
                <TouchableOpacity onPress={() => showMsg()}>
                    <Text style={{color:'#FFFFFF',fontSize:15}}>LOG OUT</Text>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.outerCircleBtn}>
                    <Image source={require('../assets/my.jpg')}
                    style={styles.profileImage}/>
                </View>
                <TouchableOpacity style={{flexDirection:'row',justifyContent: 'center',alignItems: 'center',marginTop:10}}>
                    <Text style={{color:'#FFFFFF'}}>Prakhar Pandey</Text>
                    <Feather style={{marginLeft:10}} name="edit-2" size={20} color="#FFFFFF"/>
                </TouchableOpacity>
            </View>

            <View style={{flex:1}}>
                <View style={styles.row}>
                    <TouchableOpacity>
                        <View style={styles.smallcircleOuter}>
                            <Image source={require('../assets/logo.png')}
                            style={styles.smallcircleInner}/>
                        </View>
                        <Text style={{color:'#FFFFFF',textAlign:'center',marginTop:5}}>LEVEL</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.smallcircleOuter}>
                            <View style={styles.smallcircleInner}>
                                <Text style={{color:'#FFFFFF',fontSize:15}}>40</Text>
                            </View>
                        </View>
                        <Text style={{color:'#FFFFFF',textAlign:'center',marginTop:5}}>POINTS</Text>
                    </TouchableOpacity>

                </View>

                <View style={[styles.row, {marginTop:40}]}>
                    <TouchableOpacity>
                        <View style={styles.smallcircleOuter}>
                            <View style={styles.smallcircleInner}>
                                <Text style={{color:'#FFFFFF',fontSize:15}}>52</Text>
                            </View>
                        </View>
                        <Text style={{color:'#FFFFFF',textAlign:'center',marginTop:5}}>MONTHLY</Text>
                        <Text style={{color:'#FFFFFF',textAlign:'center',marginTop:5}}>RANKING</Text>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.smallcircleOuter}>
                            <View style={styles.smallcircleInner}>
                                <Text style={{color:'#FFFFFF',fontSize:15}}>520</Text>
                            </View>
                        </View>
                        <Text style={{color:'#FFFFFF',textAlign:'center',marginTop:5}}>YEARLY</Text>
                        <Text style={{color:'#FFFFFF',textAlign:'center',marginTop:5}}>RANKING</Text>
                    </TouchableOpacity>

                </View>
            </View>

        </View>
    )
}

export default Profile

const circleDim = 150;
const innerPic = 120;

const smallcircleDim = 100;
const smallinnerPic = 80;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#00001F'
    },
    topBar: {
        flexDirection:'row',
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center'
    },
    outerCircleBtn: {
        width: circleDim,
        height: circleDim,
        borderRadius: circleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#181835'
      },
    profileImage: {
        width: innerPic,
        height: innerPic,
        borderRadius: innerPic/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#24244B'
    },
    row: {
        width:'80%',
        alignSelf:'center',
        flexDirection:'row',
        alignItems:"center",
        justifyContent: 'center',
        marginTop: 30
    },
    smallcircleOuter: {
        width: smallcircleDim,
        height: smallcircleDim,
        borderRadius: smallcircleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        borderWidth: 2,
        borderColor: '#181835',
        marginHorizontal:20
    },
    smallcircleInner: {
        width: smallinnerPic,
        height: smallinnerPic,
        borderRadius: smallinnerPic/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: '#181835'
    }
})
