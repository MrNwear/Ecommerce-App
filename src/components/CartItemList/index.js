import React from "react";
import { FlatList } from "react-native";
import { productListdata } from "../../utils/dummydata";
import { CartItem } from "../CartItem";
import { EmptyList } from "../EmptyList";
import styles from "./style";
const EmptyCart=()=>{
    return <EmptyList iconName={'shoppingcart'} caption={"Let's add some Items ! "}/>
}

function renderCartItemList({ item }) {
    return (
        <CartItem cartItem={item} />
    )
}
export const CartItemListComponent = (props) => {

    return (
        <FlatList {...props}
         renderItem={renderCartItemList}
          ListEmptyComponent={EmptyCart}
           contentContainerStyle={styles.list} />
    )
}