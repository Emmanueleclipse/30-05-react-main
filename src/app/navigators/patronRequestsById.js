import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import StorkFinalAdjustment from '@screens/stork/StorkFinalAdjustment';
import StorkFinalAdjustmentItem from '@screens/stork/StorkFinalAdjustmentItem';
import StorkFinalShipping from '@screens/stork/StorkFinalShipping';
import StorkFinalShippingBox from '@screens/stork/StorkFinalShippingBox';
import StorkFinalShippingItems from '@screens/stork/StorkFinalShippingItems';
import StorkBidReview from '@screens/stork/StorkBidReview';

const PatronRequestsByIdNavigator = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}/:patronId/adjustments/items/:itemId`}>
        <StorkFinalAdjustmentItem />
      </Route>
      <Route path={`${match.path}/:patronId/adjustments`}>
        <StorkFinalAdjustment />
      </Route>
      <Route path={`${match.path}/:patronId/shipping/add-box`}>
        <StorkFinalShippingBox />
      </Route>
      <Route path={`${match.path}/:patronId/shipping/items`}>
        <StorkFinalShippingItems />
      </Route>
      <Route path={`${match.path}/:patronId/live-bid`}>
        <StorkBidReview />
      </Route>
      <Route path={`${match.path}/:patronId/shipping`}>
        <StorkFinalShipping />
      </Route>
    </Switch>
  );
};

export default PatronRequestsByIdNavigator;
