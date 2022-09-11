import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomerScreen from "./screens/CustomerScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        // @ts-ignore
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Customer" component={CustomerScreen} />
            </Stack.Navigator>
            <StatusBar style="auto" />
        </NavigationContainer>
  );
}
