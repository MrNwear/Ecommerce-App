import React from "react";
import { View,Text } from "react-native";
import { Icon } from "@rneui/base";
import styles from "./style";
export const TabCartIcon=(props)=>{
    const {focused,cartItemsQuantity}=props;
    return(
        <View style={{marginTop:5}}>
        <Icon name="shopping-cart" iconStyle={[styles.iconStyle,focused && styles.focusedIcon]}/>
            <View style={cartItemsQuantity && styles.badgeStyle}>
            <Text style={styles.itemsQuantityStyle}>{cartItemsQuantity}</Text>

            </View>
        </View>
    );
}