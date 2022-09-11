import React, {useLayoutEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView, ScrollView, Image} from 'react-native';
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";

export type CustomerScreenNavigationProp =
    CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, 'Customers'>,
    NativeStackNavigationProp<RootStackParamList>
    >

const CustomerScreen = () => {
    const navigation = useNavigation<CustomerScreenNavigationProp>()
    useLayoutEffect(() => {
        navigation.setOptions({
            // hide header
            headerShown: false
        })
    })
    return (
        <ScrollView>
            {/* @ts-ignore */}
            <Image source={{uri: 'https://links.papareact.com/3jc'}} className="w-full h-64" />
        </ScrollView>
    );
};

export default CustomerScreen;
