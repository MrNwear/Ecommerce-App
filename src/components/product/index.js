import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { PriceComponent } from '../price';

const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = imageWidth;
export const Product = (props) => {
    const { product } = props
    return (
        <View>
            <Image source={{ uri: product.imageUrl }} style={styles.imageStyle} />
            <PriceComponent price={product.price} discount={product.discount} />
            <Text>{product.title}</Text>
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