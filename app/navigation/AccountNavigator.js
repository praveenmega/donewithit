import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AccountScreen from '../screens/AccountScreen';
import ListingScreen from '../screens/ListingScreen';
import MessagesScreen from '../screens/MessagesScreen';
import routes from './routes';

const Stack = createStackNavigator();

const AccountNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{presentation:"modal",headerShown:false}}>
            <Stack.Screen name={routes.ACCOUNT} component={AccountScreen} />
            <Stack.Screen name={routes.MESSAGES} component={MessagesScreen}/>
        </Stack.Navigator>
    );
}

export default AccountNavigator;