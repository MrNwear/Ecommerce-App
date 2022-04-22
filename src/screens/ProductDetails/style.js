import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";

const { width } = Dimensions.get('window');
const imageDim = width;
export const styles = ScaledSheet.create({

    container: {
        flex: 1
    }
    ,
    imageStyle: {
        width: imageDim,
        height: imageDim
    },

    detailsContainer: {
        flex: 1, padding: '5@s'
    },
    iconTitleWrapper: {
        position: 'absolute',
        flexDirection: 'row',
        paddingVertical: '8@s'
    },
    iconStyle: {
        color: '#123456',
        paddingStart: '5@s',
        backgroundColor: 'blue'
    },
    titleStyle: {
        color: '#fff',
        fontWeight: '700',
        fontSize: '15@s'
    },
    titleWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'


    },
    ButtonWrapper: {
        flex: 1,
        justifyContent: 'flex-end',

    },
    descriptionStyle: {

        fontSize: '18@s',
        color: '#000',
    }
})