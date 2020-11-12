import '../style/form.scss';
import { Link } from 'react-router-dom';
import { React, Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

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

class FormLogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emptyInputs: false,
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
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

    switch (name) {
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum 6 characaters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="form-container">
        <form onSubmit={this.handleSubmit} noValidate>
          <h1>Sign in to ChatApp</h1>
          <div className="form-group">
            <div className="input-container">
              <input 
                placeholder='Email *' 
                name='email' 
                id='email'
                className={formErrors.email.length > 0 || (this.state.emptyInputs && this.state.email === null) ? 'error' : ''} 
                onChange={this.handleChange}
                noValidate 
                type='email'>
              </input>
            </div>
            {formErrors.email.length > 0 && (
              <small>{formErrors.email}</small>)
            }
          </div>
          <div className="form-group">
            <div className="input-container">
              <input 
                placeholder='Password *' 
                name='password' 
                id='password'
                className={formErrors.password.length > 0 || (this.state.emptyInputs && this.state.password === null) ? 'error' : ''} 
                onChange={this.handleChange}
                noValidate 
                type='password'>
              </input>
            </div>
            {formErrors.password.length > 0 && (
              <small>{formErrors.password}</small>)
            }
          </div>
          {this.state.emptyInputs && (
            <small className="empty-message"><FontAwesomeIcon className="user" icon={faInfoCircle} /> Please fill all the required inputs</small>
          )}
          <div className="buttons-container buttons-container-one">
            <div className="button-container one-button">
              <button type="submit">Sign In</button>
            </div>
          </div>
          <p>New to ChatApp? <Link to="/signup">Create An Account</Link></p>
        </form>
      </div>
    );
  }
}

export default FormLogIn;