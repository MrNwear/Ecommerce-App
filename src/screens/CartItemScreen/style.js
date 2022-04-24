import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    container: {
        flex: 1,
        padding: '10@s'
    }
    ,
    buttonTitle: {
        fontSize: '18@s',
    },
    wrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    wrapperWrapper: {
        flex: 1,
        justifyContent: 'flex-end',
        padding: '10@s'
    }
})