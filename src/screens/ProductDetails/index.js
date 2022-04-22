import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, Image } from 'react-native';
import { PriceComponent } from '../../components/price'
import { dummyProductWithoutDiscount } from "../../utils/dummydata";
import { styles } from "./style";
import { AddToCartButton } from "../../components/AddToCartButton/AddToCartButton";

const getProduct = (productId) => {
    return dummyProductWithoutDiscount;

}
export const ProductDetails = (props) => {
    const { productId } = props;
    const product = getProduct(productId);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: product.imageUrl }} style={styles.imageStyle} />
            </View>
            <View style={styles.iconTitleWrapper}>
                <Icon name="left" type="antdesign" iconStyle={styles.iconStyle} />
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleStyle}>Product Name</Text>
                </View>
            </View>
            <View style={styles.detailsContainer}>
                <PriceComponent price={product.price} />
                <Text style={styles.descriptionStyle}>Description</Text>
                <Text>{product.description}</Text>
                <View style={styles.ButtonWrapper}>
                    <AddToCartButton />
                </View>
            </View>
        </View>
    );
}