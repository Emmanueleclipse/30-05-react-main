/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c9a5f116221fe8710d32
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import TextInput from '@common/inputs/TextInput';
import SectionTitle from '@common/SectionTitle';
import RangeInput from '@common/inputs/RangeInput';
import Button from '@common/Button';

const StorkFinalShippingBox = () => {
  const history = useHistory();
  const [formInfo, setFormInfo] = useState({
    trackingNumber: '',
    weight: 150,
  });
  const HeaderComponent = () => <WhiteHeader onClickLeft={history.goBack} />;
  const onChangeTrackingNumber = ({ target }) => {
    setFormInfo({ ...formInfo, trackingNumber: target.value });
  };
  const onChangeWeight = (weight) => {
    setFormInfo({ ...formInfo, weight });
  };
  const onClickSave = () => {
    // TODO: Call API service
    history.goBack();
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="flex flex-col flex-1 justify-between p-4">
        <div className="px-3">
          <div className="mb-6">
            <SectionTitle className="mb-2" label="Shipping Box 1" />
            <TextInput
              className="py-2 font-gotham-book text-base"
              placeholder="Enter tracking number"
              onChange={onChangeTrackingNumber}
              value={formInfo.trackingNumber}
            />
          </div>
          <SectionTitle className="mb-2" label="Exact Weight" />
          <p className="font-gotham-bold text-blue-gray text-lg mb-2">
            {formInfo.weight / 100} kg
          </p>
          <RangeInput
            minValue={10}
            maxValue={500}
            value={formInfo.weight}
            onChange={onChangeWeight}
            color="teal"
          />
        </div>
        <Button
          className="px-8"
          label="SAVE"
          disabled={false}
          onClick={onClickSave}
        />
      </div>
    </ScreenContainer>
  );
};

export default StorkFinalShippingBox;
