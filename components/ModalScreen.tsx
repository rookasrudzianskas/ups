import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";
import {useNavigation} from "@react-navigation/native";

const ModalScreen = () => {
    const navigation = useNavigation();
    return (
        <View>
    {/*// @ts-ignore*/}
            <TouchableOpacity onPress={() => navigation.goBack()} className="absolute top-5 right-5 z-10">
                <Icon name="closecircle" type="antdesign" />
            </TouchableOpacity>
        </View>
    );
};

export default ModalScreen;
