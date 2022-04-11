import React from "react";
import { Text, View } from 'react-native';
import { PriceAfterDiscount } from "../../utils/helpfulFunctions";
import styles from "./style";
import { Currency } from "../../utils/constants";
export const PriceComponent = (props) => {
    const price = props.price;
    const discount = props.discount;
    return (
        <View>
            {discount ?
                <View style={styles.container}>
                    <Text style={styles.pricestyle}>{Currency}{PriceAfterDiscount(price, discount)}</Text>
                    <Text style={styles.oldPriceifDiscountStyle}>{Currency}{price} </Text>
                </View>
                :
                <Text style={styles.pricestyle}>{Currency}{price}</Text>
            }
        </View>
    );
}