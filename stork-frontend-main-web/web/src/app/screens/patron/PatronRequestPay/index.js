import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import SectionTitle from '@common/SectionTitle';
import WhiteHeader from '@common/headers/WhiteHeader';
import CardInfoItem from '@common/cards/CardInfoItem';

import { mockedCards } from './mocks';

const PatronRequestPay = () => {
  const history = useHistory();
  const [cards, setCards] = useState(mockedCards);

  const onClickCardItem = (cardId) => () => {
    const nextCards = cards.map((card) => ({
      ...card,
      selected: card.id === cardId,
    }));
    setCards(nextCards);
  };
  const onClickAddPayment = () => {
    history.push('card-details');
  };

  return (
    <div className="h-screen">
      <WhiteHeader onClickLeft={history.goBack} />
      <div className="px-8 py-6">
        <SectionTitle label="Choose how to pay" />
        <div className="mt-2 border-t-2">
          {cards.map(({ id, ...card }) => (
            <CardInfoItem key={id} {...card} onClick={onClickCardItem(id)} />
          ))}
        </div>
        <p className="font-gotham-book text-sm text-blue-gray mb-1 mt-4">
          Add payment method
        </p>
        <CardInfoItem onClick={onClickAddPayment} />
      </div>
    </div>
  );
};

export default PatronRequestPay;
