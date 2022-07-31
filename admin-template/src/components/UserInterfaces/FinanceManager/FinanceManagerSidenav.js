/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React from 'react';
import { Link } from 'react-router-dom';
import SideNav from '../../Materialize_UI/layout/Sidenav';
/* STYLE AND FILES IMPORTS */
import user_icon from '../../../images/male-user.png';
import user_bg from '../../../images/background.jpg';

/*************** COMPONENT SCOPE *****************/
export function FinanceManagerSidenav() {
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
          label: 'Payment',
          headerClassName: 'grey-text text-darken-2',
          className: '',
          iconClass: 'small material-icons',
          icon: 'payment',
          elems: [
            <li key="paymentProcedure">
              <Link to="/paymentProcedure">
                <i className="fa fa-file-invoice-dollar tiny"></i>
                Payment Procedure
              </Link>
            </li>,
            <li key="fixFees">
              <Link to="/fixFees">
                <i className="fa fa-hand-holding-usd tiny"></i>
                Fix Fees
              </Link>
            </li>,
          ],
        },
      ]}
    />
  );
}
