import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomerScreen from "./screens/CustomerScreen";

export default function App() {
    return (
  // @ts-ignore
    <View className="">
        <CustomerScreen />
      <StatusBar style="auto" />
    </View>
  );
}
