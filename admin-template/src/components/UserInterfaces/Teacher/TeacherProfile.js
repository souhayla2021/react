import React, { Component } from 'react';
import user_icon from '../../../images/male-user.png';
import M from 'materialize-css';

export class TeacherProfile extends Component {
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
          <h5 class="col s3 grey-text text-darken-4">CIN</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">1234568</p>
          <p class="col s3 grey-text text-darken-2">1154488</p>

          <h5 class="col offset-s4 s3  grey-text text-darken-4">phoneNumber</h5>
          <h5 class="col s3 grey-text text-darken-4">Address</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">266456789</p>
          <p class="col s3 grey-text text-darken-2">sahloul 3</p>
          {/* /PROFILE DATA */}
        </div>
      </div>
    );
  }
}
