import React, { useEffect, useState } from 'react';
import { AppButton } from '../index';
import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AddItem, updateCartItem } from '../../redux/actions/cartActions';
import { useUpdateEffect } from '../../utils/useUpdateEffect';
import { showError } from '../../utils/helpfulFunctions';
import { errorCodesMapper } from '../../utils/errorCodes';
export const AddToCartButton = (props) => {
    const {productId , cost , count}=props;
    const cartItems=useSelector(state=>state.cart.items);
    const matchingCartItem=cartItems.find(item=> item.product._id === productId);
    const cartItemCount=matchingCartItem? matchingCartItem.count:0;
    const isAddingItem=useSelector(state=>state.cart.productLoading[productId]);
    const dispatch=useDispatch();
    const fail=useSelector(state=>state.cart.failToAddItemToCart);

    useUpdateEffect(()=>{
        showError(errorCodesMapper[fail.errorCode]);
    },[fail])
    const renderInitialButton = () => {
        return <AppButton onPress={increaseQuantity} isLoading={isAddingItem}  title='Add to Cart' wrapperStyle={{ backgroundColor: '#294B69', borderColor: '#294B69' }} />
    }
    const renderIcrementDecrementButton = () => {
        return (
            <View style={{ backgroundColor: '#fff', flexDirection: 'row', padding: 5, marginHorizontal: 5, paddingHorizontal: 5, alignItems: 'center', justifyContent: 'center' }}>
                <AppButton onPress={decreaseQuantity} title='-' />
                <Text style={{ paddingHorizontal: 15 }}>{cartItemCount}</Text>
                <AppButton onPress={increaseQuantity} title='+'  />
            </View>
        );
    }
    const increaseQuantity = () => {
        if(cartItemCount===0)
            dispatch(AddItem(productId,cost,count));
        else{
            dispatch(updateCartItem(matchingCartItem._id||productId,'increase',count));
        }
        
    }
    const decreaseQuantity = () => {
        const action=cartItemCount!==1 ? 'decrease':'delete';
        dispatch(updateCartItem(matchingCartItem._id,action,count)); 
    }
    return (cartItemCount ? renderIcrementDecrementButton() : renderInitialButton());

}