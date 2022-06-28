import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetails } from "../screens/ProductDetails";
import { CartItemScreen } from "../screens/CartItemScreen";
import { CheckOutScreen } from "../screens/CheckOutScreen";
import { AddAddressScreen } from "../screens/AddAddressScreen";
const Stack = createNativeStackNavigator();
export const CartStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartItemScreen" component={CartItemScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} options={{ headerShown: false }} />
            <Stack.Screen name='CheckOutScreen' component={CheckOutScreen}/>
            <Stack.Screen name='AddAddressScreen' component={AddAddressScreen}/>

        </Stack.Navigator>
    )
}