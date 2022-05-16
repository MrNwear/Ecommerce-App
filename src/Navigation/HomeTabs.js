import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../screens/HomeScreen";
import { Text } from "@rneui/base";
import { CartItemScreen } from "../screens/CartItemScreen";
import { AccountScreen } from "../screens/AccountScreen";
import { Icon } from "@rneui/base";
import { TINT_COLOR } from "../utils/constants";
import { HomeStack } from "./HomeStack";
import { CartStack } from "./CartStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";


const Tabs = createBottomTabNavigator();
export const HomeTabs = (props) => {

    return (
        <Tabs.Navigator screenOptions={({ route }) => {
            const IconName = { HomeStack: 'home', CartStack: 'shopping-cart', SearchStack: 'search', AccountStack: 'person' };
            const labels = { HomeStack: 'Shop', CartStack: 'Cart', SearchStack: 'search', AccountStack: 'Account' };
            return {
                tabBarIcon: ({ focused }) => <Icon name={IconName[route.name]} iconStyle={{ color: focused ? TINT_COLOR : 'grey', fontSize: 24 }} />,
                tabBarLabel: ({ focused }) => <Text style={{ color: focused ? TINT_COLOR : 'grey', fontSize: 16 }} >{labels[route.name]}</Text>
            }
        }
        }>
            <Tabs.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
            <Tabs.Screen name="CartStack" component={CartStack} options={{ headerShown: false }} />
            <Tabs.Screen name="SearchStack" component={SearchStack} options={{ headerShown: false }} />
            <Tabs.Screen name="AccountStack" component={AccountStack} options={{ headerShown: false }} />
        </Tabs.Navigator>
    );
}