import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ProductDetails } from "../screens/ProductDetails";
import { SearchScreen } from "../screens/SearchScreen";

const Stack = createNativeStackNavigator();
export const SearchStack = (props) => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="SearchScreen" component={SearchScreen} options={{ headerShown: false }} />
            <Stack.Screen name='ProductDetails' component={ProductDetails}  options={{ headerShown: false }}/>

        </Stack.Navigator>
    )
}