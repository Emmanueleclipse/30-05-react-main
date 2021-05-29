/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c7254493b15221f4c3fa
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import WhiteHeader from '@common/headers/WhiteHeader';
import LiveTealBlock from '@common/blocks/LiveTealBlock';
import ScreenContainer from '@common/ScreenContainer';
import LocationBlueBlock from '@common/blocks/LocationBlueBlock';
import SectionTitle from '@common/SectionTitle';
import ItemRequestCard from '@common/cards/ItemRequestCard';
import RoundedCard from '@common/cards/RoundedCard';
import Button from '@common/Button';
import RangeInput from '@common/inputs/RangeInput';
import TextInput from '@common/inputs/TextInput';
import CheckWithLabel from '@common/CheckWithLabel';
import orangeIncreaseIcon2 from '@images/orange-increase-icon-2.svg';

import { itemRequests, initialInfo } from './mocks';

const PatronBidReview = () => {
  const [willingToPay, setWillingToPay] = useState(initialInfo.willingToPay);
  const history = useHistory();
  const { state } = history.location;

  const onClickLiveAvatar = () => {
    history.push('profile');
  };
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title="LIVE BID" />
  );
  const questionClassname = 'font-gotham-book text-blue-gray text-sm';

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <LiveTealBlock
        onClickAvatar={onClickLiveAvatar}
        photoUrl={state?.photoUrl}
        name={state?.name}
        timeLeft="24h 0m 0s"
      />
      <div className="flex flex-col flex-1">
        <LocationBlueBlock title={initialInfo.location}>
          <p className="font-gotham-medium text-white text-xl text-opacity-95 tracking-wide">
            {initialInfo.packageName}
          </p>
        </LocationBlueBlock>
        <div className="bg-blue-gray">
          <div className="rounded-tl-4xl bg-white px-4 pt-8 pb-40">
            <SectionTitle
              className="px-4 mb-4"
              label="Your Location Requests"
            />
            <div className="">
              {itemRequests.map(({ id, ...props }) => (
                <div className="mb-4" key={id}>
                  <ItemRequestCard {...props} />
                </div>
              ))}
            </div>
            <SectionTitle
              className="px-4 mt-7 mb-4"
              label="Stork Compensation"
            />
            <div className="mb-3">
              <RoundedCard paddingVertical="py-0" paddingHorizontal="pl-6 pr-3">
                <div className="flex justify-between">
                  <p className="font-gotham-book text-xs text-blue-gray py-5">
                    Fees
                  </p>
                  <p className="font-gotham-bold text-xs text-orange py-5 border-l w-18 text-right">
                    {initialInfo.fees}
                  </p>
                </div>
              </RoundedCard>
            </div>
            <div className="mb-6">
              <RoundedCard paddingVertical="py-0" paddingHorizontal="pl-6 pr-3">
                <div className="flex justify-between">
                  <div className="flex flex-1 justify-between pr-5">
                    <p className="font-gotham-book text-xs text-blue-gray py-5">
                      Shipping
                    </p>
                    <p className="font-gotham-book text-xs text-blue-gray py-5">
                      {initialInfo.shipping.weight}
                    </p>
                  </div>
                  <p className="font-gotham-bold text-xs text-orange py-5 border-l w-18 text-right">
                    {initialInfo.shipping.amount}
                  </p>
                </div>
              </RoundedCard>
            </div>
            <RoundedCard>
              <p className={questionClassname}>
                How much are you willing to pay your Stork for their service?
              </p>
              <div className="flex my-3">
                <p className="font-gotham-medium text-blue-gray text-base mr-1">
                  ${willingToPay}
                </p>
                <img src={orangeIncreaseIcon2} alt="" />
              </div>
              <RangeInput
                minValue={1}
                maxValue={100}
                value={willingToPay}
                onChange={setWillingToPay}
              />
            </RoundedCard>
            <SectionTitle
              className="px-4 mt-7 mb-4"
              label="Delivery Information"
            />
            <div className="mb-4">
              <RoundedCard paddingHorizontal="px-3">
                <p className={`${questionClassname} px-3 mb-1`}>
                  Your exact address will remain private until items are ready
                  for shipping.
                </p>
                <TextInput
                  placeholder="Enter name"
                  value={initialInfo.deliveryInfo.address1}
                  disabled
                />
                <TextInput
                  placeholder="Enter Address Line 1"
                  value={initialInfo.deliveryInfo.address2}
                  disabled
                />
                <div className="px-3">
                  <p className="font-gotham-medium text-blue-gray text-xs mt-8">
                    <span>{initialInfo.deliveryInfo.startDate}</span>
                    <span className="mx-3">—</span>
                    <span>{initialInfo.deliveryInfo.endDate}</span>
                  </p>
                  <div className="flex mt-2">
                    <CheckWithLabel
                      className="flex-3"
                      label="Flexible"
                      active={initialInfo.deliveryInfo.flexible}
                    />
                    <CheckWithLabel
                      className="flex-4"
                      label="Not Flexible"
                      active={!initialInfo.deliveryInfo.flexible}
                    />
                  </div>
                </div>
              </RoundedCard>
            </div>
            <RoundedCard>
              <p className="text-blue-gray text-sm">
                <span className="font-gotham-medium mr-4">Shipping</span>
                <span className="font-gotham-book">
                  {initialInfo.shipping.type}
                </span>
              </p>
            </RoundedCard>
          </div>
        </div>
        <div className="p-3 border-t bg-white container fixed bottom-0 flex flex-col">
          <div className="flex justify-between px-4 mb-4 items-center">
            <p className="font-gotham-medium text-blue-gray">TOTAL</p>
            <div>
              <p className="font-gotham-medium text-orange text-xl text-right">
                {initialInfo.total.dollars}
              </p>
              <p className="font-gotham-medium text-blue-gray text-right">
                {initialInfo.total.euros}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1">
              <Button
                className="w-full text-base font-gotham-bold"
                label="COUNTER (2)"
                onClick={() => {}}
                disabled={false}
                color="orange"
              />
            </div>
            <div className="w-3" />
            <div className="flex-1">
              <Button
                className="w-full text-base font-gotham-bold"
                label="ACCEPT"
                onClick={() => {}}
                disabled={false}
              />
            </div>
          </div>
        </div>
      </div>
    </ScreenContainer>
  );
};

export default PatronBidReview;
