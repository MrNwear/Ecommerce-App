import React from "react";
import { View, Text, Image } from 'react-native';
import { AddToCartButton } from "../AddToCartButton/AddToCartButton.js";
import { PriceComponent } from "../price/index.js";
import { styles } from './style.js';


export const Order = (props) => {
    const { order } = props;
    const firstCartItem = order.cartItems[0];
    return (
        <View style={styles.container}>
            <Image source={{ uri: firstCartItem.product.imageUrl }} style={styles.imageStyle} />
            <View style={styles.wrapper}>
                <Text style={styles.titleText}>{firstCartItem.product.title}</Text>
                <PriceComponent price={order.cost} />
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusText}>{order.orderStatus}</Text>

                </View>
            </View>
        </View>
    );
}