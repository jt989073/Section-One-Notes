import { textInputValidators } from '../utils/validations';
import { useTextInput } from '../hooks/textInput';

const Form = () => {
  // const [name, setName] = useState('');
  // const validatorResults = textInputValidators.map((validator) => validator(name));
  // const failedValidators = validatorResults.filter((validationObj) => !validationObj.pass);
  // const nameErrors = failedValidators.map((validationObj) => validationObj.msg);

  const [name, updateName, nameErrors] = useTextInput({validators: textInputValidators})
  const [phone, updatePhone, PhoneErrors] = useTextInput({validators: textInputValidators})

  return (
    <>
      <h1>Form Component</h1>
      <form>
        <ul>
          {nameErrors.map(err => <li key={err}>{err}</li>)}
          {PhoneErrors.map(err => <li key={err}>{err}</li>)}
        </ul>
        <label htmlFor="name">
          Name{" "}
          <input
            id="name"
            value={name}
            onChange={updateName}
          />
        </label>
        <label htmlFor="phone">
          phone{" "}
          <input
            id="phone"
            value={phone}
            onChange={updatePhone}
          />
        </label>
      </form>
    </>
  );
};

export default Form;
