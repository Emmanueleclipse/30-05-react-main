import React from 'react';
import PropTypes from 'prop-types';

import Button from '@common/Button';

const TotalBottomBlock = (props) => {
  const { orangeAmount, blackAmount, onClickSubmit, buttonLabel } = props;
  return (
    <div className="px-4 py-3 border-t bg-white container fixed bottom-0 flex flex-col">
      <div className="flex justify-between px-4 mb-4 items-center">
        <p className="font-gotham-medium text-blue-gray">TOTAL</p>
        <div>
          <p className="font-gotham-medium text-orange text-2xl text-right">
            {orangeAmount}
          </p>
          <p className="font-gotham-medium text-blue-gray text-right">
            {blackAmount}
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
  orangeAmount: PropTypes.string.isRequired,
  blackAmount: PropTypes.string.isRequired,
  onClickSubmit: PropTypes.func.isRequired,
  buttonLabel: PropTypes.string.isRequired,
};

export default TotalBottomBlock;
