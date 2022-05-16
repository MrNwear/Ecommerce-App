import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AccountScreen } from "../screens/AccountScreen";
import { AddAddressScreen } from "../screens/AddAddressScreen";
import { UpdateAccountScreen } from "../screens/UpdateAccountScreen";
import { OrdersScreen } from "../screens/OrdersScreen";

const Stack = createNativeStackNavigator();
export const AccountStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="AccountScreen" component={AccountScreen} options={{ headerShown: false }} />
            <Stack.Screen name='AddAddressScreen' component={AddAddressScreen} />
            <Stack.Screen name='UpdateAccountScreen' component={UpdateAccountScreen} />
            <Stack.Screen name='OrdersScreen' component={OrdersScreen} />
        </Stack.Navigator>
    )
}