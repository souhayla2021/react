/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../Materialize_UI/layout/Sidenav';
/* STYLE AND FILES IMPORTS */
import user_icon from '../../../images/male-user.png';
import user_bg from '../../../images/background.jpg';

/*************** COMPONENT SCOPE *****************/
export function SchoolManagerSidenav() {
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
          label: 'User Inscription',
          headerClassName: 'grey-text text-darken-2',
          className: '',
          iconClass: 'small material-icons',
          icon: 'person',
          elems: [
            <li key="parents">
              <Link to="/parents">
                <i className="fa fa-user-friends tiny"></i>
                Parents
              </Link>
            </li>,
            <li key="students">
              <Link to="/students">
                <i className="fa fa-user-graduate tiny"></i>
                Students
              </Link>
            </li>,
          ],
        },
        { type: 'divider' },
        {
          type: 'dropdown',
          label: 'Absences',
          headerClassName: 'grey-text text-darken-2',
          className: '',
          iconClass: 'small fa fa-calendar-minus',
          icon: '',
          elems: [
            <li key="1">
              <Link to="/teacherAbsences">
                <i className="fa fa-user-minus tiny"></i>
                Teacher Absences
              </Link>
            </li>,
            <li key="2">
              <Link to="/levels">
                <i className="fa fa-user-minus tiny"></i>
                Student Absences
              </Link>
            </li>,
          ],
        },
        {
          type: 'with_icon',
          label: 'Compose Timetable',
          className: 'grey-text text-darken-2',
          url: '/composeTimetable',
          iconClass: 'small fa fa-calendar-alt',
          icon: '',
        },
        {
          type: 'with_icon',
          label: 'Grading',
          className: 'grey-text text-darken-2',
          url: '/gradeStudents',
          iconClass: 'small fa fa-calculator',
          icon: '',
        },
      ]}
    />
  );
}
