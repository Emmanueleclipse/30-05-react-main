/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c7268b74144daf39155c
 */

import React from 'react';
import { useHistory } from 'react-router-dom';

import RequestCard from '@common/cards/RequestCard';
import { cairoRequests } from './mocks';

const PatronPostsRequests = () => {
  const history = useHistory();
  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-1/5 px-3 mt-8 mb-4';
  const onClickCard = (data) => () => {
    history.push(`my-requests/${data.id}/storks`, {
      ...data,
      fromTo: 'From Cairo to Boston',
    });
  };

  return (
    <>
      <p className={regionTitleClass}>CAIRO</p>
      {cairoRequests.map(({ id, ...props }) => (
        <div className="mb-3" key={id}>
          <RequestCard {...props} onClick={onClickCard({ id, ...props })} />
        </div>
      ))}
    </>
  );
};

export default PatronPostsRequests;
