import { ScaledSheet } from "react-native-size-matters";

export const styles = ScaledSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
        margin: '10@s',
    },


    addressWrapper: {
        borderWidth: '1@s',
        padding: '10@s',
        borderRadius: '20@s'
    },
    ShipToText: {
        fontSize: '20@s',
        fontWeight: 'bold',
        color: '#000'
    },
    UpdateWrapper: {
        flexDirection: 'row',
        justifyContent: 'flex-end',

    },
    updateText: {
        textDecorationLine: 'underline',
        fontSize: '15@s',
        color: '#000',
    },
    costValueRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    horizontalLine: {
        height: 1,
        backgroundColor: '#000',
        marginVertical: '5@vs'
    },
    doneOrderStyle:{
        backgroundColor:'#bbbbbb80',
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        top:0,
        right:0,
        left:0,
        bottom:0,
        
    }
})