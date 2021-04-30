import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

function SplashScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.circleBtn}>
                <Image source={require('../assets/logo.png')}
                    style={{width: 150, height: 150}}/>
            </View>

        </View>
    )
}

export default SplashScreen

const circleDim = 250;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#00001F",
        justifyContent:'center',
        alignItems: 'center'
    },
    circleBtn: {
        width: circleDim,
        height: circleDim,
        borderRadius: circleDim/2,
        justifyContent:'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 1,
        borderColor: '#24244B'
      },
})
