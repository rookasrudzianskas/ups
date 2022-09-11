import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useQuery} from "@apollo/client";
import {GET_ORDERS} from "../graphql/queries";

const useCustomerOrders = () => {
    const { loading, error, data } = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([]);



    return (
        <View>
        </View>
    );
};

export default useCustomerOrders;
