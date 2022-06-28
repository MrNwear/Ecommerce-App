import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { IMAGE_URL } from '../../utils/constants';
import { cutName } from '../../utils/helpfulFunctions';
import { PriceComponent } from '../price';

const { width } = Dimensions.get('window');
const imageWidth = width / 2 - 15;
const imageHeight = imageWidth;
export const Product = (props) => {
    const { product } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ margin: 5 }} onPress={() => navigation.navigate('ProductDetails', { productId: product._id })}>
            <Image source={{ uri: IMAGE_URL+'products/resized/'+ product.images[0]}} style={styles.imageStyle} />
            <PriceComponent price={product.price} discount={product.discount} />
            <Text>{cutName(product.title,22)}</Text>
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