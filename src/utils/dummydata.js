export const dummyData = {
    imageUrl: 'https://pic.onlinewebfonts.com/svg/img_568657.png',
    title: 'black T-Shirt',
    name: 'Yousef Nwear',
    number: '01067979852'
}

export const dummyProductWithDiscount = {
    title: 'T-shirt',
    price: 100,
    imageUrl: 'https://e7.pngegg.com/pngimages/3/819/png-clipart-printed-t-shirt-polo-shirt-clothing-t-shirt-tshirt-fashion.png',
    discount: 0.2,
    description: 'wonderful black T-shirt , it is very hahaha ',
}
export const dummyProductWithoutDiscount = {
    title: 'T-shirt',
    price: 100,
    imageUrl: 'https://e7.pngegg.com/pngimages/3/819/png-clipart-printed-t-shirt-polo-shirt-clothing-t-shirt-tshirt-fashion.png',
    description: 'wonderful black T-shirt , it is very hahaha ',

}
export const dummyCartItem = {
    product: dummyProductWithDiscount
}
export const dummyOrder = {
    cartItems: [dummyCartItem],
    cost: 200,
    orderStatus: 'Delivered'
}