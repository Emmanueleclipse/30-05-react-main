/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c726327d7a21fb4ae8f5
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import RequestCard from '@common/cards/RequestCard';
import { cairoRequests } from './mocks';

const PatronPostsOrders = () => {
  const history = useHistory();
  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-1/5 px-3 mt-8 mb-4';
  const onClickCard = (data) => () => {
    history.push(`${data.id}/storks/${data.storkId}/live-bid`, data);
  };

  return (
    <>
      <p className={regionTitleClass}>CAIRO</p>
      {cairoRequests.map(({ id, ...props }) => (
        <div className="mb-3" key={id}>
          <RequestCard
            {...props}
            isLiveBid
            onClick={onClickCard({ id, ...props })}
          />
        </div>
      ))}
    </>
  );
};

export default PatronPostsOrders;
