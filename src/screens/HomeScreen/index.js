import React from "react";
import { View, Text } from 'react-native';
import { Category } from '../../components/category';
import { Product } from '../../components/product';
import { dummyData, dummyProductWithoutDiscount } from "../../utils/dummydata";
import { styles } from "./style";
export const HomeScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Categories</Text>
            <Category category={dummyData} />
            <Text style={styles.headerText}>Products</Text>
            <Product product={dummyProductWithoutDiscount} />
        </View>
    );
}