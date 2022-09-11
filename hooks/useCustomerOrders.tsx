import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {GET_ORDERS} from "../graphql/queries";
import {useQuery} from "@apollo/client";

const useCustomerOrders = (userId: string) => {
    const {loading, error, data } = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if (!data) return;
        const orders: Order[] = data.getOrders.map(({value}: OrderResponse) => ({
            carrier: value.carrier,
            createdAt: value.createdAt,
            shippingCost: value.shippingCost,
            trackingId: value.trackingId,
            trackingItems: value.trackingItems,
            Address: value.Address,
            City: value.City,
            Lat: value.Lat,
            Lng: value.Lng,
        }));
        const customerOrders = orders.filter(order => order.trackingItems.customer_id === userId);
        setOrders(customerOrders);
    }, [data]);
    return {};
};

export default useCustomerOrders;
