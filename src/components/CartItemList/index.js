import React from "react";
import { FlatList } from "react-native";
import { productListdata } from "../../utils/dummydata";
import { CartItem } from "../CartItem";


function renderCartItemList({ item }) {
    return (
        <CartItem cartItem={item} />
    )
}
export const CartItemListComponent = (props) => {

    return (
        <FlatList {...props} renderItem={renderCartItemList} />
    )
}