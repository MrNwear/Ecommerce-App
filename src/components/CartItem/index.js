import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { IMAGE_URL } from "../../utils/constants.js";
import { PriceAfterDiscount } from "../../utils/helpfulFunctions.js";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton.js";
import { PriceComponent } from "../price/index.js";
import { styles } from './style.js';


export const CartItem = (props) => {
    const { cartItem } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('ProductDetails', { productId:cartItem.product._id })}>
            <Image source={{ uri: IMAGE_URL+'products/resized/'+ cartItem.product.images[0] }} style={styles.imageStyle} />
            <View style={styles.wrapper}>
                <Text numberOfLines={2}>{cartItem.product.title}</Text>
                <PriceComponent price={cartItem.product.price} discount={cartItem.product.discount} count={cartItem.count} />
                <AddToCartButton productId={cartItem.product._id} cost={PriceAfterDiscount(cartItem.product.price,cartItem.product.discount)} count={cartItem.product.increaseCount} />
            </View>
        </TouchableOpacity>
    );
}