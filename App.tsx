import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomerScreen from "./screens/CustomerScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from "./navigator/RootNavigator";

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        // @ts-ignore
        <NavigationContainer>
            <RootNavigator />
            <StatusBar style="auto" />
        </NavigationContainer>
  );
}
