import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Card, Divider, Icon} from "@rneui/themed";
import MapView, {Marker} from 'react-native-maps';
import {Dimensions } from 'react-native';

type Props = {
    fullWidth?: boolean;
    order: Order;
}

const DeliveryCard = ({order, fullWidth}: Props) => {
    return (
        <Card containerStyle={{borderRadius: 7, backgroundColor: '#59C1CC', marginVertical: 10, padding: 0, paddingTop: 16, shadowColor: 'black', shadowOffset: { width: 0, height: 2}, shadowOpacity: 0.2, shadowRadius: 4}}>
                <View style={fullWidth && {height: "100%"}}>
                    <Icon name="box" type={"entypo"} size={50} color="white" />
                    {/*@ts-ignore*/}
                    <View className="">
                        {/* @ts-ignore */}
                        <Text className="text-xs text-center uppercase text-white font-bold">{order.carrier} - {order.trackingId}</Text>
                        {/* @ts-ignore */}
                        <Text className="text-white text-center text-lg font-bold">Expected Delivery: {new Date(order.createdAt).toLocaleDateString()}</Text>
                        <Divider color="white" />
                        {/* @ts-ignore */}
                        <View className="mx-auto">
                            {/* @ts-ignore */}
                            <Text className="text-base text-center text-white font-bold mt-5">Address</Text>
                            {/* @ts-ignore */}
                            <Text className="text-sm text-center text-white mb-5">{order.Address} {order.City}</Text>
                            {/* @ts-ignore */}
                            <Text className="text-sm text-center italic text-white">Shipping Cost: ${order.shippingCost}</Text>
                        </View>
                    </View>
                </View>


            <Divider color={'white'} />

                    {/* @ts-ignore */}
                    <View className="p-5">
                        {order.trackingItems.items.map((item, index) => (
                            // @ts-ignore
                            <View key={index} className="flex-row justify-between items-center">
                                {/*// @ts-ignore*/}
                                <Text className="text-sm italic text-white">
                                    {item.name}
                                </Text>
                                {/*// @ts-ignore*/}
                                <Text className="text-white text-xl">
                                    x {item.quantity}
                                </Text>
                            </View>
                        ))}
                    </View>

                    <MapView
                        // @ts-ignore
                        initialRegion={{
                            // @ts-ignore
                            latitude: order.Lat,
                            // @ts-ignore
                            longitude: order.Lng,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005,
                        }}
                        style={{width: '100%', height: 200}}
                    >
                        {order.Lat && order.Lng && (
                            <Marker
                                coordinate={{
                                    latitude: order.Lat,
                                    longitude: order.Lng
                                }}
                                title='Delivery Location'
                                description={order.Address}
                                identifier="destination"
                            />
                        )}
                    </MapView>
        </Card>
    );
};

export default DeliveryCard;
