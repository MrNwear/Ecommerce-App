import React from "react";
import { View, Text, Image } from 'react-native';
import { AddToCartButton } from "../AddToCartButton/AddToCartButton.js";
import { PriceComponent } from "../price/index.js";
import { styles } from './style.js';
import { IMAGE_URL, orderStatusMapper } from "../../utils/constants.js";

export const Order = (props) => {
    const { order } = props;
    const firstCartItem = order.items[0];

    return (
        <View style={styles.container}>
            <Image source={{ uri: firstCartItem!=undefined? IMAGE_URL+'products/resized/'+ firstCartItem.product.images[0]:'https://icon-library.com/images/order-icon-png/order-icon-png-25.jpg' }} style={styles.imageStyle} />
            <View style={styles.wrapper}>
                <Text numberOfLines={1} style={styles.titleText}>{firstCartItem!=undefined? firstCartItem.product.title:'harmed'}</Text>
                <PriceComponent price={order.totalCost} />
                <View style={styles.statusWrapper}>
                    <Text style={styles.statusText}>{orderStatusMapper[order.status]}</Text>

                </View>
            </View>
        </View>
    );
}