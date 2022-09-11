import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, ScrollView, Image} from 'react-native';
import {CompositeNavigationProp, RouteProp, useNavigation} from "@react-navigation/native";
import {RootStackParamList} from "../navigator/RootNavigator";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import useOrders from "../hooks/useOrders";

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;
export type OrderScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<RootStackParamList>>;

const OrdersScreen = () => {
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const {loading, error, orders} = useOrders();
    const [ascending, setAscending] = useState<boolean>(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            tabBarLabel: ({focused, color}) => <Text style={{color: focused ? '#EB6A7C' : color, fontSize: 10}}>Orders</Text>,
        })
    }, []);
    return (
        <ScrollView>
            {/* @ts-ignore */}
            <Image source={{uri: 'https://links.papareact.com/m51'}} className="h-64 w-full" />
        </ScrollView>
    );
};

export default OrdersScreen;
