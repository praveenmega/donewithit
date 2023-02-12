import React from 'react';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View,TextInput,StyleSheet } from 'react-native';
import defaultStyles from '../../config/styles';

function AppTextInput({icon, width='100%', ...otherProps}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MCIcon name={icon} size={20} color={defaultStyles.colors.medium}/>}
            <TextInput style={[defaultStyles.text]} {...otherProps} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginVertical: 10
    }
})

export default AppTextInput;