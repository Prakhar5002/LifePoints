import React, {useState} from 'react'
import {View, ImageBackground, StyleSheet, Text, Image, TouchableOpacity} from 'react-native'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

function Details({navigation, route}) {

    const {image} = route.params;

    const [like, isLike] = useState(false)
    const [dislike, isdisLike] = useState(false)

    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <ImageBackground source={{uri:image}} style={styles.image}>
                    <TouchableOpacity style={{flex:1}}
                        onPress={() => navigation.navigate('BottomNavigation')}>
                        <MaterialIcons style={{margin:20}} name="arrow-back" size={30} color="#FFFFFF"/>
                    </TouchableOpacity>
                    <Text style={styles.text}>Hello ;-)</Text>
                </ImageBackground>
            </View>

            <View style={{flex:1}}>
                <View style={{flexDirection:'row',margin:10}}>
                    {like ? 
                    (<View>
                        <TouchableOpacity style={[styles.circleBtn, {borderColor:'#FF6666'}]}
                            onPress={() => isLike(!like)}>
                            <SimpleLineIcons name="like" size={25} color="#FF6666"/>
                        </TouchableOpacity>
                    </View>)
                    :
                    (<View>
                        <TouchableOpacity style={[styles.circleBtn, {borderColor:'#FFFFFF'}]}
                            onPress={() => isLike(!like)}>
                            <SimpleLineIcons name="like" size={25} color="#FFFFFF"/>
                        </TouchableOpacity>
                    </View>)}

                    {dislike ? 
                    (<View>
                        <TouchableOpacity style={[styles.circleBtn, {borderColor:'#FF6666'}]}
                            onPress={() => isdisLike(!dislike)}>
                            <SimpleLineIcons name="dislike" size={25} color="#FF6666"/>
                        </TouchableOpacity>
                    </View>)
                    :
                    (<View>
                        <TouchableOpacity style={[styles.circleBtn, {borderColor:'#FFFFFF'}]}
                            onPress={() => isdisLike(!dislike)}>
                            <SimpleLineIcons name="dislike" size={25} color="#FFFFFF"/>
                        </TouchableOpacity>
                    </View>)}


                </View>


                <View style={styles.bottomView}>
                    <Image source={{uri:image}}
                        style={{width:'100%', height:200,borderTopLeftRadius: 12,borderTopRightRadius:12}}/>
                    <Text style={{marginVertical:10}}></Text>
                </View>

            </View>
            
        </View>
    )
}

export default Details

const circleDim = 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00001F'
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
      },
    text: {
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0"
      },
    circleBtn: {
        width: circleDim,
        height: circleDim,
        borderRadius: circleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        marginLeft: 12,
        borderWidth:2,
        borderColor:'#116AD8',
      },
      bottomView: {
          width: '80%',
          alignSelf:'center',
          borderTopLeftRadius: 12,
          borderTopRightRadius: 12,
          backgroundColor:'red',
          marginTop: 20,
          backgroundColor:'#171732'
      }
})
