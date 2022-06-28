import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { useSelector } from "react-redux";
import { AppButton } from "../../components";
import { CartItem } from "../../components/CartItem";
import { CartItemListComponent } from "../../components/CartItemList";
import { Currency } from "../../utils/constants";
import { dummyCartItemList } from "../../utils/dummydata";
import { styles } from "./style";
import { totalSelector } from "../../redux/selectors/totalSelectors";
export const CartItemScreen = (props) => {
    const cartItems=useSelector(state=>state.cart.items);
    const {navigation}=props;
    const total=useSelector(totalSelector);
    return (
        <SafeAreaView style={styles.container}>
            <CartItemListComponent data={cartItems} />


            <View style={styles.wrapper}>
                <Text>Total = {total} {Currency}</Text>
                <AppButton title='CheckOut' titleStyle={styles.buttonTitle} onPress={()=>navigation.navigate('CheckOutScreen')} disabled={cartItems.length === 0} />
            </View>

        </SafeAreaView>
    );
}