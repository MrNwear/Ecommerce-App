import { APPEND_SEARCH_PRODUCTS, SET_SEARCH_PAGE } from "../actions/actionTypes";

const initialState={
    products:[],
    page:1
};
const searchReducer=(state=initialState,action)=>{
     switch (action.type){
        case APPEND_SEARCH_PRODUCTS:
            return{
                ...state,
                products:action.payload.products,
            }  
        case SET_SEARCH_PAGE:
            return{
                ...state,
                page:action.payload.nextPage,
            }
        default:{
            return state;
        }  
     }
}
export default searchReducer;