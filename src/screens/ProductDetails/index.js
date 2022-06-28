import { Icon } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { View, Text, Image, SafeAreaView } from 'react-native';
import { PriceComponent } from '../../components/price'
import { styles } from "./style";
import { AddToCartButton } from "../../components/AddToCartButton/AddToCartButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct } from "../../redux/actions/homeActionTypes";
import { IMAGE_URL } from "../../utils/constants";
import { PriceAfterDiscount } from "../../utils/helpfulFunctions";

export const ProductDetails = (props) => {
    const { productId } = props.route.params;
    const {navigation}=props;
    const [product,setProduct]=useState();
    const reduxProduct=useSelector(state=>state.home.product);
    const dispatch=useDispatch();
    useEffect(()=>{
        if(reduxProduct && productId===reduxProduct._id){
            setProduct(reduxProduct);
        }
    },[reduxProduct]);
    useEffect(()=>{
        dispatch(fetchProduct(productId));

    },[])
    return product?(
        <SafeAreaView style={styles.container}>
            <View>

            <View style={styles.imageContainer}>
                <Image source={{ uri:IMAGE_URL+'products/'+ product.images[0] }} style={styles.imageStyle} />
            </View>
            <View style={styles.iconTitleWrapper}>
                <Icon name="arrow-back" type="Ionicons" iconStyle={styles.iconStyle} onPress={()=>navigation.goBack()}/>
                <View style={styles.titleWrapper}>
                    <Text style={styles.titleStyle} numberOfLines={1}>{product.title}</Text>
                </View>
            </View>
            </View>
            <View style={styles.detailsContainer}>
                <PriceComponent price={product.price} />
                <Text style={styles.descriptionStyle}>Description</Text>
                <Text>{product.details}</Text>
                <View style={styles.ButtonWrapper}>
                    <AddToCartButton productId={product._id} cost={PriceAfterDiscount(product.price,product.discount)} count={product.increaseCount}/>
                </View>
            </View>
        </SafeAreaView>
    ):null;
}