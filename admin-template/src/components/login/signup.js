import React, { Component } from 'react';
import Button from '../UI/button/button';
import { Radio, Inputs } from '../UI/input/index';
import M from 'materialize-css';

export class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nic: '',
      email: '',
      firstname: '',
      lastname: '',
      gender: '',
      role: '',
      inputs: [
        {
          type: 'number',
          name: 'nic',
          placeholder: 'NIC',
          required: [true],
          label: '',
          error: '',
          error_class: '',
        },
        {
          type: 'email',
          name: 'email',
          placeholder: 'E-mail',
          required: [true],
          label: '',
          error: '',
          error_class: '',
        },
        {
          type: 'text',
          name: 'firstname',
          placeholder: 'Firstname',
          required: [true],
          label: '',
          error: '',
          error_class: '',
        },
        {
          type: 'text',
          name: 'lastname',
          placeholder: 'Lastname',
          required: [true],
          label: '',
          error: '',
          error_class: '',
        },
      ],
      nicValid: false,
      emaildValid: false,
      required_error: '',
      formValid: false,
      genderOptions: [
        { id: 'male', label: 'Male' },
        { id: 'female', label: 'Female' },
      ],
      employeeOptions: [
        { value: 'admin', id: '1', label: 'Administrator' },
        { value: 'manager', id: '2', label: 'Manager' },
        { value: 'staff', id: '3', label: 'Staff' },
      ],
      errors: {
        nic: '',
        email: '',
        firstname: '',
        lastname: '',
      },
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleRadioChange = this.handleRadioChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      M.FormSelect.init(elems, {});
    });
  }

  handleSelectChange({ target: { name, value } }) {
    this.setState({ [name]: value });
  }

  handleRadioChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  };

  handleInputChange({ target: { name, value, type, checked } }) {
    const val = type === 'checkbox' ? checked : value;

    this.setState({ [name]: val }, () => {
      this.validateField(name, val);
    });
  }

  validateField(fieldName, value) {
    let inputs = this.state.inputs;
    let emailValid = this.state.emailValid;
    let nicValid = this.state.nicValid;

    switch (fieldName) {
      case 'nic':
        nicValid = value.length === 8;
        inputs[0].error = nicValid ? '' : ' Invalid NIC Number';
        inputs[0].error_class = nicValid ? '' : 'input-error';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        inputs[1].error = emailValid ? '' : 'Invalid E-mail';
        inputs[1].error_class = emailValid ? '' : 'input-error';
        break;
      default:
        break;
    }

    this.setState(
      { inputs: inputs, emailValid: emailValid, nicValid: nicValid },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.nicValid });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    alert(
      'Account Infos:\nNIC: ' +
        this.state.nic +
        '\nFirstname: ' +
        this.state.firstname +
        '\nLastname: ' +
        this.state.lastname +
        '\nE-mail: ' +
        this.state.email +
        '\nSex: ' +
        this.state.gender +
        '\nRole: ' +
        this.state.role
    );
  };

  render() {
    return (
      <div className="form-container sign-up-container row">
        <form onSubmit={this.handleFormSubmit}>
          <h1 className="form-h1">Create User Account</h1>
          <Inputs
            className="auth col s12"
            onChange={this.handleInputChange}
            inputs={this.state.inputs}
          />

          <fieldset className="radio-inline" required>
            <legend> Gender </legend>
            <Radio
              className="auth"
              labelClass="radioLabel"
              name="gender"
              seleted={this.state.gender}
              onChange={this.handleRadioChange}
              options={this.state.genderOptions}
            />
          </fieldset>
          <div className="form-error" id="gender">
            {' '}
            {this.state.required_error}{' '}
          </div>

          <div class="input-field col s12">
            <select
              className="auth"
              name="role"
              required={true}
              onChange={this.handleSelectChange}
            >
              <option value="" disabled selected>
                --Select a Role--
              </option>
              <option value="admin">Administrator</option>
              <option value="schoolmanager">School Manager</option>
              <option value="financemanager">Finance Manager</option>
              <option value="teacher">Teacher</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <Button label="Create Account" disabled={!this.state.formValid} />
        </form>
      </div>
    );
  }
}
