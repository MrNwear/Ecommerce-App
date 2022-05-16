import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { PriceComponent } from '../price';

const { width } = Dimensions.get('window');
const imageWidth = width / 2 - 15;
const imageHeight = imageWidth;
export const Product = (props) => {
    const { product } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('ProductDetails', { productId: 5 })}>
            <Image source={{ uri: product.imageUrl }} style={styles.imageStyle} />
            <PriceComponent price={product.price} discount={product.discount} />
            <Text>{product.title}</Text>
        </TouchableOpacity>
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