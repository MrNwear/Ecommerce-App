import React, { useState } from 'react';
import { AppButton } from '../index';
import { View, Text } from 'react-native';

export const AddToCartButton = (props) => {

    const [quantity, setQuantity] = useState(0);
    const renderInitialButton = () => {
        return <AppButton onPress={increaseQuantity} title='Add to Cart' wrapperStyle={{ backgroundColor: '#294B69', borderColor: '#294B69' }} />
    }
    const renderIcrementDecrementButton = () => {
        return (
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 5, marginHorizontal: 5, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center' }}>
                <AppButton onPress={decreaseQuantity} title='-' />
                <Text style={{ paddingHorizontal: 15 }}>{quantity}</Text>
                <AppButton onPress={increaseQuantity} title='+' />
            </View>
        );
    }
    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    }
    const decreaseQuantity = () => {
        setQuantity(quantity - 1);
    }
    return (quantity ? renderIcrementDecrementButton() : renderInitialButton());

}