/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c6268f989e22c8789491
 */

import React from 'react';

import RequestCard from '@common/cards/RequestCard';
import { useSearchRequest } from '@queries/all';
import moment from 'moment';

const mapToRender = ({ patron, request }) => {
  // TODO: TBD what to render in case there is no delivery_end_date if that is possible
  const deliveryEndDate = request?.delivery_date_range_end
    ? moment(request?.delivery_date_range_end)
    : 'MM/DD';
  const endDate = deliveryEndDate.format('MM/DD');

  // TODO: TBD what to render in case there is no profile_picture_url if that is possible
  const photoUrl =
    patron.profile_picture_url ??
    'https://i.picsum.photos/id/168/134/134.jpg?hmac=MfgxpaUmBqZFsWGdGScJxm1kfy6tyqo7ktF3oTAhzzI';

  return {
    id: request?.id,
    name: patron?.name,
    packageName: request?.title ?? 'Coffee and Scarves',
    amount1: `$${request?.price_total}`,
    // TODO: TBD what is the amount value to use from the call API response
    amount2: '£3,716.65',
    statusDescription: `Ship ${endDate} to Unknown`,
    photoUrl,
  };
};

const PatronPostsRequests = () => {
  const { data, isSuccess } = useSearchRequest({
    // TODO: Hard coded country/region values till define UI interaction to search requests
    country: 'united states',
    region: 'california',
  });
  const requests = data?.requests?.map(mapToRender);
  const regionTitleClass =
    'font-montserrat font-bold text-blue-gray text-xl tracking-1/5 px-3 mt-8 mb-4';
  const onClickCard = () => () => {};

  return (
    <>
      <p className={regionTitleClass}>CAIRO</p>
      {isSuccess &&
        requests.map(({ id, ...props }) => (
          <div className="mb-3" key={id}>
            <RequestCard {...props} onClick={onClickCard({ id, ...props })} />
          </div>
        ))}
    </>
  );
};

export default PatronPostsRequests;
