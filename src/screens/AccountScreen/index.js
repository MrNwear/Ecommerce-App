import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, Image } from "react-native";
import { dummyData } from "../../utils/dummydata";
import { styles } from "./style";

export const AccountScreen = (props) => {
    return (
        <View style={styles.conatiner}>
            <View style={styles.contactWrapper}>
                <Image source={{ uri: dummyData.imageUrl }} style={styles.imageStyle} />
                <View style={styles.verticalLine} />
                <View style={styles.nameAndNumberWrapper}>
                    <Text>{dummyData.name}</Text>
                    <Text>{dummyData.number}</Text>
                </View>
            </View>
            {rendericonAndNameRow('Profile', 'antdesign', 'user')}
            {rendericonAndNameRow('Shipping Address', 'entypo', 'location-pin')}
            {rendericonAndNameRow(' Previous Orders', 'feather', 'shopping-cart')}
            {rendericonAndNameRow(' LogOut', 'MaterialIcons', 'logout')}

        </View>
    );
}
const rendericonAndNameRow = (name, iconType, iconName) => {
    return (
        <View style={styles.DataInRowWrapper}>
            <Icon name={iconName} type={iconType} />
            <Text>{name}</Text>
        </View>
    );
}