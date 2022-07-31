import React, { Component } from "react";
import Button from '../UI/button/button'
import { Inputs } from "../UI/input/index"

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      role: '',
      inputs: [
        { type: 'email', name: 'email', placeholder: 'E-mail', required: [true], label: '', error: '', error_class: ''},
        { type: 'password', name: 'password', placeholder: 'Passowrd', required: [true], label: '', error: '', error_class: ''},
      ],
      emailValid: false,
      passwordValid: false,
      formValid: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.validateField = this.validateField.bind(this)
    this.validateForm = this.validateForm.bind(this)
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name; 
    
    console.log(target.style)
    this.setState({[name]: value}, 
        () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let inputs = this.state.inputs;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;
  
    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        inputs[0].error = emailValid ? '' : ' Invalid E-mail';
        inputs[0].error_class = emailValid ? '' : 'input-error';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        inputs[1].error = passwordValid ? '': 'Passowrd too short';
        inputs[1].error_class = passwordValid ? '' : 'input-error';
        break;
      default:
        break;
    }

    this.setState({inputs: inputs,
        emailValid: emailValid,
        passwordValid: passwordValid
      }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.passwordValid});
  }

  handleFormSubmit(event) {
    event.preventDefault();
    alert('Check Account Infos:\nE-mail: ' + 
           this.state.email+
           '\nPassword: '+
           this.state.password);
  }

  render() {
    
    return (
        <div className="form-container sign-in-container">
            <form onSubmit={ this.handleFormSubmit }>
                <h1 className="form-h1">Sign in</h1>
                    <Inputs
                        className = "auth "
                        onChange = { this.handleInputChange }
                        inputs = { this.state.inputs }
                    />
                    <a href={ this.props.href }>Forgot your password?</a>
                    <Button label="Sign In" disabled={!this.state.formValid} />
            </form>
        </div>
    );
  }
}
