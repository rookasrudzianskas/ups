import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from "../screens/CustomerScreen";
import OrdersScreen from "../screens/OrdersScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Customers" component={CustomerScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
        </Tab.Navigator>
    );
};

export default TabNavigator;
