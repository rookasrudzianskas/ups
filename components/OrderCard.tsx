import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Icon} from "@rneui/themed";
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";

type Props = {
    item: Order
}
export type OrderScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList, "Orders">, NativeStackNavigationProp<RootStackParamList>>;

const OrderCard = ({item}: Props) => {
    const navigation = useNavigation<OrderScreenNavigationProp>();

    return (
        // @ts-ignore
        <TouchableOpacity onPress={() => navigation.navigate('Order', {
            order: item
        })}>
            <Card containerStyle={{paddingHorizontal: 10, borderRadius: 7}}>
                {/*@ts-ignore*/}
                <View className="flex-row justify-between items-center">
                    <View >
                        <Icon
                            name="truck-delivery"
                            color={'#EB6A7C'}
                            type={"material-community"}
                        />
                        {/*@ts-ignore */}
                        <Text style={{fontSize: 10}}>{new Date(item.createdAt).toLocaleDateString()}</Text>
                    </View>
                    <View>
                        {/*@ts-ignore */}
                        <Text style={{fontSize: 10}} className="text-gray-400">{item.carrier}-{item.trackingId}</Text>
                        {/*@ts-ignore */}
                        <Text className="text-gray-500 text-xl">{item.trackingItems.customer.name}</Text>
                    </View>
                    {/* @ts-ignore */}
                    <View className="flex-row items-center">
                    {/* @ts-ignore */}
                        <Text className="text-sm" style={{color: "#EB6A7C"}}>{item.trackingItems.items.length} x</Text>
                        <Icon name="box" type={"feather"} style={{marginLeft: 7}} />
                    </View>
                </View>
            </Card>
        </TouchableOpacity>
    );
};

export default OrderCard;
