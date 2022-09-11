import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {Icon} from "@rneui/themed";
import {CompositeNavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "./DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, "MyModal">>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'MyModal'>

const ModalScreen = () => {
    const navigation = useNavigation();
    const {params: {name, userId}} = useRoute<ModalScreenRouteProp>();
    const {loading, error, orders } = useCustomerOrders(userId);

    return (
        <View>
    {/*// @ts-ignore*/}
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-5 right-5 z-10">
                <Icon name="closecircle" type="antdesign" />
            </TouchableOpacity>

            <View style={{marginTop: 10}}>
                {/* @ts-ignore */}
                <View className="py-5 border-b " style={{borderColor: '#59C1CC'}}>
                    {/* @ts-ignore*/}
                    <Text className="text-center text-xl font-bold" style={{color: '#59C1CC'}}>{name}</Text>
                    {/* @ts-ignore*/}
                    <Text className="text-center italic text-sm">deliveries</Text>
                </View>
            </View>

            <FlatList contentContainerStyle={{paddingBottom: 200}} data={orders} keyExtractor={order => order.trackingId} renderItem={({item: order}) => <DeliveryCard order={order}/>} />
        </View>
    );
};

export default ModalScreen;
