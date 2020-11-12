import '../style/form.scss';
import { React, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
//REGEX
const emailRegex = RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
//const nameRegex = RegExp(/^([a-zA-Z ]){2,30}$/);

const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

const emptyValid = ({ formErrors, ...rest }) => {
  let empty = false;

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (empty = true);
  });

  return empty;
};

class FormSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyInputs: false,
      name: null,
      email: null,
      password: null,
      rpassword: null,
      formErrors: {
        name: "",
        email: "",
        password: "",
        rpassword: ""
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let empty = emptyValid(this.state);
    this.setState({ emptyInputs: empty });

    if (formValid(this.state)) {
      console.log(`
            --SUBMITTING--
            Name: ${this.state.name}
            Email: ${this.state.email}
            Password: ${this.state.password}
            Repeat Password: ${this.state.rpassword}
          `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      console.log(this.state)
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };
    let checkPassword = false;

    switch (name) {
      case "name":
        formErrors.name =
          value.length < 3 ? "Minimum 3 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characaters required" : "";
        checkPassword =
          value.length > 5 ? true : false; 
        break;
      case "rpassword":
        formErrors.rpassword =
          value.length < 6 ? "Minimum 6 characaters required" : "";
        checkPassword =
          value.length > 5 ? true : false; 
        break;
      default:
        break;
    }

    if (checkPassword) {
      if (name === 'password') {
        formErrors.rpassword = this.state.rpassword === e.target.value ? "" : "Passwords must match";
        formErrors.password = formErrors.rpassword;
      } else {
        formErrors.password = this.state.password === e.target.value ? "" : "Passwords must match";
        formErrors.rpassword = formErrors.password;
      }
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };


  render() {
    const { formErrors } = this.state;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} noValidate>
          <h1>Create your account</h1>
          <div className="form-group">
            <div className="input-container">
              <input
                className={formErrors.name.length > 0 || (this.state.emptyInputs && this.state.name === null) ? 'error' : ''}
                placeholder='Name *'
                name='name'
                id='name'
                onChange={this.handleChange}
                noValidate
                type='text'
                required>
              </input>
            </div>
            {formErrors.name.length > 0 && (
              <small>{formErrors.name}</small>
            )}
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                className={formErrors.email.length > 0 || (this.state.emptyInputs && this.state.email === null) ? 'error' : ''}
                placeholder='Email *'
                name='email'
                id='email'
                onChange={this.handleChange}
                noValidate
                type='email'
                required>
              </input>
            </div>
            {formErrors.email.length > 0 && (
              <small>{formErrors.email}</small>
            )}
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                className={formErrors.password.length || (this.state.emptyInputs && this.state.password === null) ? 'error' : ''}
                placeholder='Password *'
                name='password'
                id='password'
                onChange={this.handleChange}
                noValidate
                type='password'
                required>
              </input>
            </div>
            {formErrors.password.length > 0 && (
              <small>{formErrors.password}</small>
            )}
          </div>
          <div className="form-group">
            <div className="input-container">
              <input
                className={formErrors.rpassword.length || (this.state.emptyInputs && this.state.rpassword === null) ? 'error' : ''}
                placeholder='Repeat Password *'
                name='rpassword'
                id='rpassword'
                onChange={this.handleChange}
                noValidate
                type='password'
                required>
              </input>
            </div>
            {formErrors.rpassword.length > 0 && (
              <small>{formErrors.rpassword}</small>
            )}
          </div>
          {this.state.emptyInputs && (
            <small className="empty-message"><FontAwesomeIcon className="user" icon={faInfoCircle} /> Please fill all the required inputs</small>
          )}
          <div className="buttons-container buttons-container-one">
            <div className="button-container one-button">
              <button type="submit">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default FormSignUp;