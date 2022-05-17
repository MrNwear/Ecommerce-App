import React from "react";
import { validate } from "./validate";

export function useInput(userInput, rules) {

    const [inputValue, setValue] = React.useState(
        {
            value: userInput,
            isValid: false,
            touched: true,
        }
    );

    const updateValue = value => {
        setValue({
            value: value,
            isValid: validate(value, rules),
            touched: true,
        });

    }
    return [inputValue, updateValue];
}