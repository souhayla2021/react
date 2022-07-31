/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
/* STYLE AND FILES IMPORTS */
import M from 'materialize-css';
import './sidenav.scss';
/* COMPONENTS IMPORTS */
import { AdminSidenav } from '../../UserInterfaces/Admin/index';
import { FinanceManagerSidenav } from '../../UserInterfaces/FinanceManager/index';
import { SchoolManagerSidenav } from '../../UserInterfaces/SchoolManager/index';
import { TeacherSidenav } from '../../UserInterfaces/Teacher/index';
import { ParentSidenav } from '../../UserInterfaces/Parent/index';
import { StudentSidenav } from '../../UserInterfaces/Student/index';

export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = [
        { sidenav: document.querySelectorAll('.sidenav') },
        { dropdown: document.querySelectorAll('.dropdown-trigger') },
        { collapsible: document.querySelectorAll('.collapsible') },
      ];
      M.Sidenav.init(elems[0].sidenav, {
        edge: 'left',
        draggable: true,
      });
      M.Dropdown.init(elems[1].dropdown, {
        constrainWidth: false,
        coverTrigger: false,
        alignment: 'left',
      });
      M.Collapsible.init(elems[2], {
        accordion: false,
        inDuration: 300,
        outDuration: 200,
      });
    });
  };
  render() {
    return (
      <div>
        {/* MAIN NAVBAR */}
        <nav className="teal lighten-1">
          <a
            href="#"
            data-target="slide-out"
            className="sidenav-trigger show-on-large"
          >
            <i className="material-icons">menu</i>
          </a>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo center">
              V-School
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {/* Account Settings */}
              <li>
                <Link
                  to="userinfo"
                  className="dropdown-trigger"
                  data-target="user_dropdown"
                >
                  <i className="medium material-icons">account_circle</i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* /Account Settings */}
        {/* USER SETTINGS DROPDOWN  */}
        <ul id="user_dropdown" className="dropdown-content">
          <li>
            <Link to="/profile">
              <i className="tiny material-icons">settings</i>
              Account settings
            </Link>
          </li>
          <li className="divider" tabIndex="-1"></li>
          <li>
            <Link to="/signout">
              <i className="small fa fa-sign-out"></i>
              Logout
            </Link>
          </li>
        </ul>
        {/* /USER SETTINGS DROPDOWN  */}

        {/* USERS SIDENAV */}
        {/* <AdminSidenav /> */}
        {/* <FinanceManagerSidenav /> */}
        {/* <SchoolManagerSidenav /> */}
        {/* <TeacherSidenav /> */}
        <StudentSidenav />
      </div>
    );
  }
}

export default Navbar;
