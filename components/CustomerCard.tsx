import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import useCustomerOrders from "../hooks/useCustomerOrders";
import {useNavigation} from "@react-navigation/native";
import {Card, Icon} from "@rneui/themed";
import {useTailwind} from "tailwind-rn/dist";
import {CardDivider} from "@rneui/base/dist/Card/Card.Divider";

type Props = {
    userId: string;
    name: string;
    email: string;
}

const CustomerCard = ({email, name, userId}: Props) => {
    const {loading, error, orders } = useCustomerOrders(userId);
    const navigation = useNavigation();
    const tw = useTailwind();

    return (
        <TouchableOpacity activeOpacity={0.7}>
                <Card containerStyle={{
                // make it rounded corners
                borderRadius: 7,
                    padding: 20
                }}>
                    <View>
                        {/* @ts-ignore */}
                        <View className="flex flex-row justify-between">
                            <View>
                                {/* @ts-ignore */}
                                <Text className="text-2xl font-bold">{name}</Text>
                                {/* @ts-ignore */}
                                <Text className="text-sm" style={{color: '#59C1CC'}}>ID: {userId}</Text>
                            </View>

                        {/*     @ts-ignore */}
                        <View className="flex flex-row items-center justify-end">
                            <Text style={{color: '#59C1CC'}}>{loading ? "loading..." : `${orders.length} x`}</Text>
                            <Icon
                                name="box"
                                size={50}
                                // @ts-ignore
                                type={'entypo'}
                                color={'#59C1CC'}
                                style={{marginBottom: 20, margin: 'auto'}}
                            />
                        </View>
                        </View>
                    </View>
                    <CardDivider />
                    <Text>{email}</Text>
                </Card>
        </TouchableOpacity>
    );
};

export default CustomerCard;
