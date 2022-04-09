import React from 'react';
import { Input, Icon } from '@rneui/themed';
import { View, StyleSheet, Text } from 'react-native'
import { MainButton } from '../../components/button';
import { AppButton } from '../../components';
export const PhoneScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }} >
                <Text style={{ textAlign: 'center', color: '#000', fontWeight: '600' }}>Enter Your Phone Number</Text>
                <Input leftIcon={{ type: 'Entypo', name: 'phone' }} inputContainerStyle={{ width: '100%' }} placeholder='phone' autofocus={false} />

            </View>
            <View style={{ alignItems: 'stretch' }}>
                <AppButton title='DONE' wrapperStyle={{ marginBottom: 10 }} />
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