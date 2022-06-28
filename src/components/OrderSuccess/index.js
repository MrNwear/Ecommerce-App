import React from "react";
import { View,Text, TouchableOpacity } from "react-native";
import { Icon } from "@rneui/base";
import styles from "./style";
export const OrderSuccessComponent=(props)=>{
    const {DoneHandler}=props;
    return(
        <View style={styles.container}>
            <Icon name='check-circle' iconStyle={styles.successIconStyle}/>
            <Text style={styles.congratsStyle}>Congratulations</Text>
            <Text>Thank you for making Order</Text>
            <TouchableOpacity onPress={DoneHandler}>
             <Text style={styles.DoneButtonStyle}>Done</Text>
            </TouchableOpacity>
        </View>
    )
}