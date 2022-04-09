import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
/*
export class MainButton extends React.Component {

    title = this.props.title
    color = this.props.style
    handler = this.props.onpress
    textstyle = this.props.txtstyle
    render() {


        return (<Pressable style={[styles.buttonStyle, this.color]} onPress={this.handler}>
            <Text style={[{ color: '#1F7FE5', fontSize: 18 }, this.textstyle]}>{this.title}</Text>
        </Pressable>
        );
    }
}
*/
export const MainButton = (props) => {
    const { title, style, onpress, txtstyle } = props;

    return (
        <TouchableOpacity style={[styles.buttonStyle, style]} onPress={onpress}>
            <Text style={[{ color: '#1F7FE5', fontSize: 18 }, txtstyle]}>{title}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: "white",
        width: '40%',
        borderRadius: 25,
        height: 30,
        alignItems: "center",
        justifyContent: "center"

    }

});

