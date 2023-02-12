import React, { useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../config/colors';
import ListingEditScreen from '../screens/ListingEditScreen';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import ListingTabBtn from './ListingTabBtn';
import routes from './routes';
// import {requestUserPermission,notificationListner} from '../utility/pushnotificationHelper';

const Tab = createBottomTabNavigator();

const AppNavigator = (props) => {

    // useEffect(() => {
    //     requestUserPermission();
    //     notificationListner();
    // },[]);

    return (
        <Tab.Navigator
            backBehavior='history'
            screenOptions={{
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: colors.medium,
                headerShown: false,
            }}>
            <Tab.Screen name="Feed"
                component={FeedNavigator}
                options={{
                    tabBarLabel: 'Feed',
                    tabBarIcon: ({ color, size }) => (
                        <MCIcon name="home" color={color} size={size} />
                    ),
                }} />
            <Tab.Screen name={routes.LISTINGS_EDIT}
                component={ListingEditScreen}
                options={({ navigation }) => ({
                    tabBarButton: () => (<ListingTabBtn onPress={() => navigation.navigate(routes.LISTINGS_EDIT)} />),
                    tabBarLabel: 'Post',
                    tabBarIcon: ({ color, size }) => (
                        <MCIcon name="plus-circle" color={color} size={size} />
                    ),
                })} />
            <Tab.Screen name="AccountNav"
                component={AccountNavigator}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                        <MCIcon name="account" color={color} size={size} />
                    ),
                }} />
        </Tab.Navigator>
    );
}

export default AppNavigator;