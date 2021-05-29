import React from 'react';
import PropTypes from 'prop-types';

const TextInput = (props, ref) => {
  const {
    className,
    sizeClassName,
    colorClassName,
    familyClassName,
    ...baseProps
  } = props;
  const nextProps =
    JSON.stringify(ref) === '{}' ? baseProps : { ...baseProps, ref };
  return (
    <input
      className={`border-b w-full ${sizeClassName} ${colorClassName} ${familyClassName} bg-transparent ${className}`}
      type="text"
      {...nextProps}
    />
  );
};

TextInput.defaultProps = {
  className: 'p-3',
  sizeClassName: 'text-xs',
  familyClassName: 'font-gotham-medium',
  colorClassName: 'text-blue-gray',
  onChange: () => {},
};

TextInput.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  sizeClassName: PropTypes.string,
  familyClassName: PropTypes.string,
  colorClassName: PropTypes.string,
  onChange: PropTypes.func,
};

export default TextInput;
