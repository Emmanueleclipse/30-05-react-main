import React from 'react';
import PropTypes from 'prop-types';

import Button from '@common/Button';

const TotalBottomBlock = (props) => {
  const { amount1, amount2, onClickSubmit, buttonLabel } = props;
  return (
    <div className="p-3 border-t bg-white container fixed bottom-0 flex flex-col">
      <div className="flex justify-between px-4 mb-4 items-center">
        <p className="font-gotham-medium text-blue-gray">TOTAL</p>
        <div>
          <p className="font-gotham-medium text-orange text-2xl text-right">
            {amount1}
          </p>
          <p className="font-gotham-medium text-blue-gray text-right">
            {amount2}
          </p>
        </div>
      </div>
      <div className="flex">
        <Button
          className="w-full text-base font-gotham-bold"
          label={buttonLabel}
          onClick={onClickSubmit}
          disabled={false}
        />
      </div>
    </div>
  );
};

TotalBottomBlock.propTypes = {
  amount1: PropTypes.string.isRequired,
  amount2: PropTypes.string.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default TotalBottomBlock;
