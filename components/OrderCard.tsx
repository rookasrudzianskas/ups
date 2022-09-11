import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Card, Icon} from "@rneui/themed";

type Props = {
    item: Order
}

const OrderCard = ({item}: Props) => {
    return (
        <TouchableOpacity>
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
