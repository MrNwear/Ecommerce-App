import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = imageWidth;
export const Category = (props) => {
    const { category } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('CategoryScreen', { productId: 5 })}>
            <Image source={{ uri: category.imageUrl }} style={styles.imageStyle} />
            <Text>{category.title}</Text>
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