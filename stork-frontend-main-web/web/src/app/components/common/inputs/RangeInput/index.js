import React from 'react';
import PropTypes from 'prop-types';
import InputRange from 'react-input-range';
import DEFAULT_CLASS_NAMES from 'react-input-range/src/js/input-range/default-class-names';

import 'react-input-range/lib/css/index.css';
import './styles.css';

const RangeInput = ({
  color,
  onChange,
  value,
  minValue = 0,
  maxValue = 20,
}) => {
  const classNames = {
    ...DEFAULT_CLASS_NAMES,
    labelContainer: 'hidden',
    slider: `${DEFAULT_CLASS_NAMES.slider} border-${color} stork-slider`,
    track: `${DEFAULT_CLASS_NAMES.track} h-0.5`,
    activeTrack: `${DEFAULT_CLASS_NAMES.activeTrack} bg-${color} h-0.5`,
  };
  return (
    <InputRange
      maxValue={maxValue}
      minValue={minValue}
      value={value}
      onChange={onChange}
      classNames={classNames}
    />
  );
};

RangeInput.defaultProps = {
  color: 'orange',
};

RangeInput.propTypes = {
  color: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  ]).isRequired,
  minValue: PropTypes.number.isRequired,
  maxValue: PropTypes.number.isRequired,
};

export default RangeInput;
