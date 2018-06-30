import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Formik } from 'formik';
import md5 from 'md5';
import styled from 'styled-components';

const Button = styled.button`
  transition: all 0.2s ease-in-out;
  :hover {
    transform: scale(1.03);
  }
`;

class InnerForm extends Component {
  handleSubmit = values => {
    // Grab email from form
    const email = values.email;

    // Normalize email addresses by trimming whitespace
    // and converting to lowercase
    const normalizedEmail = email.trim().toLowerCase();

    // Get the hash from the normalized email
    const hash = md5(normalizedEmail);

    // Redirect to the results page with the hash
    const { history } = this.props;
    history.push(`/${hash}`);
  };

  render() {
    return (
      <Formik
        initialValues={{
          email: '',
        }}
        validate={values => {
          let errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={this.handleSubmit}
        render={({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit} className="field is-grouped">
            <p className="control is-expanded">
              <input
                name="email"
                type="text"
                className={`input ${errors.email &&
                  touched.email &&
                  'is-invalid'}`}
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your Email"
              />
              {errors.email &&
                touched.email && (
                  <span className="invalid-feedback">{errors.email}</span>
                )}
            </p>
            <p className="control">
              <Button
                className="button is-primary"
                type="submit"
                disabled={isSubmitting}
              >
                Grab
              </Button>
            </p>
          </form>
        )}
      />
    );
  }
}

const MyForm = withRouter(InnerForm);

export default MyForm;
