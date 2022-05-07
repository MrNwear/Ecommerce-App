import React from "react";
import { FlatList } from "react-native";
import { productListdata } from "../../utils/dummydata";
import { Category } from "../category";
import { Product } from "../product";

function renderProductList({ item }) {
    return (
        <Product product={item} />
    )
}
export const ProductListComponent = (props) => {

    return (
        <FlatList {...props} renderItem={renderProductList} />
    )
}