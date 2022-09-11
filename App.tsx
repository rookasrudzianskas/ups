import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomerScreen from "./screens/CustomerScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RootNavigator from "./navigator/RootNavigator";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const client = new ApolloClient({
    uri: 'http://localhost:5001/api/elevated-dolphin',
    cache: new InMemoryCache(),
});

export default function App() {

    const Stack = createNativeStackNavigator();

    return (
        // @ts-ignore
        <ApolloProvider client={client}>
            <NavigationContainer>
                <RootNavigator />
                <StatusBar style="auto" />
            </NavigationContainer>
        </ApolloProvider>
  );
}
