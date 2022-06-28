import axios from "axios";
import { APPEND_PRODUCTS, GET_PRODUCT_BY_ID, SET_CATEGORIES, SET_CATEGORIES_CHILDREN, SET_CATEGORY_PRODUCTS_NEXT_PAGE, SET_PRODUCTS } from "./actionTypes";


export const setCategories = categories => ({ type: SET_CATEGORIES, payload: { categories } });
export const setProducts = products => ({ type: SET_PRODUCTS, payload: { products } });
export const setCategoriesChildren=children=>({type:SET_CATEGORIES_CHILDREN,payload:{children}});
export const getProductByID=product=>({type:GET_PRODUCT_BY_ID, payload:{product}});
export const getHomeData=()=>{
    return(dispatch,getState)=>{
        dispatch(getCategories());
        dispatch(getProducts());
    }
}

export const getCategories=()=>{
    return(dispatch,getState)=>{
        axios.get('/category/get-parents').then(response=>{
            dispatch(setCategories(response.data.cats))
        })
    }
}

export const getProducts=()=>{
    return(dispatch,getState)=>{
        axios.get('/product/best-seller').then(response=>{
            dispatch(setProducts(response.data.products));
        })
    }
}
export const getCategoriesChildren=(categoryID)=>{
    return(dispatch,getState)=>{
        axios.get('/category/get-children/'+categoryID).then(response=>{
            dispatch(setCategoriesChildren(response.data.children));
        })
    }
}
export const appendProducts=(categoryId,products)=>(
    {type:APPEND_PRODUCTS,
    payload:{categoryId,products}
    }
)
export const setCategoryProductsNextPage=(categoryId,nextPage)=>({type:SET_CATEGORY_PRODUCTS_NEXT_PAGE,payload:{categoryId,nextPage}});
export const getCategoryProducts=(category)=>{
    return(dispatch,getState)=>{
        const endPoint=category.parentId? '/product/category/':'/product/parent-category/';
        let nextRequestPage=getState().home.categoryProductsNextPage[category._id];
        nextRequestPage=nextRequestPage===undefined? 1:nextRequestPage;
         if(nextRequestPage){

             axios.get(endPoint,{params:{id:category._id,page:nextRequestPage}}).then(response=>{
                 dispatch(appendProducts(category._id,response.data.data));
                 const {lastPage,nextPage}=response.data;
                 const page=nextPage>lastPage? null:nextPage;
                 dispatch(setCategoryProductsNextPage(category._id,page));
                })
                .catch(error=>{});
            }
        }
}

export const fetchProduct=(productId)=>{
    return(dispatch,getState)=>{
        axios.get('/product-by-id/'+productId).then((response)=>{
            dispatch(getProductByID(response.data.product))
        })
        .catch(error=>{})
    }
}