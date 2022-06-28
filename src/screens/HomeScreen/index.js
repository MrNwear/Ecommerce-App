import React, { useEffect } from "react";
import { View, Text, ScrollView } from 'react-native';
import { CategoryListComponent } from "../../components/CategoryList";
import { ProductListComponent } from "../../components/ProductList";
import { styles } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { getHomeData } from "../../redux/actions/homeActionTypes";
export const HomeScreen = (props) => {
    const categories=useSelector(state=>state.home.home.categories);
    const products=useSelector(state=>state.home.home.products);
   const dispatch=useDispatch();
   
    useEffect(()=>{
        dispatch(getHomeData());
   },[])
    return (
        <ScrollView style={styles.container}>
            
            <Text style={styles.headerText}>Categories</Text>
            <CategoryListComponent data={categories} horizontal={true} />
            <Text style={styles.headerText}>Products</Text>
            <ProductListComponent data={products} numColumns={2} />
            
        </ScrollView>
    );
}