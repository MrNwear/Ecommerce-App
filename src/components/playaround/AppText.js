import React from "react";
import { Text } from "react-native";
export class AppText extends React.Component{
    render(){
        return(
            <Text {...this.props} style={[{color:'blue'},this.props.style]}/>
        );
    }
}