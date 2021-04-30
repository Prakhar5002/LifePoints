import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image, TextInput, Alert} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage';

class ForgotPassword extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             email: ''
        }
    }

    storeData = async (value) => {
        try {
          await AsyncStorage.setItem('email', this.state.email)
        } catch (e) {
          // saving error
        }
      }
    
    submit() {
        if(this.state.email === ''){
            Alert.alert("Please provide email address for verification")
        }
        else{
            storeData()
            this.props.navigation.navigate('Verification')
        }
    }

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.midPortion}>
                    <View style={styles.circleBtn}>
                        <Image source={require('../assets/logo.png')}
                            style={{width:60, height:60}}/>
                    </View>
                    <TouchableOpacity style={styles.verification}
                        onPress={()=> this.props.navigation.navigate('LoginScreen')}>
                        <Ionicons name="arrow-back" size={35} color="#FFFFFF"/>
                        <Text style={{flex:1,marginLeft:10,color:'#FFFFFF',fontSize:30}}>Forgot password?</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#DFDFDF',fontSize:12,marginTop:20}}>Give us your registered email address and we'll send you link to reset your password</Text>
                </View>
                <View style={{flex:1,width:'70%',alignSelf: 'center'}}>
                    
                    <Text style={{color:'#A7A7A7',fontSize:11}}>EMAIL</Text> 
                    <TextInput style={styles.input}
                        color="#FFFFFF"
                        onChangeText={(val)=> this.setState({email:val})}/>
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.submit()}>
                        <Text style={{color:'#FFFFFF',textAlign:'center'}}>SEND</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{marginTop:20}}
                        onPress={() => this.props.navigation.navigate('LoginScreen')}>
                        <Text style={{color:'#FFFFFF',textAlign:'center'}}>Have an account? Log in</Text>
                    </TouchableOpacity>
                </View>    
                
            </View>
        )

    }

}

export default ForgotPassword

const circleDim = 120;

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
        marginTop: 20,
        borderWidth: 2,
        borderColor: '#24244B'
      },
      midPortion: {
        flex:2,
        width:'70%',
        alignSelf:'center',
        marginTop:30
      },
      verification: {
        flexDirection:'row',
    },
    textInputContainer: {
        marginTop: 40,
      },
      loginBtn: {
        width: '80%',
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor: '#0F68D7',
        marginTop: 40,
        padding: 15
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#A7A7A7',
        height: 35
    },
})
