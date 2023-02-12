import React from 'react';
import { View,StyleSheet } from 'react-native';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../config/colors';

function IconButton({name,iconColor=colors.white,size=40,backgroundColor=colors.primary}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size/2,
            backgroundColor,
            justifyContent: "center",
            alignItems: "center",
        }}>
            <MCIcon name={name} color={iconColor} size={size * 0.5}/>
        </View>
    );
}

export default IconButton;