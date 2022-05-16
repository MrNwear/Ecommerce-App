import React from "react";
import { View, Text } from 'react-native';
import { Product } from '../../components/product';
import { dummyProduct1 } from "../../utils/dummydata";
import { styles } from "./style";
export const CategoryScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Products</Text>
            <Product product={dummyProduct1} />
        </View>
    );
}