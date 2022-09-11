import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";
import {CompositeNavigationProp, RouteProp, useNavigation, useRoute} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";

type ModalScreenNavigationProp = CompositeNavigationProp<BottomTabNavigationProp<TabStackParamList>, NativeStackNavigationProp<RootStackParamList, "MyModal">>;

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'MyModal'>

const ModalScreen = () => {
    const navigation = useNavigation();
    const {params: {name, userId}} = useRoute<ModalScreenRouteProp>();
    return (
        <View>
    {/*// @ts-ignore*/}
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-5 right-5 z-10">
                <Icon name="closecircle" type="antdesign" />
            </TouchableOpacity>

            <View>
                <View>
                    <Text>{name}</Text>
                    <Text>deliveries</Text>
                </View>
            </View>
        </View>
    );
};

export default ModalScreen;
