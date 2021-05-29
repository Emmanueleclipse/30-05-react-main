import React, { useMemo, useContext } from 'react';

const UpdateBidContext = React.createContext();

export const UpdateBidProvider = (props) => {
  const mapDataToUpdate = (formInfo) => {
    const { action } = formInfo;

    return {
      action,
    };
  };

  const value = useMemo(() => {
    return {
      mapDataToUpdate,
    };
  }, []);

  return <UpdateBidContext.Provider value={value} {...props} />;
};

export default () => useContext(UpdateBidContext);
