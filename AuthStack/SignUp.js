import React, {useState} from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity, TextInput, Alert} from 'react-native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AsyncStorage from '@react-native-async-storage/async-storage';

function SignUp({ navigation }) {

    const [gender, setGender] = useState('')
    const [data, setData] = useState({
        userName: '',
        email: '',
        pswd: '',
        confirmPasswd: ''
    })

    const storeData = async (value) => {
        try {
          await AsyncStorage.setItem('email', data.email)
        } catch (e) {
          // saving error
        }
      }

    const submit = ()=> {
        if(data.email === ''){
            Alert.alert("I know this is a demo app, but please atleast provide 'email'...  ;-)")
        }
        else{
            storeData()
            navigation.navigate('Verification')
        }
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={{textAlign:'center',color:'#A7A7A7',marginTop:30,fontSize:11}}>PROFILE PICTURE</Text>
                <View style={styles.circleBtn}>
                    <Image source={require('../assets/logo.png')}
                        style={{width: 50, height: 50}}/>
                </View>

                <Text style={{color:'#A7A7A7',fontSize:11,marginLeft:'25%',marginTop:20}}>GENDER</Text>
                <View style={{flexDirection: 'row',width:'70%',alignSelf:'center',justifyContent: 'center'}}>
                    <View>
                    {gender==='male' ? 
                        <TouchableOpacity style={[styles.genderCircleBtn, {backgroundColor:'#116AD8'}]}
                            onPress={()=> setGender('male')}>
                            <Fontisto name="male" size={20} color="#fff"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.genderCircleBtn}
                            onPress={()=> setGender('male')}>
                            <Fontisto name="male" size={20} color="#fff"/>
                        </TouchableOpacity>
                        }

                        <Text style={{textAlign:'center',color:'#A7A7A7',fontSize:11,marginTop:5}}>MALE</Text>
                    </View>

                    <View style={{marginHorizontal:30}}>
                    {gender==='female' ? 
                        <TouchableOpacity style={[styles.genderCircleBtn, {backgroundColor:'#116AD8'}]}
                            onPress={()=> setGender('female')}>
                            <Fontisto name="female" size={20} color="#fff"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.genderCircleBtn}
                            onPress={()=> setGender('female')}>
                            <Fontisto name="female" size={20} color="#fff"/>
                        </TouchableOpacity>
                        }

                        <Text style={{textAlign:'center',color:'#A7A7A7',fontSize:11,marginTop:5}}>FEMALE</Text>
                    </View>

                    <View>
                    {gender==='other' ?
                        <TouchableOpacity style={[styles.genderCircleBtn, {backgroundColor:'#116AD8'}]}
                            onPress={()=> setGender('other')}>
                            <Fontisto name="male" size={20} color="#fff"/>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.genderCircleBtn}
                            onPress={()=> setGender('other')}>
                            <Fontisto name="male" size={20} color="#fff"/>
                        </TouchableOpacity>
                }


                        <Text style={{textAlign:'center',color:'#A7A7A7',fontSize:11,marginTop:5}}>OTHER</Text>
                    </View>
                </View>
            </View>

            <View style={styles.loginContainer}>
                <Text style={{color:"#A7A7A7",fontSize:11}}>USERNAME</Text>
                <TextInput style={styles.input}
                    color="#fff"
                    onChangeText={(val) => setData({
                        ...data,
                        userName:val
                    })}/>

                <Text style={{color:"#A7A7A7",marginTop:20,fontSize:11}}>EMAIL</Text>
                <TextInput style={styles.input}
                    color="#fff"
                    onChangeText={(val) => setData({
                        ...data,
                        email:val
                    })}/>

                <Text style={{color:"#A7A7A7",marginTop:20,fontSize:11}}>PASSWORD</Text>
                <TextInput style={styles.input}
                    color="#fff"
                    onChangeText={(val) => setData({
                        ...data,
                        pswd:val
                    })}
                    secureTextEntry={true}/>

                <Text style={{color:"#A7A7A7",marginTop:20,fontSize:11}}>CONFIRM PASSWORD</Text>
                <TextInput style={styles.input}
                    color="#fff"
                    onChangeText={(val) => setData({
                        ...data,
                        confirmPasswd:val
                    })}
                    secureTextEntry={true}/>

                <TouchableOpacity style={styles.loginBtn}
                    onPress={() => submit()}>
                    <Text style={{color:'#FFFFFF',textAlign:'center'}}>CREATE ACCOUNT</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{marginTop:20}}
                    onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style={{color:'#FFFFFF',textAlign:'center'}}>Have an account? Log in</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default SignUp

const circleDim = 100;
const genderCircleDim = 40

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
        marginTop: 10,
        borderWidth: 2,
        borderColor: '#24244B'
      },
      genderCircleBtn: {
        width: genderCircleDim,
        height: genderCircleDim,
        borderRadius: genderCircleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 10,
        borderWidth: 1,
        borderColor: '#24244B',
        backgroundColor:'#171732'
      },
      loginContainer: {
          flex: 2,
          width:'80%',
          alignSelf: 'center',
          marginTop: 40,
      },
      input: {
          borderBottomWidth: 1,
          borderBottomColor: '#A7A7A7',
          height: 35
      },
      loginBtn: {
          width: '80%',
          alignSelf: 'center',
          borderRadius: 20,
          backgroundColor: '#0F68D7',
          marginTop: 40,
          padding: 15
      }
})

