import React from "react";
import { View } from "react-native";
import { Order } from "../../components/Order";
import { dummyOrder } from "../../utils/dummydata";
import { styles } from "./style";

export const OrdersScreen = (props) => {
    return (
        <View style={styles.container}>
            <Order order={dummyOrder} />
        </View>
    );
}