import React from "react";
import { View } from "react-native";
import { Order } from "../../components/Order";
import { OrderListComponent } from "../../components/OrderList";
import { dummyOrderList } from "../../utils/dummydata";
import { styles } from "./style";

export const OrdersScreen = (props) => {
    return (
        <View style={styles.container}>
            <OrderListComponent data={dummyOrderList} />
        </View>
    );
}