import { useState } from "react";

export const useTextInput = ({validations = [], defaultValue = ''}) => {
    const [value, setValue] = useState(defaultValue);

    const validatorResults = validations.map((validator) => {
        return validator(value)
    });

    const updateValue = e => {
        setValue(e.target.value)
    }
    
    const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
    const errors = failedValidators.map((validationObj) => validationObj.msg);
  return [value, updateValue, errors]
};
