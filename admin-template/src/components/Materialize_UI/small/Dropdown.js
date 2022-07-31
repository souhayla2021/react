import React from 'react';

export default function Dropdown(props) {
  return (
    <ul id={props.id} className={`dropdown-content ${props.className}`}>
      {props.items.map((item, i) => {
        return (
          <li className="no-paadding" key={i}>
            {
              {
                with_icon: (
                  <a key={i} href={item.url} className={item.className}>
                    <i className={item.iconClass}>{item.icon}</i>
                    {item.label}
                  </a>
                ),
                divider: (
                  <div
                    key={i}
                    className="divider"
                    style={{ margin: '0' }}
                  ></div>
                ),
                default: <a href={item.url}>{item.label}</a>,
              }[item.type]
            }
          </li>
        );
      })}
    </ul>
  );
}
