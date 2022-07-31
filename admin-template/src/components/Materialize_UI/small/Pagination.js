import React, { Component } from 'react';

export class Pagination extends Component {
  render() {
    return (
      <div class="card-action center-align">
        <ul class="pagination">
          <li class="disabled">
            <a href="#!" class="blue-text">
              <i class="material-icons">chevron_left</i>
            </a>
          </li>
          <li class="active blue lighten-2">
            <a href="#!" class="white-text">
              1
            </a>
          </li>
          <li class="waves-effect">
            <a href="#!" class="blue-text">
              2
            </a>
          </li>
          <li class="waves-effect">
            <a href="#!" class="blue-text">
              3
            </a>
          </li>
          <li class="waves-effect">
            <a href="#!" class="blue-text">
              4
            </a>
          </li>
          <li class="waves-effect">
            <a href="#!" class="blue-text">
              5
            </a>
          </li>
          <li class="waves-effect">
            <a href="#!" class="blue-text">
              <i class="material-icons">chevron_right</i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pagination;
