import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhoneScreen } from "../screens/phoneScreen";
import { ConfirmaionCodeScreen } from "../screens/confirmationCode";
import { HomeScreen } from "../screens/HomeScreen";
import { ProductDetails } from "../screens/ProductDetails";
import { CategoryScreen } from "../screens/CategoryScreen";

const Stack = createNativeStackNavigator();
export const HomeStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />
            <Stack.Screen name='CategoryScreen' component={CategoryScreen} />
        </Stack.Navigator>
    )
}