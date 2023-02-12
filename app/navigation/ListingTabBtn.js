import React from 'react';
import { View,StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../config/colors';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function ListingTabBtn({onPress}) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                <MCIcon name="plus-circle" color={colors.white} size={30} />
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderColor: colors.white,
        borderWidth: 10,
        borderRadius: 30,
        height: 60,
        width: 60,
        bottom: 20
    }
})

export default ListingTabBtn;