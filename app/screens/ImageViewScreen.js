import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ImageViewScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.btn1}><Icon name='close' color="white" size={35}/></View>
            <View style={styles.btn2}><Icon name='trash-can-outline' color="white" size={35}/></View>
            <Image resizeMode='contain' source={require('../assets/chair.jpg')} style={styles.image} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flex: 1,
    },
    image: {
        width: '100%',
        height: '100%'
    },
    btn1: {
        position: 'absolute',
        top: 40,
        left: 30,
    },
    btn2: {
        position: 'absolute',
        top: 40,
        right: 30,
    }
});

export default ImageViewScreen;