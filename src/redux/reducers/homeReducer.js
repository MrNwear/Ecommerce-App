import { APPEND_PRODUCTS, GET_PRODUCT_BY_ID, SET_CATEGORIES, SET_CATEGORIES_CHILDREN, SET_CATEGORY_PRODUCTS_NEXT_PAGE, SET_PRODUCTS } from "../actions/actionTypes";

const initialState={
home:{
    categories:null,
    products:null
},
categoriesChildren:{
},
categoryProducts:{},
categoryProductsNextPage:{},
product:{}
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return{
                ...state,
                home:{
                    ...state.home,
                    categories:action.payload.categories
                }
            }
        case SET_PRODUCTS:
            return{
                ...state,
                home:{
                    ...state.home,
                    products:action.payload.products
                }
            }
            case SET_CATEGORIES_CHILDREN:
            return{
                ...state,
                categoriesChildren:{
                    ...state.categoriesChildren,
                    [action.payload.children[0].parentId]:action.payload.children
                }
            }
            case APPEND_PRODUCTS:
                const categoryId=action.payload.categoryId;
                return{
                    ...state,
                    categoryProducts:{
                        ...state.categoryProducts,
                        [categoryId]:( state.categoryProducts[categoryId]||[]).concat(action.payload.products)
                    }
                }
                case SET_CATEGORY_PRODUCTS_NEXT_PAGE:
                    return{
                        ...state,
                        categoryProductsNextPage:{
                            ...state.categoryProductsNextPage,
                            [action.payload.categoryId]:action.payload.nextPage,
                        }
                    }
                case GET_PRODUCT_BY_ID:
                    return{
                        ...state,
                        product:action.payload.product,
                    }
            default:
                return state;
        }}

export default homeReducer;