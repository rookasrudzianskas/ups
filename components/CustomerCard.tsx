import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import useCustomerOrders from "../hooks/useCustomerOrders";
import {useNavigation} from "@react-navigation/native";
import {Card} from "@rneui/themed";
import {useTailwind} from "tailwind-rn/dist";

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

                    </View>

                </Card>
        </TouchableOpacity>
    );
};

export default CustomerCard;
