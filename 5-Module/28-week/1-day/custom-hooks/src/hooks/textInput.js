import { useState } from "react";

export const useTextInput = ({validators = [], defaultValue = ''}) => {
  const [value, setValue] = useState('');
  const updateValue = e => setValue(e.target.value)
  const validated = validators.map((validator) => validator(value));
  const failedValidators = validated.filter((validationObj) => !validationObj.pass);
  const nameErrors = failedValidators.map((validationObj) => validationObj.msg);
  return [value, updateValue, nameErrors]
};
