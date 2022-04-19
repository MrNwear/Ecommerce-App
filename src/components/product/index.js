import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { PriceComponent } from '../price';

const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = imageWidth;
export const Product = (props) => {
    const Product = props
    return (
        <View>
            <Image source={{ uri: Product.imageurl }} style={styles.imageStyle} />
            <PriceComponent price={Product.price} discount={Product.discount} />
            <Text>{Product.title}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    imageStyle: {
        width: imageWidth,
        height: imageHeight,
        resizeMode: 'contain',
        backgroundColor: '#123456'
    }
})