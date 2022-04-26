import React from "react";
import { View } from "react-native";
import { Input, Icon } from "@rneui/base";
import { styles } from "./style";


export const SearchScreen = (props) => {

    return (
        <View style={styles.container}>
            <Input placeholder="search" inputContainerStyle={styles.inputStyle} rightIcon={<Icon name="search" />} />
        </View>
    );
} 