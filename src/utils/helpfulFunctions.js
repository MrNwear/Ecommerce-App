import axios from "axios";
export const PriceAfterDiscount = (price, discount = 0) => {

    return price - price * discount;

}

export const Configure_Axios = () => {
    axios.defaults.baseURL = 'http://www.rncourseproject.com/app';
}

export const showError=errorMessage =>{
    alert(errorMessage);
}