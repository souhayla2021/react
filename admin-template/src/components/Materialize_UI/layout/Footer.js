import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <div className="page-footer fixed transparent">
        <div className="footer-copyright teal lighten-1">
          <div className="container" id="copyright">
            ©{new Date().getFullYear()} Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">
              <i className="fa fa-instagram"></i> Instagram_Account
              <br />
              <i className="fa fa-facebook"></i> Facebook_Page
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
