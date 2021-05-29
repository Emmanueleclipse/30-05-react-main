import React from 'react';
import PropTypes from 'prop-types';

import dropdownArrow from '@images/dropdown-arrow.svg';
import dropupArrow from '@images/dropup-arrow.svg';

const Dropdown = (props) => {
  const {
    selected = false,
    value,
    onClick = () => {},
    showOptions = false,
    options = [],
    onSelect,
    className,
    imageClassName,
    labelClassName,
  } = props;

  const labelColorClass = selected ? 'text-blue-gray' : 'text-gray-400';
  const onKeyPressOption = ({ key }, region) => {
    if (key === 'Enter') {
      onSelect(region);
    }
  };

  return (
    <div className={`flex bg-white relative cursor-pointer ${className}`}>
      <div className="flex items-center">
        <p className={`${labelColorClass} ${labelClassName} capitalize`}>
          {value}
        </p>
        <img
          className={`absolute ${imageClassName}`}
          src={showOptions ? dropupArrow : dropdownArrow}
          alt="dropdown-arrow"
          onClick={onClick}
          role="presentation"
        />
      </div>
      {showOptions && (
        <div className="absolute top-full w-full mt-3 rounded-xl overflow-hidden shadow-lg z-50 max-h-32 overflow-y-scroll">
          {options.map((option, index) => (
            <div
              key={option.id}
              className="bg-white py-3 hover:bg-gray-200"
              onClick={() => onSelect(option)}
              role="menuitem"
              tabIndex={index}
              onKeyPress={(keyInfo) => onKeyPressOption(keyInfo, option)}
            >
              <p className={`text-blue-gray capitalize ${labelClassName}`}>
                {option.label}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  className: '',
  imageClassName: 'right-6',
  labelClassName: '',
};

Dropdown.propTypes = {
  selected: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  showOptions: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func.isRequired,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  labelClassName: PropTypes.string,
};

export default Dropdown;
