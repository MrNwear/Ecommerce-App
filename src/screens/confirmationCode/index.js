import React from 'react';
import { Input, Icon } from '@rneui/themed';
import { View, StyleSheet, Text } from 'react-native'
import { MainButton } from '../../components/button';
import { AppButton } from '../../components';
import { useInput } from '../../utils/useInput';
import axios from 'axios';
import { TOKEN_KEY, USER_KEY } from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { setToken, setUser } from '../../redux/actions';
const ConfirmaionCodeScreen = (props) => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useInput('', [{ key: 'isConfirmationCode' }]);
    const [isLoading, setIsLoading] = React.useState(false);
    const { phone } = props.route.params;
    const handleAction = () => {
        if (inputValue.isValid) {
            setIsLoading(true);
            axios.post('/verify/validate', { phone, code: inputValue.value })
                .then(response => {
                    const { token, userData } = response.data;
                    dispatch(setToken(token));
                    dispatch(setUser(userData));
                    axios.defaults.headers.Authorization = 'Bearer ' + token;
                    AsyncStorage.setItem(TOKEN_KEY, token);
                    AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));

                })
                .catch(error => {
                    console.log('error ' + error);
                })
                .finally(() => {
                    setIsLoading(false);
                })
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