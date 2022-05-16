import React from "react";
import { validate } from "./validate";

export function useInput(userInput, rules) {

    const [inputValue, setInputValue] = React.useState(
        {
            value: userInput,
            isValid: false,
            touched: true,
        }
    );

    const updateValue = value => {
        setInputValue({
            value: value,
            isValid: validate(userInput, rules),
            touched: true,
        });

    }
    return [inputValue, updateValue];
}