// GATSBY CLEAN WHEN MAKING FORM CHANGES THAT DON"T SEEM TO UPDATE!
import React, { useState } from 'react';
import {
  Button,
  TextField,
  MenuItem,
  Select,
  Radio,
  FormControl,
  FormGroup,
  FormLabel,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  FormHelperText,
  Checkbox,
  Box,
} from '@material-ui/core';
import { determinColor } from '../lib/helperFunctions';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function FormNetlify({
  align,
  title,
  formFields,
  name,
  thankYou,
  submitBtn,
  formFieldsStyle,
  colorSettings,
  border,
  borderRadius,
  borderColor,
  boxShadow,
}) {
  console.log(formFields);
  const [state, setState] = useState({});
  const [success, setSuccess] = useState(false);
  // const [validated, setValidated] = useState(false);
  let isValid = true;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const sendForm = (form) => {
    const inputs = form.elements;
    const formData = new FormData(form);

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < inputs.length - 1; index++) {
      const element = inputs[index];
      console.log(element);
      console.log(element.name);
      console.log(element.validity.valid);
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          isValid = false;
        }
      }
    }
    console.log(`Post For loop ${isValid}`);
    console.log(state);
    console.log(form);
    console.log(formData);
    console.log(new URLSearchParams(formData).toString());
    console.log(
      encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    );

    if (isValid) {
      console.log('attempting to fetch');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          'bot-field': form.elements['bot-field'].value,
          ...state,
        }),
        // body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          console.log('fetch sucessful');
          // setValidated(false);
          form.reset();
          setSuccess(true);
        })
        // should set up also error message as well should the form fail to send.
        .catch((error) => alert(error));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const myForm = event.currentTarget;

    if (myForm.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    // setValidated(true);
    isValid = true;
    setSuccess(false);
    sendForm(myForm);
  };

  const backgroundColor = determinColor(colorSettings?.background?.color) || 'primary.main';
  const foregroundColor = determinColor(colorSettings?.foreground?.color) || 'primary.contrastText';

  return (
    <Box
      // bgcolor={backgroundColor}
      // color={foregroundColor}
      border={border}
      borderRadius={borderRadius}
      borderColor={borderColor}
      boxShadow={5}
      p={6}
    >
      <Box textAlign={align} fontSize="body1.fontSize">
        <p>{title}</p>
      </Box>

      <form
        name={name}
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        noValidate
        // validated={validated}
        onSubmit={handleSubmit}
        id={name}
        autoComplete="off"
      >
        <p className="hidden" style={{ display: 'none' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Don&apos;t fill this out if you&apos;re human:
            <input name="bot-field" onChange={handleChange} />
          </label>
        </p>

        {success && <p>{thankYou}</p>}

        <input type="hidden" name="form-name" value={name} />
        {formFields.map((input) => {
          const { _type, _key } = input;

          switch (_type) {
            case 'checkbox':
              return (
                <div key={_key}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{input.label}</FormLabel>
                    <FormGroup>
                      {input.options.map((option) => {
                        const key = option.value;
                        const isChecked = !!state[key];

                        return (
                          <FormControlLabel
                            key={option._key}
                            control={
                              <Checkbox
                                name={option.value}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                                value={isChecked.toString()}
                              />
                            }
                            label={option.label}
                          />
                        );
                      })}
                    </FormGroup>
                    <FormHelperText>{input.helperText}</FormHelperText>
                  </FormControl>
                </div>
              );
            case 'radio':
              return (
                <div key={_key}>
                  <FormControl component="fieldset">
                    <FormLabel component="legend">{input.label}</FormLabel>
                    <RadioGroup
                      id={input.id}
                      aria-label={input.label}
                      name={input.id}
                      onChange={handleChange}
                      value={state[input.id] || ''}
                    >
                      {input.options.map((option) => (
                        <FormControlLabel
                          key={option._key}
                          value={option.value}
                          control={<Radio />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                    <FormHelperText>{input.helperText}</FormHelperText>
                  </FormControl>
                </div>
              );
            case 'select':
              return (
                <div key={_key}>
                  <FormControl>
                    <InputLabel htmlFor={input.id}>{input.label}</InputLabel>
                    <Select
                      native
                      id={input.id}
                      value={state[input.id] || ''}
                      inputProps={{ name: input.id, id: input.id }}
                      onChange={handleChange}
                    >
                      <option aria-label="None" value="" />
                      {input.options.map((option) => (
                        <option value={option.value} key={option.key}>
                          {option.label}
                        </option>
                      ))}
                    </Select>
                    <FormHelperText>{input.helperText}</FormHelperText>
                  </FormControl>
                </div>
              );
            case 'textarea':
              return (
                <div key={_key}>
                  <TextField
                    id={input.id}
                    onChange={handleChange}
                    name={input.id}
                    required={input.required}
                    variant={formFieldsStyle}
                    multiline
                    rows={input.rows}
                    label={input.label}
                    helperText={input.helperText}
                    placeholder={input.placeholderText}
                  />
                </div>
              );
            case 'textInput':
              return (
                <div key={_key}>
                  <TextField
                    id={input.id}
                    onChange={handleChange}
                    name={input.id}
                    required={input.required}
                    variant={formFieldsStyle}
                    type={input.inputType}
                    label={input.label}
                    helperText={input.helperText}
                    placeholder={input.placeholderText}
                  />
                </div>
              );
            default:
              return <div key="form-default">Form Field not Created</div>;
          }
        })}
        {/* <BlockContent blocks={disclaimer} /> */}
        <Button type="submit">{submitBtn.text}</Button>
      </form>
    </Box>
  );
}

export default FormNetlify;
