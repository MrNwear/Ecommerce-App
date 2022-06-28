import React from "react";
import { Text } from "react-native";
import { useSelector } from "react-redux";
import styles from "./style";
export const Address=(props)=>{
    const defaultAddressID=useSelector(state=>state.auth.DefaultAddressID);
    const {address}=props;
    return(<Text 
                    
    style={address._id===defaultAddressID?styles.DefaultAddressStyle:{}}>
        {`
        name : ${address.name}
        phone: ${address.phone}
        city: ${address.city}
        area: ${address.area}
        street: ${address.street}
        building: ${address.building}
        
        
        `}
    </Text>);
}