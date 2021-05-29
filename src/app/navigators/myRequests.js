import React, { useState } from 'react';
import { Route, Switch, useRouteMatch, useHistory } from 'react-router-dom';

import WhiteHeader from '@common/headers/WhiteHeader';
import PatronPostsRequests from '@screens/patron/PatronPostsRequests';
import PatronPostsOrders from '@screens/patron/PatronPostsOrders';
import PatronPostsHistory from '@screens/patron/PatronPostsHistory';

const getNavSelectedByRouting = (pathname) => {
  let navSelected = 'requests';
  if (pathname.includes('history')) {
    navSelected = 'history';
  } else if (pathname.includes('orders')) {
    navSelected = 'orders';
  }
  return navSelected;
};

const RequestsNavigator = () => {
  const match = useRouteMatch();
  const history = useHistory();
  const { pathname } = history.location;

  const [navSelected, setNavSelected] = useState(
    getNavSelectedByRouting(pathname),
  );
  const getNavClass = (nav) => {
    const navBaseClass =
      'flex flex-1 py-2 border-b-2 border-teal justify-center ';
    const opacityClass = navSelected === nav ? 'opacity-100' : 'opacity-50';
    return navBaseClass + opacityClass;
  };
  const navList = [
    {
      key: 'orders',
      label: 'Orders',
    },
    {
      key: 'requests',
      label: 'Requests',
    },
    {
      key: 'history',
      label: 'History',
    },
  ];
  const onClickNav = (key) => () => {
    setNavSelected(key);
    switch (key) {
      case 'orders':
        history.push('/home/my-requests/orders');
        break;
      case 'requests':
        history.push('/home/my-requests');
        break;
      case 'history':
        history.push('/home/my-requests/history');
        break;
      default:
        break;
    }
  };

  return (
    <div className="h-screen flex flex-col">
      <WhiteHeader
        onClickLeft={() => history.push('/home')}
        title="MY REQUESTS"
        withRightIcons
        withAvatar
      />
      <div className="px-4 flex-1 py-5">
        <div className="flex">
          {navList.map(({ key, label }) => (
            <div
              className={getNavClass(key)}
              onClick={onClickNav(key)}
              role="presentation"
              key={key}
            >
              <p className="font-gotham-bold text-blue-gray text-xs">{label}</p>
            </div>
          ))}
        </div>
        <div className="">
          <Switch>
            <Route path={`${match.path}/orders`}>
              <PatronPostsOrders />
            </Route>
            <Route path={`${match.path}/history`}>
              <PatronPostsHistory />
            </Route>
            <Route path={match.path}>
              <PatronPostsRequests />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default RequestsNavigator;
