import React, { Component } from "react";
import Button from '../UI/button/button'

export class Signin extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

    handleSubmit(event) {
        alert('Check Account Infos:\nE-mail: ' + 
               this.state.email+
               '\nPassword: '+
               this.state.password);
        event.preventDefault();
    }

    render(){
        return (
            <div className="form-container sign-in-container">
                <form onSubmit={ this.handleSubmit }>
                    <h1 className="form-h1">Sign in</h1>
                    <input 
                        className="auth" 
                        type="email" 
                        name="email"
                        onChange={ this.handleInputChange }
                        placeholder="Email" />
                    <input 
                        className="auth" 
                        type="password" 
                        name="password"
                        onChange={ this.handleInputChange }
                        placeholder="Password" />
                    <a href={ this.props.href }>Forgot your password?</a>
                    <Button label="Sign In" />
                </form>
            </div>
    
    )}
    
  }
