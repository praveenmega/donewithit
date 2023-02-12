import React from 'react';
import { View,StyleSheet, TouchableWithoutFeedback } from 'react-native';
import colors from '../../config/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ListItemDeleteAction({onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Icon name='trash-can-outline' color="white" size={35}/>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.danger,
        width: 70,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default ListItemDeleteAction;