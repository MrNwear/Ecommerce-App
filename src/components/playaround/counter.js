import React from "react";
import { view, Button, Text, View } from 'react-native';
import { PlatformTouchable } from "../platformTouchable";
export class Counter extends React.Component {

    state = { counter: 0 }
    IncrementHandler = () => { this.setState(previousState => ({ counter: previousState.counter + 1 })) };
    DecrementHandler = () => { this.state.counter == 0 ? this.state.counter : this.setState(previousState => ({ counter: previousState.counter - 1 })) };

    render() {
        return (
            <View style={{ alignItems: "center" }}>
                <PlatformTouchable>
                    <Button title="Increment" onPress={this.IncrementHandler} />
                </PlatformTouchable>
                <Text>{this.state.counter}</Text>
                <Button title="Decrement" onPress={this.DecrementHandler} />
            </View>
        );
    }
}