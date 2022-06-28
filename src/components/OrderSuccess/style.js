import { ScaledSheet } from "react-native-size-matters";
import { TINT_COLOR } from "../../utils/constants";

const styles=ScaledSheet.create({
    container:{
        alignItems:'center',
        backgroundColor:'white',
        paddingHorizontal:'50@s',
        paddingVertical:'50@s',
        borderRadius:'20@s',
        
    },
    successIconStyle:{
        fontSize:'40@s',
        color:'green',
        marginVertical:'10@s'
    },
    DoneButtonStyle:{
        marginTop:'18@s',
        color:'green',
        fontSize:'24@s',
        padding:'5@s',
        borderRadius:'10@s',
        borderWidth:'1@s',
        borderColor:'green'

    },
    congratsStyle:{
        fontSize:'24@s',

    }
});
export default styles;