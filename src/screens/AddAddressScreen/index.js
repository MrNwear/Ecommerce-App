import { Input } from "@rneui/base";
import React from "react";
import { View } from 'react-native';
import { AppButton } from "../../components";
import { styles } from "./style";

export const AddAddressScreen = (props) => {
    return (
        <View style={styles.container}>
            <Input label='Name' style={{}} inputContainerStyle={styles.inputStyle} />
            <Input label='PhoneNumber' inputContainerStyle={styles.inputStyle} />
            <Input label='City' inputContainerStyle={styles.inputStyle} />
            <Input label='Area' inputContainerStyle={styles.inputStyle} />
            <Input label='Street' inputContainerStyle={styles.inputStyle} />
            <Input label='Building' inputContainerStyle={styles.inputStyle} />
            <View style={styles.buttonWrapper}>
                <AppButton title='save' />
            </View>
        </View>
    );
}