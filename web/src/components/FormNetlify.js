// GATSBY CLEAN WHEN MAKING FORM CHANGES THAT DON"T SEEM TO UPDATE!
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles((theme) => ({
  control: {
    marginBottom: theme.spacing(2),
  },
}));

function FormNetlify({
  align,
  title,
  formFields,
  name,
  thankYou,
  submitBtn,
  colorSettings,
  border,
  borderRadius,
  borderColor,
  boxShadow,
  variant,
}) {
  const classes = useStyles();
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
      if (element.name !== 'bot-field' && element.name !== 'form-name') {
        if (element.validity.valid === false) {
          isValid = false;
        }
      }
    }

    if (isValid) {
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
                <FormControl component="fieldset" fullWidth key={_key} className={classes.control}>
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
              );
            case 'radio':
              return (
                <FormControl component="fieldset" fullWidth key={_key}>
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
              );
            case 'select':
              return (
                <FormControl component="fieldset" fullWidth key={_key}>
                  <FormLabel component="legend">{input.label}</FormLabel>
                  <Select
                    native
                    id={input.id}
                    value={state[input.id] || ''}
                    inputProps={{ name: input.id, id: input.id }}
                    onChange={handleChange}
                    variant={variant}
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
              );
            case 'textarea':
              return (
                <FormControl component="fieldset" fullWidth key={_key}>
                  <FormLabel component="legend">{input.label}</FormLabel>
                  <TextField
                    id={input.id}
                    onChange={handleChange}
                    name={input.id}
                    required={input.required}
                    variant={variant}
                    multiline
                    rows={input.rows}
                    placeholder={input.placeholderText}
                  />
                  <FormHelperText>{input.helperText}</FormHelperText>
                </FormControl>
              );
            case 'textInput':
              return (
                <FormControl component="fieldset" fullWidth key={_key}>
                  <FormLabel component="legend">{input.label}</FormLabel>
                  <TextField
                    id={input.id}
                    onChange={handleChange}
                    name={input.id}
                    required={input.required}
                    variant={variant}
                    type={input.inputType}
                    placeholder={input.placeholderText}
                    fullWidth
                  />
                  <FormHelperText>{input.helperText}</FormHelperText>
                </FormControl>
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
