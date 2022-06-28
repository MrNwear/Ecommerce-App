import { Icon } from "@rneui/base";
import React from "react";
import { View,Text } from "react-native";
import styles from "./style";

export const EmptyList=(props)=>{
    const {iconName,caption}=props;
    return(
        <View style={styles.container}>
            <Icon name={iconName || "frowno"} type="antdesign" iconStyle={styles.iconStyle}/>
            <Text>{caption || 'No Data Found'}</Text>
        </View>
    );
}