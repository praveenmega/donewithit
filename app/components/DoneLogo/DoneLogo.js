import React from 'react';
import { StyleSheet } from 'react-native';
import Lottie from 'lottie-react-native';


function DoneLogo({onDone}) {
    return (
        <Lottie source={require('../../assets/animations/done.json')} 
            autoPlay 
            loop={false} 
            style={styles.animation}
            onAnimationFinish={onDone}/>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
    }
})

export default DoneLogo;