import React from 'react';

const Modal = ({ id, className, title, children, footerContent }) => {
  return (
    <div id={id} className={className}>
      <div className="modal-content">
        <h4 className="center">{title}</h4>
        {children}
        {footerContent ? (
          <div className="modal-footer">{footerContent}</div>
        ) : null}
      </div>
    </div>
  );
};

export default React.memo(Modal);
