import React from 'react';
import { StyleSheet,View } from 'react-native';
import Lottie from 'lottie-react-native';
import colors from '../../config/colors';


function LoadingSpin({visible=false}) {
    if(!visible) return null;

    return (
        <View style={styles.layout}>
            <Lottie source={require('../../assets/animations/loader.json')} autoPlay loop/>
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        position: 'absolute',
        backgroundColor: colors.white,
        width: '100%',
        height: '100%',
        zIndex: 1,
        opacity: 0.8
    }
})

export default LoadingSpin;