import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import Dropdown from '@common/Dropdown';
import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import SectionTitle from '@common/SectionTitle';
import Button from '@common/Button';
import ResponseCard from '@common/cards/ResponseCard';
import fileToBase64 from '@utils/fileToBase64';
import addProfilePicture from '@images/add-profile-picture.svg';
import useSignUpForm from '@contexts/all/useSignUpForm';
import useMutationSignUp from '@mutations/all/useMutationSignUp';
import useMutationLogin from '@mutations/all/useMutationLogin';

import currencyOptions from './currencies';

const TextInput = React.forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { sizeClassName = 'text-sm', ...otherProps } = props;
  return (
    <input
      ref={ref}
      className={`border-b w-full font-gotham-book text-blue-gray ${sizeClassName} bg-transparent py-2 `}
      type="text"
      {...otherProps}
    />
  );
});

const mapToRequest = ({ profileImage, confirmPassword, isStork, ...data }) => {
  const jsondata = JSON.stringify({
    ...data,
    password2: confirmPassword,
    is_stork: isStork,

    // TODO: Include form inputs to get the values or remove them from the endpoint
    city: 'City value',
    region: 'Region value',
    country: 'Country value',
    bio: 'Bio value',
  });
  const dataBlob = new Blob([jsondata], {
    type: 'application/json',
  });
  const formData = new FormData();
  formData.append('jsondata', dataBlob);
  formData.append('profile_image', profileImage[0]);
  return formData;
};

const SignUpForm = () => {
  const { formInfo, resetFormInfo } = useSignUpForm();
  const mutationSignUp = useMutationSignUp();
  const mutationLogin = useMutationLogin();

  const [showError, setShowError] = useState(false);
  const [showCurrencyOptions, setShowCurrencyOptions] = useState(false);
  const [currencyOption, setCurrencyOption] = useState({
    id: null,
    label: 'Select Currency',
  });
  const [photoUrl, setPhotoUrl] = useState(null);
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: formInfo.name,
      email: formInfo.email,
    },
  });
  const history = useHistory();
  const { isValid } = formState;
  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} bgClassName="bg-gray-50" />
  );
  const onChangeImage = async (e) => {
    const { files } = e.target;
    const file = files?.[0] ?? null;
    try {
      setPhotoUrl(await fileToBase64(file));
    } catch (err) {
      // TODO: Handle error
    }
  };
  const onSelectCurrencyOption = (optionSelected) => {
    setCurrencyOption(optionSelected);
    setShowCurrencyOptions(false);
  };
  const onClickCreateAccount = (data) => {
    const formData = mapToRequest({
      currency: currencyOption.id,
      ...formInfo,
      ...data,
    });
    const onSuccess = () => {
      const { email, password } = formInfo;
      const authorizationData = {
        email,
        password,
      };
      mutationLogin.mutate(authorizationData, {
        onSuccess: () => {
          resetFormInfo();
          history.push('/home');
        },
      });
    };
    const onError = () => {
      setShowError(true);
      setTimeout(() => setShowError(false), 6000);
    };
    mutationSignUp.mutate(formData, { onSuccess, onError });
  };
  const errorMessage = mutationSignUp?.error?.response?.data?.title;

  return (
    <ScreenContainer HeaderComponent={HeaderComponent} className="md:h-screen">
      <div className="px-4 pb-5 bg-gray-50">
        <form>
          <div className="flex justify-center">
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="inline-block cursor-pointer">
              <input
                ref={register({ required: true })}
                className="hidden"
                type="file"
                onChange={onChangeImage}
                name="profileImage"
                accept="image/x-png,image/jpeg,image/gif"
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
              <div className="w-32 h-32 rounded-full bg-gray-400 relative">
                {photoUrl && (
                  <img
                    className="cursor-pointer w-32 h-32 rounded-full"
                    src={photoUrl}
                    alt="add-button"
                  />
                )}
                <img
                  className="absolute bottom-0 right-0"
                  src={addProfilePicture}
                  alt=""
                />
              </div>
            </label>
          </div>

          <div className="px-3 pt-7">
            <div className="mb-8">
              <SectionTitle label="Name" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="name"
                placeholder="Enter Name"
              />
            </div>
            <div className="mb-8">
              <SectionTitle label="Email" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="email"
                placeholder="Enter Email"
              />
            </div>
            <div className="mb-8">
              <SectionTitle label="Phone Number" className="mb-1" />
              <TextInput
                type="tel"
                ref={register({ required: true })}
                name="phone"
                placeholder="Enter Phone Number"
              />
            </div>
            <div className="mb-8 flex flex-col">
              <SectionTitle label="Date of Birth" className="mb-1" />
              <input
                type="date"
                name="birthday"
                ref={register({ required: true })}
                className="no-calendar font-gotham-book text-blue-gray text-xs py-2 border-b w-auto"
              />
            </div>
            <div className="mb-8">
              <SectionTitle label="Home Address" className="mb-1" />
              <TextInput
                ref={register({ required: true })}
                name="address1"
                placeholder="Enter Address 1"
                sizeClassName="text-xs"
              />
              <TextInput
                ref={register({ required: true })}
                name="address2"
                placeholder="Enter Address 2"
                sizeClassName="text-xs"
              />
              <TextInput
                ref={register({ required: true })}
                name="zipcode"
                placeholder="Enter Zip Code"
                sizeClassName="text-xs"
              />
            </div>
            <div className="mb-4">
              <SectionTitle label="Preferred Currency" className="mb-1" />
              <Dropdown
                className="py-3 justify-start border-b bg-gray-50"
                imageClassName="h-3 w-3 right-2"
                labelClassName="font-gotham-book text-xs ml-3"
                onClick={() => setShowCurrencyOptions(!showCurrencyOptions)}
                value={currencyOption.label}
                selected={currencyOption.id !== null}
                showOptions={showCurrencyOptions}
                options={currencyOptions}
                onSelect={onSelectCurrencyOption}
              />
            </div>
          </div>
        </form>
        <div className="flex h-28 items-end pb-4">
          {showError && (
            <div className="w-full px-4">
              <ResponseCard
                label={errorMessage}
                onClick={() => setShowError(false)}
              />
            </div>
          )}
        </div>
        <Button
          className="sm:w-2/6 w-full text-base font-gotham-black"
          label="CREATE ACCOUNT"
          disabled={!(isValid && currencyOption.id)}
          onClick={handleSubmit(onClickCreateAccount)}
        />
      </div>
    </ScreenContainer>
  );
};

export default SignUpForm;
