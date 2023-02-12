import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ListingDetailsScreen from '../screens/ListingDetailsScreen';
import ListingScreen from '../screens/ListingScreen';
import routes from './routes';

const Stack = createStackNavigator();

const FeedNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{presentation:"modal", headerShown:false}}>
            <Stack.Screen name={routes.LISTINGS} component={ListingScreen} />
            <Stack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen} />
        </Stack.Navigator>
    );
}

export default FeedNavigator;