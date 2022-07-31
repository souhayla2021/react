import React, { Component } from 'react';
import user_icon from '../../../images/male-user.png';
import M from 'materialize-css';

export class AdminProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = [document.querySelectorAll('.materialboxed')];
      M.Materialbox.init(elems[0], { classes: '' });
    });
  };

  render() {
    return (
      <div class="col s12">
        <div class="card grey-text text-darken-3">
          {/* PHOTO */}
          <div className="col s4 offset-s5">
            <img
              class="responsive-img materialboxed"
              width="50%"
              style={{ borderRadius: '50% !important' }}
              src={user_icon}
            ></img>
          </div>
          {/* /PHOTO */}

          {/* PROFILE DATA */}
          <h5 class="col offset-s4 s3 grey-text text-darken-4">Name</h5>
          <h5 class="col s3 grey-text text-darken-4">Email</h5>

          <p id="name" class="col offset-s4 s3  grey-text text-darken-2">
            FULL NAME
          </p>
          <p id="email" class="col s3 grey-text text-darken-2">
            EMAIL@GMAIL.COM
          </p>

          <h5 class="col offset-s4 s3  grey-text text-darken-4">
            Registration Number
          </h5>
          <h5 class="col s3 grey-text text-darken-4">NIC</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">1234568</p>
          <p class="col s3 grey-text text-darken-2">1154488</p>

          <h5 class="col offset-s4 s3  grey-text text-darken-4">
            Contract Type
          </h5>
          <h5 class="col s3 grey-text text-darken-4">Contract Due Date</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">CDD</p>
          <p class="col s3 grey-text text-darken-2">29/01/1995</p>

          <h5 class="col offset-s4 s3  grey-text text-darken-4">phoneNumber</h5>
          <h5 class="col s3 grey-text text-darken-4">Address</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">266456789</p>
          <p class="col s3 grey-text text-darken-2">sahloul 3</p>

          <h5 class="col offset-s4 s3  grey-text text-darken-4">Birth Date</h5>
          <h5 class="col s3 grey-text text-darken-4">Gender</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">29/03/1995</p>
          <p class="col s3 grey-text text-darken-2">Male</p>
          {/* /PROFILE DATA */}
        </div>
      </div>
    );
  }
}
