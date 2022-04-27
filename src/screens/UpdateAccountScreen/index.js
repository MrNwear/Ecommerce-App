import { Input } from "@rneui/base";
import React from "react";
import { View } from 'react-native';
import { AppButton } from "../../components";
import { styles } from "./style";

export const UpdateAccountScreen = (props) => {
    return (
        <View style={styles.container}>
            <Input label='Name' />
            <Input label='PhoneNumber' />
            <View style={styles.buttonWrapper}>
                <AppButton title='save' />
            </View>
        </View>
    );
}