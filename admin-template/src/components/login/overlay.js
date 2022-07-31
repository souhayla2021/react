import React from 'react';
import Button from '../UI/button/button';
import Logo from '../UI/logo/logo';

export const Overlay = (props) => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <Logo className="logo" />
          <h1>Already have an account,</h1>
          <p>Sign in to your individual account.</p>
          <Button className="ghost" label="Sign In" onClick={props.onClick} />
        </div>
        <div className="overlay-panel overlay-right">
          <Logo className="logo" />
          <h1>Add a new user?</h1>
          <p>Create a new user account.</p>
          <Button className="ghost" label="Create" onClick={props.onClick} />
        </div>
      </div>
    </div>
  );
};
