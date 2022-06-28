import React,{useEffect,useState} from "react";
import { View, Text, TouchableOpacity } from 'react-native';
import { useSelector,useDispatch } from "react-redux";
import { Address } from "../../components/Address";
import { AppButton } from '../../components/index';
import { totalSelector } from "../../redux/selectors/totalSelectors";
import { Currency } from "../../utils/constants";
import { styles } from "./style";
import {OrderSuccessComponent} from '../../components/OrderSuccess';
import {makeOrder} from '../../redux/actions/cartActions.js';
import { useUpdateEffect } from '../../utils/useUpdateEffect';
export const CheckOutScreen = (props) => {
    const {navigation}=props;
    const addresses=useSelector(state=>state.auth.user.addresses);
    const defaultAddressID=useSelector(state=>state.auth.DefaultAddressID);
    const defaultShippingAddress=addresses.find(item=> item._id === defaultAddressID);
    const total=useSelector(totalSelector);
    const dispatch=useDispatch();
    const [showOrderSuccess,setShowOrderSuccess]=useState(false);
    let hasAddress=defaultShippingAddress? true:false;
    const success=useSelector(state=>state.cart.orderSuccess);
    useUpdateEffect(()=>{
        setShowOrderSuccess(true);
    },[success]);
    const DoneHandler=()=>{
        setShowOrderSuccess(false);
    }
    return (
        <View style={styles.container}>

            {renderAddressSection(defaultShippingAddress,navigation)}
            {renderShippingDetailsSection(total)}
            {renderBuyButton(hasAddress,dispatch)}
            {showOrderSuccess? 
            <View style={styles.doneOrderStyle}>
            <OrderSuccessComponent DoneHandler={DoneHandler}/>
            </View>
            :null}
        </View>
    );
}


const renderAddressSection = (address,navigation) => {
    return (
        <View style={styles.addressWrapper}>
            <Text style={styles.ShipToText}>Ship To</Text>
            { address?
            <Address address={address}/>:
            <Text>Click Update to Add or Choose Address</Text>
            
            }
            <TouchableOpacity style={styles.UpdateWrapper} onPress={()=> navigation.navigate('AddAddressScreen')}>
                <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>
        </View>
    )
}
const renderCostValueRow = (key, value) => {
    return (
        <View style={styles.costValueRow}>
            <Text>{key}</Text>
            <Text>{value}</Text>

        </View>
    );
}
const renderShippingDetailsSection = (total) => {

    return (
        <View>
            {renderCostValueRow('Cost', Currency + total)}
            {renderCostValueRow('Shipping', 'free')}
            <View style={styles.horizontalLine} />
            {renderCostValueRow('Total', Currency + total)}
        </View>
    );
}
const renderBuyButton = (hasAddress,dispatch) => {
    return <AppButton title='Buy' disabled={!hasAddress} onPress={()=>dispatch(makeOrder())} />;
}