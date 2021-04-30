import React, { Component } from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import OTPTextView from 'react-native-otp-textinput';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Verification extends Component {

    state = {
        otpInput: '',
        inputText: '',
        email: ''
      };


    getData = async () => {
        try {
        const value = await AsyncStorage.getItem('email')
        if(value !== null) {
            // value previously stored
            this.setState({ email:value })
        }
        } catch(e) {
        // error reading value
        }
    }  

    componentDidMount() {
        this.getData()
    }
    
      alertText = () => {
        const {otpInput = ''} = this.state;
        if (otpInput) {
          Alert.alert(otpInput);
        }
      };
    
      clear = () => {
        this.input1.clear();
      };
    
      updateOtpText = () => {
        // will automatically trigger handleOnTextChange callback passed
        this.input1.setValue(this.state.inputText);
      };

    render() {

        return (
            <View style={styles.container}>
                <View style={styles.midPortion}>
                    <View style={styles.circleBtn}>
                        <Image source={require('../assets/logo.png')}
                            style={{width:60, height:60}}/>
                    </View>
                    <TouchableOpacity style={styles.verification}
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                        <Ionicons name="arrow-back" size={35} color="#FFFFFF"/>
                        <Text style={{flex:1,marginLeft:10,color:'#FFFFFF',fontSize:30}}>Verification</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#DFDFDF',fontSize:12,marginTop:20}}>We have sent you a verification code to your email ID</Text>
                    <Text style={{color:'#DFDFDF',fontSize:12,marginTop:10}}>{this.state.email}</Text>
                </View>
                <View style={{flex:1,width:'70%',alignSelf: 'center'}}>
                    <OTPTextView
                    ref={(e) => (this.input1 = e)}
                    containerStyle={styles.textInputContainer}
                    handleTextChange={(text) => this.setState({otpInput: text})}
                    inputCount={4}
                    keyboardType="numeric"
                    color='#FFFFFF'
                    /> 
                    <TouchableOpacity style={{alignItems: 'center',marginTop: 40}}>
                        <Text style={{color:'#DFDFDF'}}>Didn't get a code? Tap to resend</Text>
                    </TouchableOpacity> 
                </View>
                <View style={{flex:1,alignItems:'center'}}>
                    <TouchableOpacity style={styles.loginBtn}
                        onPress={() => this.props.navigation.navigate('BottomNavigation')}>
                        <Text style={{color:'#FFFFFF',textAlign:'center'}}>VERIFY</Text>
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

export default Verification

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
    }
})