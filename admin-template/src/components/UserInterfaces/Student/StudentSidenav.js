/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React from 'react';
import SideNav from '../../Materialize_UI/layout/Sidenav';
/* STYLE AND FILES IMPORTS */
import user_icon from '../../../images/male-user.png';
import user_bg from '../../../images/background.jpg';

/*************** COMPONENT SCOPE *****************/
export function StudentSidenav() {
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
          type: 'with_icon',
          label: 'Class',
          className: 'grey-text text-darken-2',
          url: '/class',
          iconClass: 'small material-icons',
          icon: 'class',
        },
        { type: 'divider' },
        {
          type: 'with_icon',
          label: 'Timetable',
          className: 'grey-text text-darken-2',
          url: '/timetable',
          iconClass: 'small fa fa-calendar-alt',
          icon: '',
        },
      ]}
    />
  );
}
