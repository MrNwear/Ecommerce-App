import React from "react";
import { View, Text, Image } from 'react-native';
import { AddToCartButton } from "../AddToCartButton/AddToCartButton.js";
import { PriceComponent } from "../price/index.js";
import { styles } from './style.js';


export const CartItem = (props) => {
    const { cartItem } = props;
    return (
        <View style={styles.container}>
            <Image source={{ uri: cartItem.product.imageUrl }} style={styles.imageStyle} />
            <View style={styles.wrapper}>
                <Text>{cartItem.product.title}</Text>
                <PriceComponent price={cartItem.product.price} discount={cartItem.product.discount} />
                <AddToCartButton />
            </View>
        </View>
    );
}