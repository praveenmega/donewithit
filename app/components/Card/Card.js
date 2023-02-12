import React from 'react';
import { View ,Image,Text,StyleSheet, TouchableWithoutFeedback} from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';

function Card({url,title,subTitle,onPress}) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={{uri:url}}/>
                <View style= {styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    <AppText>{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: "hidden"
    },
    image : {
        width: '100%',
        height: 200,
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        marginBottom: 7
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})

export default Card;