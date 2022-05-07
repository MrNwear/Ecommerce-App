import React from "react";
import { View, Text } from 'react-native';
import { AppButton } from "../../components";
import { CartItem } from "../../components/CartItem";
import { CartItemListComponent } from "../../components/CartItemList";
import { Currency } from "../../utils/constants";
import { dummyCartItemList } from "../../utils/dummydata";
import { styles } from "./style";
export const CartItemScreen = (props) => {
    return (
        <View style={styles.container}>
            <CartItemListComponent data={dummyCartItemList} />


            <View style={styles.wrapper}>
                <Text>Total = 1325 {Currency}</Text>
                <AppButton title='CheckOut' titleStyle={styles.buttonTitle} />
            </View>

        </View>
    );
}