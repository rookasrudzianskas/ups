import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {CompositeNavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import DeliveryCard from "../components/DeliveryCard";

type OrderScreenRouteProp = RouteProp<RootStackParamList, "Order">;

export type OrderScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<RootStackParamList>>;


const OrderScreen = () => {
    const navigation = useNavigation<OrderScreenNavigationProp>();
    const {params: {order}} = useRoute<OrderScreenRouteProp>();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: "#EB6A7C",
            headerTitleStyle: {color: 'black'},
            headerBackTitle: "Deliveries"
        });

    }, [order])
    return (
        // @ts-ignore
        <View className="-mt-2">
            <DeliveryCard order={order} fullWidth />
        </View>
    );
};

export default OrderScreen;
