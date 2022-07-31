import React, { Component } from 'react';
import user_icon from '../../../images/male-user.png';
import M from 'materialize-css';

export class SchoolManagerProfile extends Component {
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
          <h5 class="col s3 grey-text text-darken-4">Phone Number</h5>

          <p id="name" class="col offset-s4 s3  grey-text text-darken-2">
            FULL NAME
          </p>
          <p id="email" class="col s3 grey-text text-darken-2">
            4485622
          </p>

          <h5 class="col offset-s4 s3  grey-text text-darken-4">Birth Date</h5>
          <h5 class="col s3 grey-text text-darken-4">Address</h5>

          <p class="col offset-s4 s3  grey-text text-darken-2">29/03/1995</p>
          <p class="col s3 grey-text text-darken-2">sahloul 3</p>
          {/* /PROFILE DATA */}
        </div>
      </div>
    );
  }
}
