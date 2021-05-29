import React from 'react';
import PropTypes from 'prop-types';

const MenuItem = ({ iconSrc, label, disabled, onClick }) => {
  const opacity = disabled ? 'opacity-20' : 'opacity-95';
  return (
    <div
      className={`flex py-4 cursor-pointer ${opacity}`}
      onClick={onClick}
      role="presentation"
    >
      <div className="w-11">
        <img src={iconSrc} alt="" />
      </div>
      <p className="font-gotham-bold text-white text-2xs">{label}</p>
    </div>
  );
};

MenuItem.defaultProps = {
  disabled: false,
  onClick: () => {},
};

MenuItem.propTypes = {
  iconSrc: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

export default MenuItem;
