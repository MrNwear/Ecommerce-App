import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = imageWidth;
export const Category = (props) => {
    const { category } = props
    return (
        <View style={{ margin: 10 }}>
            <Image source={{ uri: category.imageUrl }} style={styles.imageStyle} />
            <Text>{category.title}</Text>
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