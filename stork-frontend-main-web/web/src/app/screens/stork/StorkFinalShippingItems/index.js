/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c9a8c4dcb0513307f5a4
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import WhiteHeader from '@common/headers/WhiteHeader';
import ScreenContainer from '@common/ScreenContainer';
import SectionTitle from '@common/SectionTitle';
import ShippingItemCard from '@common/cards/ShippingItemCard';

import { itemsList, unavailableItemsList } from './mocks';

const StorkFinalShippingItems = () => {
  const history = useHistory();
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} title="PATRON REQUESTS" />
  );
  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="px-4 py-7">
        <SectionTitle className="px-4 mb-3" label="Items" />
        {itemsList.map(({ id, ...props }) => (
          <div className="mb-4" key={id}>
            <ShippingItemCard {...props} />
          </div>
        ))}
        <SectionTitle className="px-4 mb-3" label="Unavailable Items" />
        {unavailableItemsList.map(({ id, ...props }) => (
          <div className="mb-4" key={id}>
            <ShippingItemCard {...props} />
          </div>
        ))}
      </div>
    </ScreenContainer>
  );
};

export default StorkFinalShippingItems;
