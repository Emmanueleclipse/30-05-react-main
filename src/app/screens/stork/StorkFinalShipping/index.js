/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c9a7c88de01e02af2597
 */

import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import LiveTealBlock from '@common/blocks/LiveTealBlock';
import LocationBlueBlock from '@common/blocks/LocationBlueBlock';
import SectionTitle from '@common/SectionTitle';
import RoundedCard from '@common/cards/RoundedCard';
import TotalBottomBlock from '@common/blocks/TotalBottomBlock';
import TextInput from '@common/inputs/TextInput';
import ShippingBoxCard from '@common/cards/ShippingBoxCard';
import RangeInput from '@common/inputs/RangeInput';
import CompensationCard from '@common/cards/CompensationCard';

import forwardArrowTeal from '@images/forward-arrow-teal.svg';
import addItemButton from '@images/add-item-button.svg';
import addPhotoButton from '@images/add-photo-button.svg';
import fileToBase64 from '@utils/fileToBase64';
import { initialInfo, shippingBoxes, storkCompensation } from './mocks';

const StorkFinalShipping = () => {
  const [proofPictures, setProofPictures] = useState([]);
  const [willingToPay, setWillingToPay] = useState(initialInfo.willingToPay);
  const history = useHistory();
  const match = useRouteMatch();
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title="PATRON REQUESTS" />
  );
  const onClickAvatar = () => {};
  const { state } = history.location;
  const navigateTo = (path) => () => {
    history.push(match.url + path);
  };

  const onChangeImage = async (e) => {
    const { files } = e.target;
    const file = files?.[0] ?? null;
    try {
      const source = await fileToBase64(file);
      const nextProofPictures = [...proofPictures, { key: Date.now(), source }];
      setProofPictures(nextProofPictures);
    } catch (err) {
      // TODO: Handle error
    }
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <LiveTealBlock
        onClickAvatar={onClickAvatar}
        photoUrl={state?.photoUrl}
        name={state?.name}
        timeLeft="Ship 06/30"
      />
      <LocationBlueBlock title={initialInfo.location}>
        <p className="font-gotham-medium text-white text-xl text-opacity-95 tracking-wide">
          {initialInfo.packageName}
        </p>
      </LocationBlueBlock>
      <div className="flex flex-col flex-1">
        <div className="bg-blue-gray">
          <div className="rounded-tl-4xl bg-white px-4 pt-8 pb-40">
            <div
              className="flex justify-end items-center px-4 mb-5"
              onClick={navigateTo('/items')}
              role="presentation"
            >
              <p className="font-gotham-bold text-blue-gray text-sm mr-4">
                See Items
              </p>
              <img src={forwardArrowTeal} alt="" />
            </div>
            <SectionTitle className="px-4 mb-4" label="Delivery Information" />
            <div className="mb-4">
              <RoundedCard paddingHorizontal="px-3" paddingVertical="pt-2 pb-6">
                <TextInput
                  placeholder="Enter name"
                  value={initialInfo.delivery.name}
                  readOnly
                />
                <TextInput
                  placeholder="Enter Address Line 1"
                  value={initialInfo.delivery.address1}
                  readOnly
                />
                <TextInput
                  placeholder="Enter Address Line 2"
                  value={initialInfo.delivery.address2}
                  readOnly
                />
              </RoundedCard>
            </div>
            <div className="mb-6">
              <RoundedCard>
                <p className="text-blue-gray text-sm">
                  <span className="font-gotham-medium mr-4">Shipping</span>
                  <span className="font-gotham-book">
                    {initialInfo.shippingType}
                  </span>
                </p>
              </RoundedCard>
            </div>
            <SectionTitle className="px-4 mb-4" label="Shipping Box" />
            {shippingBoxes.map(({ id, ...props }) => (
              <div className="mb-4" key={id}>
                <ShippingBoxCard {...props} />
              </div>
            ))}
            <div className="flex px-3 justify-end items-center pt-2 pb-8">
              <p className="font-gotham-bold text-blue-gray text-sm mr-4">
                Add Shipping Box
              </p>
              <img
                className="cursor-pointer shadow-lg rounded-full"
                src={addItemButton}
                alt=""
                onClick={navigateTo('/add-box')}
                role="presentation"
              />
            </div>
            <SectionTitle className="px-4 mb-3" label="Total Shipping Cost" />
            <div className="mb-8">
              <RoundedCard paddingVertical="py-5">
                <p className="font-gotham-book text-blue-gray text-sm mb-2">
                  How much are you willing to pay your Stork for their service?
                </p>
                <p className="font-gotham-medium text-blue-gray text-lg mb-1">
                  £{willingToPay}
                </p>
                <RangeInput
                  minValue={1}
                  maxValue={3000}
                  value={willingToPay}
                  onChange={setWillingToPay}
                />
              </RoundedCard>
            </div>
            <SectionTitle className="px-4 mb-3" label="Proof of Receipt" />
            <div className="flex px-3 mb-8 overflow-x-scroll">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="inline-block cursor-pointer flex-shrink-0">
                <input
                  className="hidden"
                  type="file"
                  onChange={onChangeImage}
                  accept="image/x-png,image/jpeg,image/gif"
                  onClick={(e) => {
                    e.target.value = null;
                  }}
                />
                <img
                  className="cursor-pointer w-26 h-26"
                  src={addPhotoButton}
                  alt="add-button"
                />
              </label>
              {proofPictures.map((picture) => (
                <img
                  className="w-26 h-26 ml-3 rounded-xl flex-shrink-0"
                  key={picture.key}
                  src={picture.source}
                  alt=""
                />
              ))}
            </div>
            <SectionTitle className="px-4 mb-4" label="Stork Compensation" />
            {storkCompensation.map(({ id, ...props }) => (
              <div className="mb-3" key={id}>
                <CompensationCard {...props} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <TotalBottomBlock
        orangeAmount={initialInfo.total.amount1}
        blackAmount={initialInfo.total.amount2}
        buttonLabel="REQUEST COMPLETE"
        onClickSubmit={() => {}}
      />
    </ScreenContainer>
  );
};

export default StorkFinalShipping;
