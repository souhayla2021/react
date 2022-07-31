import React from "react";
import logo from '../../../images/logo.png'
import "./logo.css";

const Logo = (props) => {
    return (
        <div className={props.className}>
            <img src={ logo } alt={props.alt}/>
        </div>
    );
  }

export default Logo