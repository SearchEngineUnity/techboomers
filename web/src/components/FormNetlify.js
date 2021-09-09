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
  const [validated, setValidated] = useState(false);
  let isValid = true;

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.checked });
  };

  const sendForm = (form) => {
    const inputs = form.elements;

    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < inputs.length - 1; index++) {
      const element = inputs[index];
      console.log(element);
      console.log(element.validity);
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          isValid = false;
        }
      }
    }
    console.log(`Post For loop ${isValid}`);
    console.log(state);

    if (isValid) {
      console.log('attempting to fetch');
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          'bot-field': form.getAttribute('bot-field'),
          ...state,
        }),
      })
        .then(() => {
          console.log('fetch sucessful');
          setValidated(false);
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

    setValidated(true);
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
        netlify
        netlify-honeypot="bot-field"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        id={name}
        autoComplete="off"
      >
        <p className="hidden" style={{ display: 'none' }}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
          </label>
        </p>

        {success && <p>{thankYou}</p>}

        <input type="hidden" name="form-name" value={name} />
        {formFields.map((input) => {
          const { _type } = input;

          switch (_type) {
            case 'checkbox':
              return (
                <div>
                  <FormControl component="fieldset" ref={React.createRef()}>
                    <FormLabel component="legend">{input.label}</FormLabel>
                    <FormGroup>
                      {input.options.map((option) => {
                        const key = option.value;
                        const isChecked = state[key];

                        return (
                          <FormControlLabel
                            control={
                              <Checkbox
                                name={option.value}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
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
                <div>
                  <FormControl component="fieldset" ref={React.createRef()}>
                    <FormLabel component="legend">{input.label}</FormLabel>
                    <RadioGroup
                      id={input.id}
                      aria-label={input.label}
                      name={input.id}
                      onChange={handleChange}
                    >
                      {input.options.map((option) => (
                        <FormControlLabel
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
                <div>
                  <FormControl ref={React.createRef()}>
                    <InputLabel id={`${input.id}-label`}>{input.label}</InputLabel>
                    <Select
                      labelId={`${input.id}-label`}
                      id={input.id}
                      name={input.id}
                      onChange={handleChange}
                    >
                      {input.options.map((option) => (
                        <MenuItem value={option.value}>{option.label}</MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{input.helperText}</FormHelperText>
                  </FormControl>
                </div>
              );
            case 'textarea':
              return (
                <div>
                  <TextField
                    id={input.id}
                    onChange={handleChange}
                    name={input.id}
                    required={input.required}
                    variant={formFieldsStyle}
                    multiline
                    maxRows={input.rows}
                    minRows={input.rows}
                    label={input.label}
                    helperText={input.helperText}
                    placeholder={input.placeholderText}
                    ref={React.createRef()}
                  />
                </div>
              );
            case 'textInput':
              return (
                <div>
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
                    ref={React.createRef()}
                  />
                </div>
              );
            default:
              return <div>Form Field not Created</div>;
          }
        })}
        {/* <BlockContent blocks={disclaimer} /> */}
        <Button type="submit">{submitBtn.text}</Button>
      </form>
    </Box>
  );
}

export default FormNetlify;
