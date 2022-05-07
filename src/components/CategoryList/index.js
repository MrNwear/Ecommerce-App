import React from "react";
import { FlatList } from "react-native";
import { productListdata } from "../../utils/dummydata";
import { Category } from "../category";

function renderCategoryList({ item }) {
    return (
        <Category category={item} />
    )
}
export const CategoryListComponent = (props) => {

    return (
        <FlatList {...props} renderItem={renderCategoryList} />
    )
}