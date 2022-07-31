/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../Materialize_UI/layout/Sidenav';
/* STYLE AND FILES IMPORTS */
import user_icon from '../../../images/male-user.png';
import user_bg from '../../../images/background.jpg';

/*************** COMPONENT SCOPE *****************/
export function ParentSidenav() {
  return (
    <SideNav
      id="slide-out"
      className="sidenav"
      userBG={user_bg}
      userIcon={user_icon}
      username="hiba"
      userMail="h.zorgui2015@gmail.com"
      items={[
        {
          type: 'with_icon',
          label: 'Dashboard',
          className: 'grey-text text-darken-2',
          url: '/dashboard',
          iconClass: 'small material-icons',
          icon: 'dashboard',
        },
        { type: 'divider' },
        {
          type: 'dropdown',
          label: 'User Accounts',
          headerClassName: 'grey-text text-darken-2',
          className: '',
          iconClass: 'small material-icons',
          icon: 'person',
          elems: [
            <li key="teachers">
              <Link to="/teachers">
                <i className="fa fa-chalkboard-teacher tiny"></i>
                Teachers
              </Link>
            </li>,
            <li key="parents">
              <Link to="/parents">
                <i className="fa fa-user-friends tiny"></i>
                Parents
              </Link>
            </li>,
            <li key="students">
              <Link to="/home/students">
                <i className="fa fa-user-graduate tiny"></i>
                Students
              </Link>
            </li>,
            <li key="employees">
              <Link to="/employees">
                <i className="fa fa-users tiny"></i>
                Employees
              </Link>
            </li>,
          ],
        },
        { type: 'divider' },
        {
          type: 'dropdown',
          label: 'Class',
          headerClassName: 'grey-text text-darken-2',
          className: '',
          iconClass: 'small material-icons',
          icon: 'class',
          elems: [
            <li key="1">
              <Link to="/all_classes">
                <i className="material-icons tiny">school</i>
                All Classes
              </Link>
            </li>,
            <li key="2">
              <Link to="/levels">
                <i className="fa fa-layer-group tiny"></i>
                Levels
              </Link>
            </li>,
            <li key="3">
              <Link to="/divisions">
                <i className="fa fa-puzzle-piece tiny"></i>
                Divisions
              </Link>
            </li>,
          ],
        },
      ]}
    />
  );
}
