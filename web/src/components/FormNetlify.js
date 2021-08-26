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
} from '@material-ui/core';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

function FormNetlify({ formFields, name, thankYou, submitBtn, formFieldsStyle }) {
  const [state, setState] = useState({});
  const [success, setSuccess] = useState(false);
  const [isValid, setIsValid] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const inputs = form.elements;
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < inputs.length - 1; index++) {
      const element = inputs[index];
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          setIsValid(false);
        }
      }
    }

    if (isValid) {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': form.getAttribute('name'),
          ...state,
        }),
      })
        .then(() => {
          setIsValid(false);
          form.reset();
          setSuccess(true);
        })
        .catch((error) => alert(error));
    }
  };

  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      noValidate
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
              <FormControl component="fieldset">
                <FormLabel component="legend">{input.label}</FormLabel>
                <FormGroup>
                  {input.options.map((option) => (
                    <FormControlLabel
                      control={<Checkbox name={option.value} />}
                      label={option.label}
                    />
                  ))}
                </FormGroup>
                <FormHelperText>{input.helperText}</FormHelperText>
              </FormControl>
            );
          case 'radio':
            return (
              <FormControl component="fieldset">
                <FormLabel component="legend">{input.label}</FormLabel>
                <RadioGroup
                  id={input.id}
                  aria-label={input.label}
                  name={input.name}
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
            );
          case 'select':
            return (
              <FormControl>
                <InputLabel id={`${input.id}-label`}>{input.label}</InputLabel>
                <Select labelId={`${input.id}-label`} id={input.id} onChange={handleChange}>
                  {input.options.map((option) => (
                    <MenuItem value={option.value}>{option.label}</MenuItem>
                  ))}
                </Select>
                <FormHelperText>{input.helperText}</FormHelperText>
              </FormControl>
            );
          case 'textarea':
            return (
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
              />
            );
          case 'textInput':
            return (
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
            );
          default:
            return <div>Form Field not Created</div>;
        }
      })}
      {/* <BlockContent blocks={disclaimer} /> */}
      <Button type="submit">{submitBtn.text}</Button>
    </form>
  );
}

export default FormNetlify;
