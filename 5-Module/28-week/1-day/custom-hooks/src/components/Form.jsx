import { useState } from 'react';
import { textInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput';

const Form = () => {
  // const [name, setName] = useState('');
  // const validatorResults = textInputValidators.map((validator) => validator(name));
  // const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
  // const nameErrors = failedValidators.map((validationObj) => validationObj.msg)
    let [name, setName, nameErrors] = useTextInput({
    validations: textInputValidators
  });
  let [phone, setPhone, phoneErrors] = useTextInput({
    validations: textInputValidators
  });
  
  return (
    <>
      <h1>Form Component</h1>
      <form >
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
          {phoneErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={setName}
          />
        </label>
        <label htmlFor="name">
          Phone{" "}
          <input
            id="name"
            value={phone}
            onChange={setPhone}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
