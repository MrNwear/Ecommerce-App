import React from 'react';
import { AppButton } from '../index';
import { View, Text } from 'react-native';

export class AddToCartButton extends React.Component {

    renderInitialButton = () => {
        console.log("Hello");
        <AppButton title='Add to Cart' />
    }
    render() {
        return this.renderInitialButton();
    }
}