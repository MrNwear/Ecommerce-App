import { PriceAfterDiscount } from "../../utils/helpfulFunctions";

export const totalSelector=(state)=>{
    const {items}=state.cart;

    const total=items.reduce((acc,item)=>{
        return acc + item.count * +PriceAfterDiscount(item.product.price,item.product.discount);
    },0);
    return total;
}