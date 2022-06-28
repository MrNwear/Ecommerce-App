import axios from "axios";
import {config} from 'api-request-biolerplate-actions';
import store from "../redux/store";
import { BASE_URL } from "./constants";

export const PriceAfterDiscount = (price, discount = 0) => {

    return (price - price * discount).toFixed(2);

}

export const Configure_Axios = () => {
    axios.defaults.baseURL = BASE_URL;
}

export const showError=errorMessage =>{
    alert(errorMessage);
}
export const cutName=(name,len=13)=>{
    if(name.length>len){
        return name.slice(0,len-3)+'...'
    }
    return name;
}