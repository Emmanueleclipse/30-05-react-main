import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import moment from 'moment';

import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import LocationBlueBlock from '@common/blocks/LocationBlueBlock';
import LiveTealBlock from '@common/blocks/LiveTealBlock';
import Button from '@common/Button';
import SectionTitle from '@common/SectionTitle';
import RangeInput from '@common/inputs/RangeInput';
import TextInput from '@common/inputs/TextInput';
import RoundedCard from '@common/cards/RoundedCard';
import CheckWithLabel from '@common/CheckWithLabel';
import ItemRequestCard from '@common/cards/ItemRequestCard';

import orangeIncreaseIcon2 from '@images/orange-increase-icon-2.svg';
import { useRequest } from '@queries/stork/requests';
import { useMutationCreateBid } from '@mutations/stork/bids';

const mapItemToRender = (item) => {
  const { id, description, ...info } = item;
  const priceRangeHigh = info?.price_range_high;
  const quantity = info?.quantity_max;
  return {
    id,
    photoUrl:
      'https://i.picsum.photos/id/966/76/91.jpg?hmac=HkOIBu3g3af1Q3hPh8KyoVYvVAExspeFxes0MO0OeEE',
    storeName: 'Any local market',
    itemName: info?.name,
    amount: `$${priceRangeHigh}`,
    weight: info?.weight_range_high,
    units: info?.weight_unit,
    amount1: `$${priceRangeHigh * quantity}`,
    amount2: '£1363.71',
    description,
    quantity,
  };
};

const getRequestInfo = (request) => {
  const formatDate = (date) => {
    return date ? moment(date).format('MM/DD/YY') : 'MM/DD/YY';
  };
  const deliveryEndDate = formatDate(request?.delivery_date_range_end);
  const deliveryStartDate = formatDate(request?.delivery_date_range_start);
  return {
    location: request?.region?.toUpperCase(),
    packageName: 'Coffee and Scarves',
    deliveryInfo: {
      address: 'Boston, MA, USA',
      startDate: deliveryStartDate,
      endDate: deliveryEndDate,
      flexible: request?.delivery_date_flexible,
    },
    shipping: {
      type: request?.shipping_method,
      amount: '£973.80',
    },
    total: {
      dollars: `$${request?.price_total ?? 0}`,
      euros: '£3716.65',
    },
  };
};

const initialInfo = {
  willingToPay: 40,
};

const StorkBidReview = () => {
  const [itemRequests, setItemRequests] = useState([]);
  const [willingToPay, setWillingToPay] = useState(initialInfo.willingToPay);
  const history = useHistory();
  const mutation = useMutationCreateBid();
  const { params } = useRouteMatch();
  const { data } = useRequest(params?.requestNumber, {
    onSuccess: (response) => {
      setItemRequests(response?.items?.map(mapItemToRender) ?? []);
    },
  });
  const requestInfo = getRequestInfo(data?.request);
  const { state } = history.location;
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title="LIVE BID" withRightIcons />
  );

  const onClickLiveAvatar = () => {};
  const onClickCounter = () => {
    const onSuccess = () => {};
    const onError = () => {};
    const bidData = {
      patron: Number(params?.patronId ?? ''),
      product: 3,
      request: state?.requestId,
      price_bid: willingToPay,
      quantity: 2,
    };
    mutation.mutate(bidData, { onSuccess, onError });
  };
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
        <LocationBlueBlock title={requestInfo.location}>
          <p className="font-gotham-medium text-white text-xl text-opacity-95 tracking-wide">
            {requestInfo.packageName}
          </p>
        </LocationBlueBlock>
        <div className="bg-blue-gray">
          <div className="rounded-tl-4xl bg-white px-4 pt-8 pb-40">
            <SectionTitle
              className="px-4 mb-4"
              label="Your Location Requests"
            />
            {itemRequests.map(({ id, ...props }) => (
              <div className="mb-4" key={id}>
                <ItemRequestCard {...props} />
              </div>
            ))}
            <SectionTitle
              className="px-4 mt-7 mb-4"
              label="Delivery Information"
            />
            <div className="mb-4">
              <RoundedCard paddingHorizontal="px-3" paddingVertical="pt-2 pb-4">
                <TextInput
                  placeholder="Enter name"
                  value={requestInfo.deliveryInfo.address}
                  disabled
                />
                <div className="px-3">
                  <p className="font-gotham-medium text-blue-gray text-xs mt-6">
                    <span>{requestInfo.deliveryInfo.startDate}</span>
                    <span className="mx-3">—</span>
                    <span>{requestInfo.deliveryInfo.endDate}</span>
                  </p>
                  <div className="flex mt-2">
                    <CheckWithLabel
                      className="flex-3"
                      label="Flexible"
                      active={requestInfo.deliveryInfo.flexible}
                    />
                    <CheckWithLabel
                      className="flex-4"
                      label="Not Flexible"
                      active={!requestInfo.deliveryInfo.flexible}
                    />
                  </div>
                </div>
              </RoundedCard>
            </div>
            <RoundedCard>
              <p className="text-blue-gray text-sm">
                <span className="font-gotham-medium mr-4">Shipping</span>
                <span className="font-gotham-book">
                  {requestInfo.shipping.type}
                </span>
              </p>
            </RoundedCard>
            <SectionTitle
              className="px-4 mt-7 mb-4"
              label="Stork Compensation"
            />
            <div className="mb-6">
              <RoundedCard paddingVertical="py-0" paddingHorizontal="pl-6 pr-3">
                <div className="flex justify-between">
                  <div className="flex flex-1 justify-between pr-5">
                    <p className="font-gotham-book text-xs text-blue-gray py-5">
                      Shipping
                    </p>
                  </div>
                  <p className="font-gotham-bold text-xs text-orange py-5 border-l w-18 text-right">
                    {requestInfo.shipping.amount}
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
          </div>
        </div>
        <div className="p-3 border-t bg-white container fixed bottom-0 flex flex-col">
          <div className="flex justify-between px-4 mb-4 items-center">
            <p className="font-gotham-medium text-blue-gray">TOTAL</p>
            <div>
              <p className="font-gotham-medium text-orange text-xl text-right">
                {requestInfo.total.dollars}
              </p>
              <p className="font-gotham-medium text-blue-gray text-right">
                {requestInfo.total.euros}
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1">
              <Button
                className="w-full text-base font-gotham-bold"
                label="COUNTER (2)"
                onClick={onClickCounter}
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

export default StorkBidReview;
