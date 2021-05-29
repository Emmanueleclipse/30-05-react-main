import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ScreenContainer from '@common/ScreenContainer';
import WhiteHeader from '@common/headers/WhiteHeader';
import TextInput from '@common/inputs/TextInput';
import Button from '@common/Button';
import ResponseCard from '@common/cards/ResponseCard';
import useMutationRecover from '@mutations/all/useMutationRecover';

const ForgotPassword = () => {
  const mutation = useMutationRecover();
  const [showError, setShowError] = useState(false);
  const [email, setEmail] = useState('');
  const history = useHistory();
  const errorMessage = mutation?.error?.response?.data?.title;

  const HeaderComponent = () => (
    <WhiteHeader onClickLeft={history.goBack} bgClassName="bg-gray-50" />
  );
  const onClickSubmit = () => {
    const onError = () => {
      setShowError(true);
      setTimeout(() => setShowError(false), 6000);
    };
    mutation.mutate({ email }, { onSuccess: history.goBack, onError });
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="flex flex-col flex-1 justify-center px-8 pb-32 bg-gray-50">
        <h1 className="font-montserrat font-bold text-blue-gray text-2xl mb-4">
          Forgot password?
        </h1>
        <p className="font-gotham-medium text-blue-gray text-sm mb-8">
          Enter your email address to receive a link to reset your password.
        </p>
        <TextInput
          className="py-2 border-blue-gray"
          sizeClassName="text-xs 2xs:text-sm"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="fixed bottom-4 px-4 w-full">
        {showError && (
          <div className="mb-4 px-4">
            <ResponseCard
              label={errorMessage}
              visible={showError}
              onClick={() => setShowError(false)}
            />
          </div>
        )}
        <Button
          className="w-full text-base"
          label="SUBMIT"
          onClick={onClickSubmit}
          disabled={!email}
        />
      </div>
    </ScreenContainer>
  );
};

export default ForgotPassword;
