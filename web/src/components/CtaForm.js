import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navigate } from '@reach/router';
import BlockContent from './block-contents/simpleSerializer';

const StyledLabel = styled(Form.Label)``;

const StyledButton = styled(Button)`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: bold;
  padding: 7.5px 30px;
  background-color: #f26b32;
  border: solid 2px #f26b32;
  border-radius: 4px;
  transition: transform 0.5s ease;

  &:hover,
  &:focus {
    background-color: #ce470d;
    transform: translateY(-5px);
    box-shadow: 0px 3px 6px #00000029;
    border: solid 2px #ce470d;
  }

  &.active,
  &:active {
    color: #ce470d !important;
    background-color: white !important;
    border: solid 2px #ce470d !important;
    box-shadow: 0px 3px 6px #00000029 !important;
  }
`;

function CtaForm({ id, title, subtitle, form, disclaimer }) {
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
    <Container id={id} as="section" className="page-section">
      <Row>
        <Col xs={12} sm={10} className="mx-auto">
          <h2 className="text-center">{title}</h2>
          {subtitle && <p className="text-center">{subtitle}</p>}
        </Col>
      </Row>
      <Row>
        <Col className="mx-auto" lg={6} sm={10} xs={12}>
          <Form
            name={form.name}
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            id={form.name}
          >
            <p className="hidden" style={{ display: 'none' }}>
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label>
                Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
              </label>
            </p>

            <input type="hidden" name="form-name" value={form.name} />
            {form.formFields.map((input) => {
              const { _type, inputType } = input;

              if (_type === 'input' && inputType === 'email') {
                const { _key, label, name, placeholder, required } = input;
                return (
                  <Form.Group controlId={name} key={_key}>
                    <StyledLabel>{label}</StyledLabel>
                    <Form.Control
                      type={inputType}
                      placeholder={placeholder}
                      required={required}
                      name={name}
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                      ref={React.createRef()}
                    />
                  </Form.Group>
                );
              }

              if (_type === 'input') {
                const { _key, label, name, placeholder, required } = input;
                return (
                  <Form.Group controlId={name} key={_key}>
                    <StyledLabel>{label}</StyledLabel>
                    <Form.Control
                      type={inputType}
                      placeholder={placeholder}
                      required={required}
                      name={name}
                      ref={React.createRef()}
                    />
                  </Form.Group>
                );
              }

              const { _key, label, name, placeholder, required, rows } = input;
              return (
                <Form.Group controlId={name} key={_key}>
                  <StyledLabel>{label}</StyledLabel>
                  <Form.Control
                    as="textarea"
                    rows={rows}
                    placeholder={placeholder}
                    required={required}
                    name={name}
                    ref={React.createRef()}
                  />
                </Form.Group>
              );
            })}
            <BlockContent blocks={disclaimer} />
            <StyledButton type="submit">{form.submit}</StyledButton>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

CtaForm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  form: PropTypes.object.isRequired,
};

CtaForm.defaultProps = {
  subtitle: null,
};

export default CtaForm;
