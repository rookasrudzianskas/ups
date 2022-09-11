import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useQuery} from "@apollo/client";
import {GET_ORDERS} from "../graphql/queries";

const useCustomerOrders = () => {
    const { loading, error, data } = useQuery(GET_ORDERS);
    const [orders, setOrders] = useState<Order[]>([]);

    useEffect(() => {
        if(!data) return;
        const orders: Order[] = data.getOrders.map(({ value }: OrderResponse) => ({
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
        setOrders(orders);
    }, [data]);

    return { loading, error, orders };
};

export default useCustomerOrders;
