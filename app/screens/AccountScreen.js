import React from 'react';
import ListItem from '../components/ListItem/ListItem';
import { FlatList, View, StyleSheet } from 'react-native';
import colors from '../config/colors';
import IconButton from '../components/IconButton/IconButton';
import ListItemSeparator from '../components/ListItem/ListItemSeparator';
import Screen from '../components/Screen/Screen';
import routes from '../navigation/routes';
import useAuth from '../auth/useAuth';

const menuItems = [
    {
        title: 'My Listings',
        icon : {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary
        },
        targetScreen: routes.LISTINGS
    },
    {
        title: 'My Messages',
        icon : {
            name: 'email',
            backgroundColor: colors.secondary
        },
        targetScreen: routes.MESSAGES
    }
];

function AccountScreen({navigation}) {
    const {user,logout} = useAuth();

    const handleLogout = async () => {
        logout();
     };


    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem title={user.name} subTitle={user.email} img={require('../assets/mosh.jpg')}/>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={item => item.title}
                    renderItem={({ item }) => <ListItem IconComponent={<IconButton name={item.icon.name} backgroundColor={item.icon.backgroundColor}/>} 
                                                        title={item.title} 
                                                        onPress={() => navigation.navigate(item.targetScreen)}/>}
                    ItemSeparatorComponent={ListItemSeparator}
                />
            </View>
            <ListItem 
                title="Log Out" 
                IconComponent={<IconButton name="logout" backgroundColor={colors.yellow}/>}
                onPress={handleLogout}/>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light,
    },
    container: {
        marginVertical: 20,
    }
    
})

export default AccountScreen;