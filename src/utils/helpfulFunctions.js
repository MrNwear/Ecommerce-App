export const PriceAfterDiscount = (price, discount = 0) => {

    return price - price * discount;

}