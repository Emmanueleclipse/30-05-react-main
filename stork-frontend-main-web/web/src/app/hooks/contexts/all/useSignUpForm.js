import React, { useMemo, useContext, useState } from 'react';

const SignUpContext = React.createContext();

export const SignUpProvider = (props) => {
  const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    isStork: false,
  };
  const signUpInfo = JSON.parse(localStorage.getItem('signUpInfo'));
  const [formInfo, setFormInfo] = useState(signUpInfo ?? initialState);

  const updateFormInfo = (newInfo) => {
    const nextFormInfo = {
      ...formInfo,
      ...newInfo,
      isStork: !!localStorage.getItem('isStork'),
    };
    localStorage.setItem('signUpInfo', JSON.stringify(nextFormInfo));
    setFormInfo(nextFormInfo);
  };

  const resetFormInfo = () => {
    localStorage.removeItem('signUpInfo');
    setFormInfo(initialState);
  };

  const value = useMemo(() => {
    return {
      formInfo,
      updateFormInfo,
      resetFormInfo,
    };
  }, [formInfo]);

  return <SignUpContext.Provider value={value} {...props} />;
};

export default () => useContext(SignUpContext);
