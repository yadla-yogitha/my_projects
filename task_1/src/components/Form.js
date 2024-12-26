import React, { useState } from 'react';
import '../styles/form.css'

const MyForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [checkboxValues, setCheckboxValues] = useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
  });
  const [selectedRadio, setSelectedRadio] = useState('');
  const [textValue1, setTextValue1] = useState('');
  const [textValue2, setTextValue2] = useState('');

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    const checkboxName = e.target.name;
    setCheckboxValues((prevValues) => ({
      ...prevValues,
      [checkboxName]: !prevValues[checkboxName],
    }));
  };

  const handleRadioChange = (e) => {
    setSelectedRadio(e.target.value);
  };

  const handleText1Change = (e) => {
    setTextValue1(e.target.value);
  };

  const handleText2Change = (e) => {
    setTextValue2(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    console.log('Form submitted:', {
      selectedDate,
      selectedOption,
      checkboxValues,
      selectedRadio,
      textValue1,
      textValue2,
    });
  };

  return (
  <div className='form-section' id='form'>  
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Date:
        <input type="date" value={selectedDate} onChange={handleDateChange} />
      </label>
      <label>
        Dropdown:
        <select value={selectedOption} onChange={handleDropdownChange}>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </label>
      <label>
        Checkboxes:
        <label>
          <input
            type="checkbox"
            name="checkbox1"
            checked={checkboxValues.checkbox1}
            onChange={handleCheckboxChange}
          />
          Checkbox 1
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox2"
            checked={checkboxValues.checkbox2}
            onChange={handleCheckboxChange}
          />
          Checkbox 2
        </label>
        <label>
          <input
            type="checkbox"
            name="checkbox3"
            checked={checkboxValues.checkbox3}
            onChange={handleCheckboxChange}
          />
          Checkbox 3
        </label>
      </label>
      <label>
        Radio Buttons:
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="radio1"
            checked={selectedRadio === 'radio1'}
            onChange={handleRadioChange}
          />
          Radio 1
        </label>
        <label>
          <input
            type="radio"
            name="radioGroup"
            value="radio2"
            checked={selectedRadio === 'radio2'}
            onChange={handleRadioChange}
          />
          Radio 2
        </label>
      </label>

      <label>
        Text Box 1:
        <input type="text" value={textValue1} onChange={handleText1Change} />
      </label>

      <label>
        Text Box 2:
        <input type="text" value={textValue2} onChange={handleText2Change} />
      </label>

      <button type="submit">Submit</button>
    </form>
</div>
  );
};

export default MyForm;
