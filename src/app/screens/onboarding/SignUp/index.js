import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';

import TitleBold from '@common/TitleBold';
import TextInput from '@common/inputs/TextInput';
import forwardArrowOrange from '@images/forward-arrow-orange.svg';
import storkLogo from '@images/stork-logo.svg';
import useSignUpForm from '@contexts/useSignUpForm';

const SignUp = () => {
  const { formInfo: initialFormInfo, updateFormInfo } = useSignUpForm();
  const [formInfo, setFormInfo] = useState(initialFormInfo);
  const match = useRouteMatch();
  const history = useHistory();
  const onChange = (key) => ({ target }) => {
    setFormInfo({ ...formInfo, [key]: target.value });
  };
  const isValid =
    formInfo.name &&
    formInfo.email &&
    formInfo.password &&
    formInfo.confirmPassword &&
    formInfo.password === formInfo.confirmPassword;

  const onClickNextArrow = () => {
    updateFormInfo(formInfo);
    history.push(`${match.path}/form`);
  };

  return (
    <div className="h-screen flex flex-col flex-1 bg-gray-50 pr-6 2xs:pr-8">
      <div className="flex flex-1 pl-8 items-end pb-12">
        <div>
          <img className="w-48 2xs:w-56 mb-7 2xs:mb-8" src={storkLogo} alt="" />
          <TitleBold
            className="tracking-widest leading-6"
            colorClassName="text-blue-gray"
            sizeClassName="text-xl 2xs:text-2xl"
            text={'Fulfill your\ncultural palette'}
          />
        </div>
      </div>
      <div className="flex flex-col flex-1 justify-between bg-blue-gray py-8 2xs:py-10 pl-8 2xs:pl-10 pr-12 2xs:pr-15 rounded-tr-4xl">
        <div>
          <div className="mb-4">
            <TextInput
              className="py-1 2xs:py-2 border-white"
              sizeClassName="text-xs 2xs:text-sm"
              colorClassName="text-white"
              placeholder="Enter name"
              value={formInfo.name}
              onChange={onChange('name')}
              required
            />
          </div>
          <div className="mb-4">
            <TextInput
              className="py-1 2xs:py-2 border-white"
              sizeClassName="text-xs 2xs:text-sm"
              colorClassName="text-white"
              placeholder="Enter email"
              value={formInfo.email}
              onChange={onChange('email')}
              required
            />
          </div>
          <div className="mb-4">
            <TextInput
              type="password"
              className="py-1 2xs:py-2 border-white"
              sizeClassName="text-xs 2xs:text-sm"
              colorClassName="text-white"
              placeholder="Enter password"
              value={formInfo.password}
              onChange={onChange('password')}
              required
            />
          </div>
          <TextInput
            type="password"
            className="py-1 2xs:py-2 border-white"
            sizeClassName="text-xs 2xs:text-sm"
            colorClassName="text-white"
            placeholder="Enter confirm password"
            value={formInfo.confirmPassword}
            onChange={onChange('confirmPassword')}
            required
          />
        </div>
        <div>
          <div className="flex justify-between">
            <p className="font-gotham-bold text-white text-2xl 2xs:text-3xl">
              Sign Up
            </p>
            <button
              type="button"
              onClick={onClickNextArrow}
              disabled={!isValid}
            >
              <img className="w-7" src={forwardArrowOrange} alt="" />
            </button>
          </div>
          <p
            className="font-gotham-medium text-white text-2xs mt-1 2xs:mt-2"
            onClick={() => history.push('/sign-in')}
            role="presentation"
          >
            Already have an account?
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
