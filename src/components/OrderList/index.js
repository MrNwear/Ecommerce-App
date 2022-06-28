import React from "react";
import { FlatList } from "react-native";
import { Order } from "../Order";
function renderOrders({ item }) {
    return <Order order={item} />
}
export const OrderListComponent = (props) => {
    return (
        <FlatList {...props}
         renderItem={renderOrders} />
    );
}