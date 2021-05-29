/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c7255822f41fc2a14849
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import WhiteHeader from '@common/headers/WhiteHeader';
import { mockedProfile, currentOrders } from './mocks';

const PatronBidStork = () => {
  const history = useHistory();
  const sectionTitleClass = 'font-gotham-medium text-gray-700 text-lg mb-2';
  const gothamBook2xs = 'font-gotham-book text-blue-gray text-2xs';

  return (
    <div className="h-screen flex flex-col">
      <WhiteHeader
        onClickLeft={history.goBack}
        title="LIVE BID"
        withRightIcons
      />
      <div className="p-4 pt-6 flex-1 flex flex-col">
        <div className="flex flex-col items-center pb-7 border-b">
          {mockedProfile.photoUrl && (
            <img
              src={mockedProfile.photoUrl}
              alt=""
              className="rounded-full w-32 mb-3"
            />
          )}
          <p className="font-gotham-medium text-gray-800 text-3xl mb-2">
            {mockedProfile.name}
          </p>
          <p className="font-gotham-medium text-gray-800 text-sm">
            {mockedProfile.location}
          </p>
        </div>
        <div className="flex flex-col px-3 pb-4 pt-7 border-b">
          <p className={sectionTitleClass}>Profile</p>
          <p className="font-gotham-book text-gray-700 text-xs mb-2">
            {mockedProfile.profileDescription}
          </p>
          <p className="font-gotham-medium text-gray-400 text-2xs">
            <span className="mr-3">Orders Completed</span>
            <span>{mockedProfile.ordersCompleted}</span>
          </p>
        </div>
        <div className="pt-7 px-3 mb-2">
          <p className={sectionTitleClass}>Current Orders</p>
        </div>
        {currentOrders.map((order) => (
          <div
            className="flex rounded-2xl shadow-xl px-4 py-6 items-center"
            key={order.id}
          >
            <img className="rounded-full w-16" src={order.photoUrl} alt="" />
            <div className="ml-4">
              <p className={gothamBook2xs}>{order.name}</p>
              <p className="font-gotham-medium text-blue-gray text-xs mb-1">
                {order.packageName}
              </p>
              <p className={gothamBook2xs}>{order.fromTo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatronBidStork;
