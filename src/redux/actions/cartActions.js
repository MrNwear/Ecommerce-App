import axios from "axios";
import { useSelector } from "react-redux";
import {  ADD_ITEM_TO_LOADING, CLEAR_ITEM_TO_LOADING, FAIL_TO_ADD_ITEM, GET_CART_ITEMS, IMMEDIATE_UPDATE_CART_ITEM, MAKE_ORDER_SUCCESS } from "./actionTypes";
import { totalSelector } from "../selectors/totalSelectors";
const getCartItems=items=>({type:GET_CART_ITEMS,payload:{items}});
const makeOrderSuccess=()=>({type:MAKE_ORDER_SUCCESS});
const AddItemToLoading=(productId)=>({type:ADD_ITEM_TO_LOADING,payload:{productId}});
const ClearItemFromLoading=(productId)=>({type:CLEAR_ITEM_TO_LOADING,payload:{productId}});
const failToAddItem=errorCode=>({type:FAIL_TO_ADD_ITEM,payload:{errorCode}});
const immediateUpdateCartItem=(cartItemId,action)=>({type:IMMEDIATE_UPDATE_CART_ITEM,payload:{cartItemId,action}});
export const fetchCartItems=()=>{
    return(dispatch,getState)=>{
        axios.get('/cart').then(response=>{
            dispatch(getCartItems(response.data.items));
        })
        .catch(error=>{})
    }
}
export const makeOrder=()=>{
    return(dispatch,getState)=>{
        const items=getState().cart.items.map(item=>item._id);
        const totalCost=totalSelector(getState());
        const shippingAddress=getState().auth.DefaultAddressID;
        const paymentMethod=1;
        axios.post('/order',{items,totalCost,shippingAddress,paymentMethod})
        .then(response=>{
            dispatch(makeOrderSuccess());
        })
        .catch(error=>{})
    }
}
export const  AddItem=(productId,cost,count)=>{
    return(dispatch,getState)=>{
        dispatch(AddItemToLoading(productId));
        axios.post('/cart',{product:productId,cost,count})
        .then(response=>{
            dispatch(fetchCartItems());
        })
        .catch(error=>{
            dispatch(failToAddItem());
        })
        .finally(()=>{
            dispatch(ClearItemFromLoading(productId));
        })
    }
}
export const updateCartItem=(cartItemId,action,count)=>{
    
    return(dispatch,getState)=>{
        dispatch(immediateUpdateCartItem(cartItemId,action));
        axios.put('/cart',{id:cartItemId,action,count}).catch(error=>{
            dispatch(fetchCartItems());
        })
    }
}
