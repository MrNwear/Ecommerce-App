import React from "react";
import { Text, View ,Image, TouchableOpacity } from "react-native";
import { IMAGE_URL } from "../../utils/constants";
import { cutName } from "../../utils/helpfulFunctions";
import styles from "./style";

export const CategoryChildren=(props)=>{
    const {category ,selectedCategory,setSelectedCategory}=props;
    return(
<TouchableOpacity style={styles.container} onPress={()=>setSelectedCategory(category)}>
<Image source={{uri:IMAGE_URL+'cat-thumbs/resized/'+category.image}} style={styles.imageStyle}/>
<View style={styles.titleWrapper}>

        <Text style={[styles.titleStyle,category._id===selectedCategory._id? styles.selectedCategoryStyle:null]}>{category.parentId?cutName(category.name,15):'All'}</Text>
</View>
</TouchableOpacity>
    )
}