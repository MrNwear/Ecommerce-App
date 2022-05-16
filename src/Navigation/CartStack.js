import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetails } from "../screens/ProductDetails";
import { CategoryScreen } from "../screens/CategoryScreen";
import { CartItemScreen } from "../screens/CartItemScreen";

const Stack = createNativeStackNavigator();
export const CartStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartItemScreen" component={CartItemScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductDetails} />

        </Stack.Navigator>
    )
}