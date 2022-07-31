/*************** IMPORTS *****************/
/* FUNCTIONAL IMPORTS */
import React, { Component } from 'react';
import { MenuCollapsible } from '../small/Collapsible';
/* COMPONENTS IMPORTS */
import { Link } from 'react-router-dom';

export const SideNav = ({
  className,
  id,
  userBG,
  userIcon,
  username,
  userMail,
  items,
}) => {
  return (
    <ul id={id} className={className}>
      <li className="no-padding">
        <div className="user-view" style={{ margin: '0' }}>
          {/* User background */}
          <div className="background">
            <img className="responsive-img" src={userBG} alt="" />
          </div>
          {/* User profile picture */}
          <Link to="#user">
            <img className="circle" src={userIcon} alt="" />
          </Link>
          {/* Username */}
          <Link to="#name">
            <span className="white-text name">{username}</span>
          </Link>
          {/* User e-mail */}
          <Link to="#email">
            <span className="white-text email">{userMail}</span>
          </Link>
        </div>
      </li>
      {items.map((item, i) => {
        return (
          <li className="no-paadding" key={i}>
            {
              {
                with_icon: (
                  <Link
                    key={i}
                    to={item.url}
                    className={`collapsible-header ${item.className}`}
                  >
                    <i className={item.iconClass}>{item.icon}</i>
                    {item.label}
                  </Link>
                ),
                divider: (
                  <div
                    key={i}
                    className="divider"
                    style={{ margin: '0' }}
                  ></div>
                ),
                subheader: (
                  <Link
                    key={i}
                    className={`collapsible-header ${item.className}`}
                  >
                    {item.label}
                  </Link>
                ),
                dropdown: (
                  <MenuCollapsible
                    onClick={item.onClick}
                    className={item.className}
                    headerClassName={item.headerClassName}
                    iconClass={item.iconClass}
                    icon={item.icon}
                    label={item.label}
                    key={i}
                    elems={item.elems}
                  />
                ),
                default: <Link to={item.url}>{item.label}</Link>,
              }[item.type]
            }
          </li>
        );
      })}
    </ul>
  );
};

export default SideNav;
