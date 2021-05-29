/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c9a7392d3a4df3602992
 */

import React from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import LocationBlueBlock from '@common/blocks/LocationBlueBlock';
import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import LiveTealBlock from '@common/blocks/LiveTealBlock';
import SectionTitle from '@common/SectionTitle';
import ItemRequestCard from '@common/cards/ItemRequestCard';
import TotalBottomBlock from '@common/blocks/TotalBottomBlock';
import { initialInfo, itemRequests } from './mocks';

const StorkFinalAdjustment = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { state } = history.location;
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title="PATRON REQUESTS" />
  );
  const onClickAvatar = () => {};
  const onClickItem = (itemId) => () => {
    history.push(`${match.url}/items/${itemId}`);
  };
  const onClickShoppingComplete = () => {
    // TODO: Call API service
    history.push('shipping', state);
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <LiveTealBlock
        onClickAvatar={onClickAvatar}
        photoUrl={state?.photoUrl}
        name={state?.name}
        timeLeft="Ship 06/30"
      />
      <div className="flex flex-col flex-1">
        <LocationBlueBlock title={initialInfo.location}>
          <p className="font-gotham-medium text-white text-xl text-opacity-95 tracking-wide">
            {initialInfo.packageName}
          </p>
        </LocationBlueBlock>
        <div className="bg-blue-gray">
          <div className="rounded-tl-4xl bg-white px-4 pt-8 pb-36">
            <SectionTitle className="px-4 mb-4" label="Items" />
            <div className="">
              {itemRequests.map(({ id, ...props }) => (
                <div className="mb-4" key={id}>
                  <ItemRequestCard {...props} onClick={onClickItem(id)} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <TotalBottomBlock
          orangeAmount={initialInfo.total.amount1}
          blackAmount={initialInfo.total.amount2}
          buttonLabel="SHOPPING COMPLETE"
          onClickSubmit={onClickShoppingComplete}
        />
      </div>
    </ScreenContainer>
  );
};

export default StorkFinalAdjustment;
