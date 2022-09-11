import React, {useLayoutEffect, useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import {Input} from "@rneui/themed";
import {useTailwind} from 'tailwind-rn';
import {useQuery} from "@apollo/client";
import {GET_CUSTOMERS} from "../graphql/queries";
import CustomerCard from '../components/CustomerCard';


export type CustomerScreenNavigationProp =
    CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, 'Customers'>,
    NativeStackNavigationProp<RootStackParamList>
    >

const CustomerScreen = () => {
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const [input, setInput] = useState<string>('');
    const tw = useTailwind();
    const {loading, error, data} = useQuery(GET_CUSTOMERS);

    useLayoutEffect(() => {
        navigation.setOptions({
            // hide header
            headerShown: false
        })
    })
    // @ts-ignore
    return (
        // @ts-ignore
        <ScrollView className="bg-[#59C1CC]">
            {/* @ts-ignore */}
            <Image source={{uri: 'https://links.papareact.com/3jc'}} className="w-full h-64" />

            {/* @ts-ignore */}
            <View className="bg-white pt-5 pb-0 px-10">
                <Input placeholder="Search by Customer" value={input} onChangeText={(text) => setInput(text)} />
            </View>
            {data?.getCustomers.map(({ name: ID, value: { email, name }}: CustomerResponse) => (
                // @ts-ignore
                <CustomerCard key={ID} email={email} name={name} userId={ID} />
            ))}
        </ScrollView>
    );
};

export default CustomerScreen;
