/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c7268b74144daf39155c
 */

import React from 'react';
import { useHistory } from 'react-router-dom';
import { useRequests } from '@queries/patron/requests';
import RequestCard from '@common/cards/RequestCard';

const PatronPostsRequests = () => {
  const history = useHistory();
  const { data } = useRequests();
  console.log('data', data);

  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-1/5 px-3 mt-8 mb-4';
  const onClickCard = (obj) => () => {
    history.push(`my-requests/${obj.id}/storks`, {
      ...obj,
      fromTo: 'From Cairo to Boston',
    });
  };

  return (
    <>
      {/* TODO: Show dynamic Region */}
      <p className={regionTitleClass}>CAIRO</p>
      {data?.requests ?
        data.requests.map(({ id, ...props }) => {
          return (
            <div className="mb-3" key={id}>
              <RequestCard {...props} onClick={onClickCard({ id, ...props })} />
            </div>
          );
        }) : <p className="text-center mt-5">No request found!</p>}
    </>
  );
};

export default PatronPostsRequests;
