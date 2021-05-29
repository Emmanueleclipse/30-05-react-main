import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import { SignUpProvider } from '@contexts/all/useSignUpForm';
import SignUp from '@screens/onboarding/SignUp';
import SignUpForm from '@screens/onboarding/SignUpForm';

const SignUpNavigator = () => {
  const match = useRouteMatch();
  return (
    <SignUpProvider>
      <div className="bg-gray-50">
        <div className="container mx-auto">
          <Switch>
            <Route path={`${match.path}/form`}>
              <SignUpForm />
            </Route>
            <Route path={match.path}>
              <SignUp />
            </Route>
          </Switch>
        </div>
      </div>
    </SignUpProvider>
  );
};

export default SignUpNavigator;
