import React, { useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Input, Icon } from "@rneui/base";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateEffect } from '../../utils/useUpdateEffect';
import { ProductListComponent } from "../../components/ProductList";
import { fetchSearchedProducts } from "../../redux/actions/searchActions";
import { EmptyList } from "../../components/EmptyList";

export const SearchScreen = (props) => {
    const [returnedProducts,setReturnedProducts]=useState([]);
    const dispatch=useDispatch();
    const products=useSelector(state=>state.search.products);
    const [input,setInput]=useState('');
    
    useUpdateEffect(()=>{
        setReturnedProducts(returnedProducts.concat(products));
    },[products]);

    const fetchProducts=()=>{
        dispatch(fetchSearchedProducts(input,true));
    };
    const continueFetchProducts=()=>{
        dispatch(fetchSearchedProducts(input));
    };
    useUpdateEffect(()=>{
        setReturnedProducts([]);
        input && fetchProducts();
    },[input])
    return (
        <SafeAreaView style={styles.container}>
            <Input placeholder="search" inputContainerStyle={styles.inputStyle} rightIcon={<Icon name="search" />} onChangeText={setInput} />
            {
                 input  ?
            <ProductListComponent 
            data={returnedProducts}
            numColumns={2}
            onEndReached={continueFetchProducts}
            onEndReachedThreshold={0.5}/>:null
        }
        </SafeAreaView>
    );
} 