import React from 'react';
import colors from '../../config/colors';
import { View } from 'react-native';

function ListItemSeparator() {
    return (
        <View style={{width:"100%",height:1,backgroundColor:colors.light}}></View>
    );
}

export default ListItemSeparator;