import { Input } from "@rneui/base";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { AppButton } from "../../components";
import { Address } from "../../components/Address";
import { addAddressData, selectedAddress } from "../../redux/actions";
import { styles } from "./style";

export const AddAddressScreen = (props) => {
    const [inputs,setInputs]=useState({});
    const [isValid,setIsValid]=useState(false);
    const dispatch=useDispatch();
    const LoadingUserData=useSelector(state=>state.auth.LoadingUserData);
    const user=useSelector(state=>state.auth.user);
    const InputsHandler=key=>{
        return value=>{
            setInputs({...inputs,[key]:value});
        }
    }

    function addButtonHandler(){
        dispatch(addAddressData(inputs));
        setInputs({});
    }
    useEffect(()=>{
        setIsValid(
            inputs.name &&
            inputs.phone &&
            inputs.city &&
            inputs.area &&
            inputs.street && 
            inputs.building
        )
            },[inputs])
    return (
                <View style={styles.container}>
        <ScrollView>

            <Input label='Name' style={{}} inputContainerStyle={styles.inputStyle} onChangeText={InputsHandler('name')} value={inputs.name || ''}/>
            <Input label='PhoneNumber' inputContainerStyle={styles.inputStyle}onChangeText={InputsHandler('phone')} value={inputs.phone || ''}/>
            <Input label='City' inputContainerStyle={styles.inputStyle} onChangeText={InputsHandler('city')} value={inputs.city || ''}/>
            <Input label='Area' inputContainerStyle={styles.inputStyle} onChangeText={InputsHandler('area')} value={inputs.area || ''}/>
            <Input label='Street' inputContainerStyle={styles.inputStyle} onChangeText={InputsHandler('street')} value={inputs.street || ''}/>
            <Input label='Building' inputContainerStyle={styles.inputStyle} onChangeText={InputsHandler('building')} value={inputs.building || ''}/>
            <View>
                <AppButton title='save' onPress={addButtonHandler} disabled={!isValid} />
            </View>
            <Text style={styles.addedAddressesTitle}>Previous Addresses</Text>
            {LoadingUserData? <ActivityIndicator /> :null}
            {

                user.addresses.map(address=>{
                    
                    return (
                    <TouchableOpacity 
                    onPress={()=>dispatch(selectedAddress(address._id))}
                    key={address._id} 
                    >
                   <Address address={address}/>
                        </TouchableOpacity>
                    )
                })}
                </ScrollView>
            
        </View>
    );
}



