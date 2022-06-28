import { ADD_ITEM_TO_LOADING, CLEAR_ITEM_TO_LOADING, FAIL_TO_ADD_ITEM, GET_CART_ITEMS, IMMEDIATE_UPDATE_CART_ITEM, MAKE_ORDER_SUCCESS } from "../actions/actionTypes";

const initialState={
    items:[],
    orderSuccess:null,
    productLoading:{},
    failToAddItemToCart:null
};
const cartReducer=(state=initialState,action)=>{

     switch (action.type){
         case GET_CART_ITEMS:
             return{
                 ...state,
                 items:action.payload.items,
             }
         case MAKE_ORDER_SUCCESS:
             return{
                 ...state,
                 orderSuccess:{}
                }
        case ADD_ITEM_TO_LOADING:
            return{
                ...state,
                [action.payload.productId]:true
            }
        case CLEAR_ITEM_TO_LOADING:
            return{
                ...state,
                [action.payload.productId]:false
            }
        case FAIL_TO_ADD_ITEM:
            return{
                ...state,
                failToAddItemToCart:{errorCode:action.payload.errorCode},
            }
        case IMMEDIATE_UPDATE_CART_ITEM:
            if(action.payload.action==='delete'){
                return{
                    ...state,
                    items:state.items.filter(item=>item._id !== action.payload.cartItemId),
                }
            }
            else{
                return{
                    ...state,
                    items:state.items.map(item=>{
                        if(item._id===action.payload.cartItemId){
                            return{
                                ...item,
                                count:action.payload.action==='increase' ? item.count+1: item.count -1,
                            }
                        }
                        return item;
                    })
                }
            }
             default:
                 return state;
                }
}

export default cartReducer;