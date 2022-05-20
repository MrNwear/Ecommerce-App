import React from 'react';
import { Input } from '../../components/Input';
import { View, StyleSheet, Text } from 'react-native'
import { MainButton } from '../../components/button';
import { AppButton } from '../../components';
import { validate } from '../../utils/validate';
import { useInput } from '../../utils/useInput';
import axios from 'axios';

export const PhoneScreen = (props) => {
    const { navigation } = props;
    const [inputValue, setInputValue] = useInput('', [{ key: 'isPhone' }]);
    const [isLoading, setIsLoading] = React.useState(false);

    const handleAction = async () => {
        if (inputValue.isValid) {
            setIsLoading(true);
            await axios.post('/verify', { phone: inputValue.value })
                .then(response => {
                    console.log(response.data)
                    navigation.replace('ConfimationCodeScreen', { phone: inputValue.value });
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