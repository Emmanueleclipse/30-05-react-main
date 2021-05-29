/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c9a6caef0c4dd1c46b83
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import RequestCard from '@common/cards/RequestCard';
import { cairoRequests, marrakeshRequests } from './mocks';

const StorkRequestsAccepted = () => {
  const history = useHistory();
  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-widest px-3 mt-8 mb-4';
  const onClickCard = (data) => () => {
    const { id, patronId, photoUrl, name } = data;
    history.push(`${id}/patrons/${patronId}/adjustments`, {
      photoUrl,
      name,
    });
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
      <p className={regionTitleClass}>MARRAKESH</p>
      {marrakeshRequests.map(({ id, ...props }) => (
        <div className="mb-3" key={id}>
          <RequestCard {...props} onClick={onClickCard({ id, ...props })} />
        </div>
      ))}
    </>
  );
};

export default StorkRequestsAccepted;
