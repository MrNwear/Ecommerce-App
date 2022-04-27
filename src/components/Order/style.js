import { ScaledSheet } from "react-native-size-matters";
import { TINT_COLOR } from "../../utils/constants";

export const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        padding: '5@s',
        margin: '5@s',
        backgroundColor: '#EDEAEF'
    },
    titleText: {
        color: '#000'
    },
    imageStyle: {
        width: '100@s',
        height: '100@s',
        marginHorizontal: '5@s'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    statusWrapper: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    statusText: {
        fontWeight: 'bold',
        fontSize: '15@s',
        color: TINT_COLOR,
    }


})