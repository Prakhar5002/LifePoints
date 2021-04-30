import React, {useState} from 'react'
import {View, StyleSheet, Image, Text, TextInput, TouchableOpacity, Alert} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

function LoginScreen({ navigation }) {

    const [data, setData] = useState({
        email:'',
        passwd: ''
    })

    const storeData = async () => {
        try {
          await AsyncStorage.setItem('email', data.email)
        } catch (e) {
          // saving error
        }
      }

    const submit = ()=> {
        if(data.email === ''){
            Alert.alert('I know this is a demo app, but please atleast provide "email"...  ;-)')
        }
        else{
            storeData()
            navigation.navigate('BottomNavigation')
        }
    }

    return (
        <View style={styles.container}>
            <View style={{flex:1}}>
                <View style={styles.circleBtn}>
                    <Image source={require('../assets/logo.png')}
                        style={{width: 120, height: 120}}/>
                </View>

                <View style={styles.loginContainer}>
                    <Text style={{color:"#A7A7A7",fontSize:11}}>EMAIL</Text>
                    <TextInput style={styles.input}
                        color="#fff"
                        onChangeText={(val) => setData({
                            ...data,
                            email:val
                        })}/>

                    <Text style={{color:"#A7A7A7",marginTop:40,fontSize:11}}>PASSWORD</Text>
                    <TextInput style={styles.input}
                        color="#fff"
                        secureTextEntry={true}/>

                    <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{color:'#DFDFDF',fontSize:11,marginTop:10}}>Forgot password?</Text>
                    </TouchableOpacity>
                </View>
            </View>


            <View>
                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => submit()}>
                    <Text style={{color:'#FFFFFF',textAlign:'center',fontSize:15}}>LOG IN</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={{color:'#FFFFFF',textAlign:'center',marginVertical:40}}>Don't have an account? Create one</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default LoginScreen

const circleDim = 220;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00001F",
    },
    circleBtn: {
        width: circleDim,
        height: circleDim,
        borderRadius: circleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40,
        borderWidth: 2,
        borderColor: '#24244B'
      },
      loginContainer: {
          flex: 1,
          width:'80%',
          alignSelf: 'center',
          marginTop: 50,
      },
      input: {
          borderBottomWidth: 1,
          borderBottomColor: '#A7A7A7',
          height:40,
          backgroundColor: "#00001F",
      },
      loginBtn: {
          width: '80%',
          alignSelf: 'center',
          borderRadius: 20,
          backgroundColor: '#0F68D7',
          marginTop: 20,
          padding: 15
      }
})
