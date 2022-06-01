import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PhoneScreen } from "../screens/phoneScreen";
import ConfirmaionCodeScreen from "../screens/confirmationCode";

const Stack = createNativeStackNavigator();
export const AuthStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="PhoneScreen" component={PhoneScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ConfimationCodeScreen' component={ConfirmaionCodeScreen} />
        </Stack.Navigator>
    )
}