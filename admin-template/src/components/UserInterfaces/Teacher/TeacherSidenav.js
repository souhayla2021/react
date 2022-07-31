/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../Materialize_UI/layout/Sidenav';
/* STYLE AND FILES IMPORTS */
import user_icon from '../../../images/male-user.png';
import user_bg from '../../../images/background.jpg';

/*************** COMPONENT SCOPE *****************/
export function TeacherSidenav() {
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
          label: 'Related Modules',
          headerClassName: 'grey-text text-darken-2',
          className: '',
          iconClass: 'small material-icons',
          icon: 'class',
          elems: [
            <li key="1">
              <Link to="/all_classes">
                <i className="material-icons tiny">school</i>
                Classes
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
                <i className="fa fa-book tiny"></i>
                Subjects
              </Link>
            </li>,
          ],
        },
        {
          type: 'with_icon',
          label: 'Timetables',
          className: 'grey-text text-darken-2',
          url: '/timetables',
          iconClass: 'small fa fa-calendar-alt',
          icon: '',
        },
      ]}
    />
  );
}
