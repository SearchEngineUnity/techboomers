import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { navigate } from '@reach/router';
// import BlockContent from './block-contents/simpleSerializer';

function FormNetlify({ formFields, name, submitBtn, formFieldsStyle }) {
  const [validated, setValidated] = useState(false);
  let isValid = true;
  const [success, setSuccess] = useState(false);

  const sendForm = (myForm) => {
    const inputs = myForm.elements;
    const formData = new FormData(myForm);

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
        body: new URLSearchParams(formData).toString(),
      })
        .then(() => {
          setSuccess(true);
          myForm.reset();
          setValidated(false);
          navigate(`/thank-you`);
        })
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

  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      netlify-honeypot="bot-field"
      noValidate
      onSubmit={handleSubmit}
      id={name}
    >
      <p className="hidden" style={{ display: 'none' }}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label>
          Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
        </label>
      </p>

      <input type="hidden" name="form-name" value={name} />
      {formFields.map((input) => {
        const { _type } = input;

        switch (_type) {
          case 'checkbox':
            return <div>Checkbox</div>;
          case 'radio':
            return <div>radio</div>;
          case 'select':
            return <div>select</div>;
          case 'textarea':
            return <div>textarea</div>;
          case 'textInput':
            return <div>textInput</div>;
          default:
            return <div>Form Field not Created</div>;
        }

        //   if (_type === 'input' && inputType === 'email') {
        //     const { _key, label, name, placeholder, required } = input;
        //     return (
        //       <Form.Group controlId={name} key={_key}>
        //         <StyledLabel>{label}</StyledLabel>
        //         <Form.Control
        //           type={inputType}
        //           placeholder={placeholder}
        //           required={required}
        //           name={name}
        //           pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        //           ref={React.createRef()}
        //         />
        //       </Form.Group>
        //     );
        //   }

        //   if (_type === 'input') {
        //     const { _key, label, name, placeholder, required } = input;
        //     return (
        //       <Form.Group controlId={name} key={_key}>
        //         <StyledLabel>{label}</StyledLabel>
        //         <Form.Control
        //           type={inputType}
        //           placeholder={placeholder}
        //           required={required}
        //           name={name}
        //           ref={React.createRef()}
        //         />
        //       </Form.Group>
        //     );
        //   }

        //   const { _key, label, name, placeholder, required, rows } = input;
        //   return (
        //     <Form.Group controlId={name} key={_key}>
        //       <StyledLabel>{label}</StyledLabel>
        //       <Form.Control
        //         as="textarea"
        //         rows={rows}
        //         placeholder={placeholder}
        //         required={required}
        //         name={name}
        //         ref={React.createRef()}
        //       />
        //     </Form.Group>
        //   );
      })}
      {/* <BlockContent blocks={disclaimer} /> */}
      <Button type="submit">{submitBtn.text}</Button>
    </form>
  );
}

export default FormNetlify;
