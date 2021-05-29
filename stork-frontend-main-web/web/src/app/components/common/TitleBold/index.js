import React from 'react';
import PropTypes from 'prop-types';

const TitleBold = (props) => {
  const { text = '', className = '', sizeClassName, colorClassName } = props;
  const paragraphs = text.split('\n').map((str) => (
    <p
      className={`${colorClassName} font-montserrat font-bold ${sizeClassName} ${className}`}
      key={str}
    >
      {str}
    </p>
  ));
  return <>{paragraphs}</>;
};

TitleBold.defaultProps = {
  sizeClassName: 'text-xl',
  colorClassName: 'text-white',
};

TitleBold.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  sizeClassName: PropTypes.string,
  colorClassName: PropTypes.string,
};

export default TitleBold;
