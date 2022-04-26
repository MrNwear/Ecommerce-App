import React from "react";
import { View, Text } from 'react-native';
import { AppButton } from '../../components/index';
import { Currency } from "../../utils/constants";
import { styles } from "./style";



export const CheckOutScreen = (props) => {


    return (
        <View style={styles.container}>

            {renderAddressSection()}
            {renderShippingDetailsSection()}
            {renderBuyButton()}

        </View>
    );
}

const address = `Cairo,Egypt
zahraa madinet Nasr`;
const renderAddressSection = () => {
    return (
        <View style={styles.addressWrapper}>
            <Text style={styles.ShipToText}>Ship To</Text>
            <Text>{address}</Text>
            <View style={styles.UpdateWrapper}>
                <Text style={styles.updateText}>Update</Text>
            </View>
        </View>
    )
}
const renderCostValueRow = (key, value) => {
    return (
        <View style={styles.costValueRow}>
            <Text>{key}</Text>
            <Text>{value}</Text>

        </View>
    );
}
const renderShippingDetailsSection = () => {
    return (
        <View>
            {renderCostValueRow('Cost', Currency + '200')}
            {renderCostValueRow('Shipping', 'free')}
            <View style={styles.horizontalLine} />
            {renderCostValueRow('Total', Currency + '200')}
        </View>
    );
}
const renderBuyButton = () => {
    return <AppButton title='Buy' />;
}