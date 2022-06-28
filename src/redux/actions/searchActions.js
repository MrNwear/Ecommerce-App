import { APPEND_SEARCH_PRODUCTS, SET_SEARCH_PAGE } from "./actionTypes";
import axios from "axios";

export const appendSearchProducts=(products)=>({type:APPEND_SEARCH_PRODUCTS,payload:{products}});
export const setSearchPage=(nextPage)=>({type:SET_SEARCH_PAGE,payload:{nextPage}});
export const fetchSearchedProducts=(query,isNewQuery)=>{
    return(dispatch,getState)=>{
        const nextRequestPage=isNewQuery? 1 : getState().search.page;
        if(nextRequestPage){

            axios.get('product/search',{params:{query,page:nextRequestPage}})
            .then(Response=>{
                dispatch(appendSearchProducts(Response.data.data));
                const {lastPage,nextPage}=Response.data;
                const page=nextPage>lastPage? null:nextPage;
                dispatch(setSearchPage(page));
            })
        }
    }
}