import { ScaledSheet } from "react-native-size-matters";
import { TINT_COLOR } from "../../utils/constants";
const styles = ScaledSheet.create({
    oldPriceifDiscountStyle: {
        textDecorationLine: 'line-through',
        paddingHorizontal: '5@s'
    },
    container: {
        flexDirection: 'row',

    },
    pricestyle: {
        fontSize: '18@s',
        color: TINT_COLOR
    }
});

export default styles;