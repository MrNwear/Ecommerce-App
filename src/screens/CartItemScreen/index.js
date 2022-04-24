import React from "react";
import { View, Text } from 'react-native';
import { AppButton } from "../../components";
import { CartItem } from "../../components/CartItem";
import { Currency } from "../../utils/constants";
import { dummyCartItem } from "../../utils/dummydata";
import { styles } from "./style";
export const CartItemScreen = (props) => {
    return (
        <View style={styles.container}>
            <CartItem cartItem={dummyCartItem} />

            <View style={styles.wrapperWrapper}>
                <View style={styles.wrapper}>
                    <Text>Total = 1325 {Currency}</Text>
                    <AppButton title='CheckOut' titleStyle={styles.buttonTitle} />
                </View>
            </View>
        </View>
    );
}