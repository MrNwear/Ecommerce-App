import React from "react";
import { Text, View } from 'react-native';
import { PriceAfterDiscount } from "../../utils/helpfulFunctions";
import styles from "./style";
import { Currency } from "../../utils/constants";
export const PriceComponent = (props) => {
    
    const {price,discount,count}=props;
    const actualCount=count || 1;
    return (
        <View>
            {discount ?
                <View style={styles.container}>
                    <Text style={styles.pricestyle}>{Currency}{(actualCount * PriceAfterDiscount(price, discount))}</Text>
                    <Text style={styles.oldPriceifDiscountStyle}>{Currency}{actualCount * price} </Text>
                </View>
                :
                <Text style={styles.pricestyle}>{Currency}{actualCount * price}</Text>
            }
        </View>
    );
}