import { Input } from "@rneui/base";
import React, { useState } from "react";
import { View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { AppButton } from "../../components";
import { updateUserData } from "../../redux/actions";
import { useUpdateEffect } from "../../utils/useUpdateEffect";
import { styles } from "./style";

export const UpdateAccountScreen = (props) => {
    const {navigation}=props
    const success=useSelector(state=>state.auth.upadtingSuccess);
    const dispatch=useDispatch();
    const user=useSelector(state=>state.auth.user);
    const [input,setInput]=useState({value:user.name||'',isvalid:false});

    const updateInput=(value)=>{
        setInput({value, isvalid:user.name!==value && value!=''})
    }

    const UpdateHandler=()=>{
        dispatch(updateUserData(input.value));    }
useUpdateEffect(()=>{
    navigation.replace('AccountScreen');

},[success])
    return (
        <View style={styles.container}>
            <Input label='Name' onChangeText={updateInput} value={input.value}/>
            <View style={styles.buttonWrapper}>
                <AppButton title='save' onPress={UpdateHandler} disabled={!input.isvalid}/>
            </View>
        </View>
    );
}