import React from "react";
import { View, Text, ScrollView, SafeAreaView } from 'react-native';
import { Category } from '../../components/category';
import { CategoryListComponent } from "../../components/CategoryList";
import { Product } from '../../components/product';
import { ProductListComponent } from "../../components/ProductList";
import { dummyData, dummyProduct1, productListdata } from "../../utils/dummydata";
import { styles } from "./style";
export const HomeScreen = (props) => {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Categories</Text>
            <CategoryListComponent data={productListdata} horizontal={true} />
            <Text style={styles.headerText}>Products</Text>
            <ProductListComponent data={productListdata} numColumns={2} />
        </ScrollView>
    );
}