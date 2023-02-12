import React from 'react';
import { View, Image, StyleSheet, TouchableHighlight } from 'react-native';
import AppText from '../AppText/AppText';
import colors from '../../config/colors';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';

function ListItem({img, IconComponent ,title, subTitle,onPress,renderRightActions}) {
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={renderRightActions}>
                <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
                    <View style={styles.container}>
                        {IconComponent}
                        {img && <Image style={styles.image} source={img}/>}
                        <View style={styles.detailsContainer}>
                            <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                            {subTitle && <AppText style={styles.subTitle} numberOfLines={2}>{subTitle}</AppText>}
                        </View>
                        <MCIcon color={colors.medium} name="chevron-right" size={25}/>
                    </View>
                </TouchableHighlight>
            </Swipeable>
        </GestureHandlerRootView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.white,
        alignItems: 'center',
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: 'center',
        flex: 1,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    }
})

export default ListItem;