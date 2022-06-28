import { ScaledSheet } from "react-native-size-matters";
import { TINT_COLOR } from "../../utils/constants";

const styles=ScaledSheet.create({
    imageStyle:{
        width:'100@s',
        height:'100@s',
        borderRadius:"50@s"

    },
    container:{
        padding:'5@s'
    },
    titleStyle:{
        textAlign:'center',
    },
    titleWrapper:{
        height:'50@s',
    },
    selectedCategoryStyle:{
        color:TINT_COLOR,
    }
})
export default styles;