import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import SectionTitle from '@common/SectionTitle';

const getItemToRender = (item) => {
  const { itemName, storeName, description, quantity, photoUrl } = item;
  const weightRange = `${item.weightRangeLow} ${item.units} - ${item.weight} ${item.units}`;
  const itemPriceRange = `£130.32 - £194.86 | ${item.priceRangeLow} - ${item.amount}`;

  return {
    itemName,
    photoUrl,
    storeName,
    description,
    itemPriceRange,
    weightRange,
    quantity,
  };
};

const Section = ({ title, content }) => {
  return (
    <div className="mb-6">
      <SectionTitle label={title} className="mb-1" />
      <p className="font-gotham-book text-blue-gray text-sm">{content}</p>
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const StorkBidItemReview = () => {
  const history = useHistory();
  const { state } = history.location;
  const HeaderComponent = () => <WhiteHeader onClickLeft={history.goBack} />;
  const item = getItemToRender(state ?? {});

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="px-8 py-2">
        <img
          className="rounded-xl mb-6 w-full h-64"
          src={item.photoUrl}
          alt=""
        />
        <Section title={item.itemName} content={item.description} />
        <Section title="Store Name" content={item.storeName} />
        <Section title="Item Price Range" content={item.itemPriceRange} />
        <Section title="Weight Range" content={item.weightRange} />
        <Section title="Quantity" content={item.quantity} />
      </div>
    </ScreenContainer>
  );
};

export default StorkBidItemReview;
