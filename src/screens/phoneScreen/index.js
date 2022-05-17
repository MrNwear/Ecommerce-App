import React from 'react';
import { Input } from '../../components/Input';
import { View, StyleSheet, Text } from 'react-native'
import { MainButton } from '../../components/button';
import { AppButton } from '../../components';
import { validate } from '../../utils/validate';
import { useInput } from '../../utils/useInput';

export const PhoneScreen = (props) => {
    const { navigation } = props;
    const [inputValue, setInputValue] = useInput('', [{ key: 'isPhone' }]);
    const handleAction = () => {
        if (!inputValue.isValid) {
            alert('wrong Phone Number');
            return;
        }
        navigation.replace('ConfimationCodeScreen');
    }
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }} >
                <Text style={{ textAlign: 'center', color: '#000', fontWeight: '600' }}>Enter Your Phone Number</Text>
                <Input leftIcon={{ type: 'Entypo', name: 'phone' }} bordered inputContainerStyle={{ width: '100%' }} placeholder='phone' autofocus={false} onChangeText={setInputValue} />

            </View>
            <View style={{ alignItems: 'stretch' }}>
                <AppButton title='DONE' wrapperStyle={{ marginBottom: 10 }} onPress={handleAction} />
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