import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

import menuSettingsIcon from '@images/menu-settings.svg';
import menuSearchIcon from '@images/menu-search.svg';
import menuLiveBidIcon from '@images/menu-live-bid.svg';
import menuMessagesIcon from '@images/menu-messages.svg';
import menuRequestsIcon from '@images/menu-requests.svg';
import menuPatronRequestsIcon from '@images/menu-patron-requests.svg';
import menuTripsIcon from '@images/menu-trips.svg';
import menuStorkLiveBidIcon from '@images/menu-stork-live-bid.svg';
import { useAccount } from '@queries/all';

import MenuItem from './MenuItem';

const Menu = ({ dismiss }) => {
  const { data } = useAccount();
  const history = useHistory();
  const location = `${data?.region}, ${data?.country}`;
  const photoUrl = data?.profile_picture_url;
  const isStork = data?.is_stork ?? false;

  const navigateTo = (route) => () => {
    dismiss();
    history.push(route);
  };
  const menuItems = [
    {
      key: 1,
      iconSrc: menuSearchIcon,
      label: 'SEARCH',
      onClick: navigateTo('/home/patron/dashboard'),
    },
    {
      key: 2,
      iconSrc: menuLiveBidIcon,
      label: 'LIVE BID',
    },
    {
      key: 3,
      iconSrc: menuMessagesIcon,
      label: 'MESSAGES',
      onClick: navigateTo('/home/messages'),
    },
    {
      key: 4,
      iconSrc: menuRequestsIcon,
      label: 'MY REQUESTS',
      onClick: navigateTo('/home/my-requests'),
    },
    {
      key: 5,
      iconSrc: menuSettingsIcon,
      label: 'SETTINGS',
    },
  ];

  const storkMenuItems = [
    {
      key: 1,
      iconSrc: menuTripsIcon,
      label: 'TRIPS',
    },
    {
      key: 2,
      iconSrc: menuPatronRequestsIcon,
      label: 'PATRON REQUESTS',
      onClick: navigateTo('/home/patron-requests/matches'),
    },
    {
      key: 3,
      iconSrc: menuStorkLiveBidIcon,
      label: 'STORK LIVE BID',
    },
  ];

  return (
    <>
      <div className="w-68 bg-blue-gray p-7">
        <div className="flex items-center mb-10">
          <img className="w-11 rounded-full" src={photoUrl} alt="" />
          <div className="ml-4 opacity-95">
            <p className="font-gotham-bold text-white text-sm">{data?.name}</p>
            <p className="font-gotham-medium text-white text-2xs">{location}</p>
          </div>
        </div>
        <div className="pl-1">
          {menuItems.map(({ key, ...props }) => (
            <MenuItem key={key} {...props} />
          ))}
          <div className="border-b border-white w-40 my-4" />
          {!isStork && (
            <p className="font-gotham-medium text-white text-opacity-95 pt-3 pb-2">
              Become a Stork
            </p>
          )}
          {storkMenuItems.map(({ key, ...props }) => (
            <MenuItem key={key} {...props} disabled={!isStork} />
          ))}
        </div>
      </div>
      <div className="flex-1 bg-gray-600 bg-opacity-70" />
    </>
  );
};

Menu.propTypes = {
  dismiss: PropTypes.func.isRequired,
};

export default Menu;
