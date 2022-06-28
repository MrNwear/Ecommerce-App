import React, { useCallback, useEffect, useState } from "react";
import { View, Text , ScrollView,FlatList, SafeAreaView } from 'react-native';
import { useDispatch,useSelector } from "react-redux";
import { Product } from '../../components/product';
import { getCategoriesChildren, getCategoryProducts } from "../../redux/actions/homeActionTypes";
import { dummyProduct1 } from "../../utils/dummydata";
import { styles } from "./style";
import {CategoryChildren} from '../../components/CategoryChildren';
import { ProductListComponent } from "../../components/ProductList";
export const CategoryScreen = (props) => {
    const {category}=props.route.params;
    const [selectedCategory,setSelectedCategory]=useState(category);
    const dispatch=useDispatch();
    const children=useSelector(state=>state.home.categoriesChildren[category._id] || []);
    const products=useSelector(state=>state.home.categoryProducts[selectedCategory._id]||[]);
    const renderItem=useCallback(({item})=>renderCategoryChildren(item,selectedCategory,setSelectedCategory),[selectedCategory,setSelectedCategory]);
    useEffect(()=>{
       children.length===0 && dispatch(getCategoriesChildren(category._id));
        

    },[]);

    useEffect(()=>{
        dispatch(getCategoryProducts(selectedCategory));
    },[selectedCategory])
    const handleLoadMore = () => {
       products.length===0 && dispatch(getCategoryProducts(category));
      };
    return (
            <SafeAreaView style={styles.container}>

            <FlatList data={[category,...children]}
             keyExtractor={item=>item._id}
              horizontal renderItem={renderItem} />
            
            <Text style={styles.headerText}>Products</Text>
            <ProductListComponent data={products} numColumns={2} onEndReachedThreshold={0.5} onEndReached={handleLoadMore}/>
        </SafeAreaView>
    );
}

const renderCategoryChildren=(item,selectedCategory,setSelectedCategory)=>{
    return<CategoryChildren category={item} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
}