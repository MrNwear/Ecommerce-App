import React, { useEffect } from "react";
import { View } from "react-native";
import { Order } from "../../components/Order";
import { OrderListComponent } from "../../components/OrderList";
import { dummyOrderList } from "../../utils/dummydata";
import { styles } from "./style";
import { getOrders } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useUpdateEffect } from "../../utils/useUpdateEffect";
import { showError } from "../../utils/helpfulFunctions";
import { errorCodesMapper } from "../../utils/errorCodes";
import { EmptyList } from "../../components/EmptyList";
export const OrdersScreen = (props) => {
    const dispatch=useDispatch();
    const orders=[];
    const fail=useSelector(state=>state.auth.getOrdersFail);
useEffect(()=>{
    dispatch(getOrders());
},[]);
useUpdateEffect(()=>{
    showError(errorCodesMapper[fail.errorCode])
},[fail])
    return (
        <View style={styles.container}>
            {orders.length===0? <EmptyList/> : <OrderListComponent data={orders} />}
        </View>
    );
}