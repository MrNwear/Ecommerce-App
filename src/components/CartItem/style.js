import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    container: {
        flexDirection: 'row',
        padding: '10@s'
    },
    imageStyle: {
        width: '100@s',
        height: '100@s'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    }


})