import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGE_URL } from '../../utils/constants';
import { cutName } from '../../utils/helpfulFunctions';

const { width } = Dimensions.get('window');
const imageWidth = width / 3;
const imageHeight = imageWidth;
export const Category = (props) => {
    const { category } = props;
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={{ margin: 10 }} onPress={() => navigation.navigate('CategoryScreen', {category})}>
            <Image source={{ uri: IMAGE_URL+'cat-thumbs/resized/'+ category.image }} style={styles.imageStyle} />
            <Text>{ cutName(category.name,20)}</Text>
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