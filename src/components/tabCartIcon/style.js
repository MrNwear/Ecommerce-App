import { ScaledSheet } from "react-native-size-matters";
import { TINT_COLOR } from "../../utils/constants";

const styles=ScaledSheet.create({
    badgeStyle:{
        position:'absolute',
        top:0,
        right:0,
        backgroundColor:'green',
        width:'12@s',
        height:'12@s',
        borderRadius:'6@s',
        justifyContent:'center',
        alignItems:'center',
    },
    itemsQuantityStyle:{
        color:'white',
        fontSize:'10@s'
    },
    iconStyle:{
        color: 'grey',
         fontSize: 24
    },
    focusedIcon:{
        color:TINT_COLOR,
    }
});

export default styles;