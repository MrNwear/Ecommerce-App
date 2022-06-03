import React, { useEffect, useRef } from 'react';
import { Input } from '../../components/Input';
import { View, StyleSheet, Text } from 'react-native'
import { AppButton } from '../../components';
import { useInput } from '../../utils/useInput';

import { useDispatch, useSelector } from 'react-redux';
import { useUpdateEffect } from '../../utils/useUpdateEffect';
import { SignIn } from '../../redux/actions';
import { showError } from '../../utils/helpfulFunctions';

export const PhoneScreen = (props) => {
    const { navigation } = props;
    const isLoading=useSelector(state=>state.auth.isSigningIn);
    const success=useSelector(state=>state.auth.successSigning);
    const failSigning=useSelector(state=>state.auth.failSigning);
    const dispatch=useDispatch();

    const [inputValue, setInputValue] = useInput('', [{ key: 'isPhone' }]);
   useUpdateEffect(()=>{
   navigation.navigate('ConfimationCodeScreen', { phone: inputValue.value })
}
   ,[success]);
   useUpdateEffect(()=>{
    showError('Sign In Fail');
 }
    ,[failSigning])

    const handleAction = () => {
        if (inputValue.isValid) {
          dispatch(SignIn(inputValue.value));
        }
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }} >
                <Text style={{ textAlign: 'center', color: '#000', fontWeight: '600' }}>Enter Your Phone Number</Text>
                <Input leftIcon={{ type: 'Entypo', name: 'phone' }} bordered inputContainerStyle={{ width: '100%' }} placeholder='phone' keyboardType='numeric' autofocus={false} onChangeText={setInputValue} />

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