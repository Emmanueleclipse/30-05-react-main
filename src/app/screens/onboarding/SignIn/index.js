import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import TitleBold from '@common/TitleBold';
import TextInput from '@common/inputs/TextInput';
import forwardArrowTeal from '@images/forward-arrow-teal.svg';
import storkLogo from '@images/stork-logo.svg';
import useMutationLogin from '@mutations/all/useMutationLogin';

const SignIn = () => {
  const [formInfo, setFormInfo] = useState({
    email: '',
    password: '',
  });
  const history = useHistory();
  const mutation = useMutationLogin();
  const onChange = (key) => ({ target }) => {
    setFormInfo({ ...formInfo, [key]: target.value });
  };
  const onClickSignIn = () => {
    mutation.mutate(formInfo, {
      onSuccess: () => history.push('/home'),
    });
  };

  return (
    <div className="h-screen flex flex-col flex-1 justify-between p-10 bg-gray-50">
      <div className="h-16" />
      <div>
        <img className="w-48 2xs:w-56 mb-7 2xs:mb-8" src={storkLogo} alt="" />
        <TitleBold
          className="tracking-widest leading-7"
          colorClassName="text-blue-gray"
          sizeClassName="text-xl 2xs:text-2xl"
          text={'Fulfill your\ncultural palette'}
        />
      </div>
      <div className="mt-12 w-6/7 md:w-1/2">
        <div className="mb-3">
          <TextInput
            className="py-2 border-blue-gray"
            sizeClassName="text-xs 2xs:text-sm"
            placeholder="Enter email"
            value={formInfo.email}
            onChange={onChange('email')}
            required
          />
        </div>
        <TextInput
          className="py-2 border-blue-gray"
          type="password"
          sizeClassName="text-xs 2xs:text-sm"
          placeholder="Enter password"
          value={formInfo.password}
          onChange={onChange('password')}
          required
        />
        <Link to="/forgot-password">
          <p className="font-gotham-medium text-teal text-2xs mt-3">
            Forgot password?
          </p>
        </Link>
      </div>
      <div className="w-6/7 md:w-1/2">
        <div className="flex justify-between">
          <p className="font-gotham-bold text-blue-gray text-2xl 2xs:text-3xl">
            Sign In
          </p>
          <img
            className="w-7 cursor-pointer"
            src={forwardArrowTeal}
            alt=""
            onClick={onClickSignIn}
            role="presentation"
          />
        </div>
        <p
          className="font-gotham-medium text-blue-gray text-2xs mt-1 2xs:mt-2"
          onClick={() => history.push('/sign-up')}
          role="presentation"
        >
          Create an account
        </p>
      </div>
    </div>
  );
};

export default SignIn;
