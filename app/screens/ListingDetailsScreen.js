import React from 'react';
import { View,Image,StyleSheet } from 'react-native';
import colors from '../config/colors';
import AppText from '../components/AppText/AppText';
import ListItem from '../components/ListItem/ListItem';

function ListingDetailsScreen({route}) {
    const listing = route.params;
    return (
        <View>
            <Image style={styles.image} source={{uri:listing.images[0].url}}/>
            <View style= {styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <AppText  style={styles.subTitle}>${listing.price}</AppText>
                <View style={styles.userContainer}>
                    <ListItem img={require('../assets/mosh.jpg')} title="Mosh Hamedani" subTitle="5 Listings"/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    detailsContainer: {
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "500"
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    userContainer: {
        marginVertical: 50
    }
})

export default ListingDetailsScreen;