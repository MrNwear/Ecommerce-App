import React from 'react';
import { Input, Icon } from '@rneui/themed';
import { View, StyleSheet, Text } from 'react-native'
import { AppButton } from '../../components';
import { useInput } from '../../utils/useInput';
import { useDispatch, useSelector } from 'react-redux';
import { ConfirmCode} from '../../redux/actions';
import { useUpdateEffect } from '../../utils/useUpdateEffect';
import { showError } from '../../utils/helpfulFunctions';
const ConfirmaionCodeScreen = (props) => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useInput('', [{ key: 'isConfirmationCode' }]);
    const isLoading=useSelector(state=>state.auth.isSigningIn);
    const failConfirmingCode=useSelector(state=>state.auth.failConfirming);
    const { phone } = props.route.params;
    useUpdateEffect(()=>{
        showError('Confirmation code is not valid');
     }
        ,[failConfirmingCode])

    const handleAction = () => {
        if (inputValue.isValid) {
            dispatch(ConfirmCode(phone,inputValue.value))
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }} >
                <Text style={{ textAlign: 'center', color: '#000', fontWeight: '600' }}>Enter Confirmation Code</Text>
                <Input inputContainerStyle={{ width: '100%', alignContent: 'center' }} inputStyle={{ textAlign: 'center' }} placeholder='- - - -' autofocus={false} onChangeText={setInputValue} keyboardType='numeric' keyboardAppearance='light' maxLength={4} />

            </View>
            <View style={{ alignItems: 'stretch' }}>
                <AppButton title='DONE' wrapperStyle={{ marginBottom: 10 }} onPress={handleAction} disabled={!inputValue.isValid} isLoading={isLoading} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10, justifyContent: 'space-between'
    }
})
export default ConfirmaionCodeScreen;