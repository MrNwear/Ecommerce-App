import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Text } from "react-native";
import { AuthStack } from "./AurhStack";
import { HomeTabs } from "./HomeTabs";


export const AppContainer = (props) => {
    const { isAuthenticated } = props;


    return (
        <NavigationContainer>
            {isAuthenticated ? <HomeTabs /> : <AuthStack />}
        </NavigationContainer>
    )
}