import React from 'react';
import { View, StyleSheet, ImageBackground, Image, Text, SafeAreaView } from 'react-native';
import AppButton from '../components/AppButton/AppButton';
import colors from '../config/colors';
import routes from '../navigation/routes';

function WelcomeScreen({navigation}) {
    return (
        <ImageBackground source={require('../assets/background.jpg')} resizeMode="cover" style={styles.bgImage} blurRadius={10}>
            <Image source={require('../assets/logo-red.png')} style={styles.logo} />
            <Text style={styles.tagline}>Sell What You Don't Need</Text>
            <View style={{ flex: 1, alignItems: 'center', width: '100%', justifyContent: 'flex-end', padding: 20 }}>
                <AppButton title={"Login"} onPress={() => navigation.navigate(routes.LOG_IN)}/>
                <AppButton title={"Register"} color="secondary" onPress={() => navigation.navigate(routes.REGISTER)}/>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    bgImage: {
        flex: 1,
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginTop: 50
    },
    tagline: {
        fontSize: 25,
        fontWeight: "600",
        paddingVertical: 20,
    }
});

export default WelcomeScreen;