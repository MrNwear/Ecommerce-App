import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#fff',
        padding: '10@s'
    },
    contactWrapper: {

        flexDirection: 'row',
        marginBottom: '15@s',


    },
    imageStyle: {
        width: '100@s',
        height: '100@s',

    },
    verticalLine: {
        width: 1,
        backgroundColor: '#bbb',
        marginHorizontal: '10@s'
    },
    nameAndNumberWrapper: {
        justifyContent: 'space-around'
    },
    DataInRowWrapper: {
        flexDirection: 'row',
        padding: '10@s',
        alignItems: 'center',
        borderBottomWidth: '1@s',
        borderBottomColor: '#bbb'

    }
});