import { Icon } from "@rneui/base";
import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { dummyData } from "../../utils/dummydata";
import { styles } from "./style";

export const AccountScreen = (props) => {
    const { navigation } = props;
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
            {rendericonAndNameRow('Profile', 'antdesign', 'user', () => { navigation.navigate('UpdateAccountScreen') })}
            {rendericonAndNameRow('Shipping Address', 'entypo', 'location-pin', () => { navigation.navigate('AddAddressScreen') })}
            {rendericonAndNameRow(' Previous Orders', 'feather', 'shopping-cart', () => { navigation.navigate('OrdersScreen') })}
            {rendericonAndNameRow(' LogOut', 'MaterialIcons', 'logout')}

        </View>
    );
}
const rendericonAndNameRow = (name, iconType, iconName, onPress) => {
    return (
        <TouchableOpacity style={styles.DataInRowWrapper} onPress={onPress}>
            <Icon name={iconName} type={iconType} />
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}