import React from 'react';
import { Input, Icon } from '@rneui/themed';
import { View, StyleSheet, Text } from 'react-native'
import { MainButton } from '../../components/button';
import { AppButton } from '../../components';
export const ConfirmaionCodeScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }} >
                <Text style={{ textAlign: 'center', color: '#000', fontWeight: '600' }}>Enter Confirmation Code</Text>
                <Input inputContainerStyle={{ width: '100%', alignContent: 'center' }} inputStyle={{ textAlign: 'center' }} placeholder='- - - -' autofocus={false} />

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