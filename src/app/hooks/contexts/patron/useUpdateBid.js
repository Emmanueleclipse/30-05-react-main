import React, { useMemo, useContext } from 'react';

const UpdateBidContext = React.createContext();

export const UpdateBidProvider = (props) => {
  const mapDataToUpdate = (formInfo) => {
    const { action } = formInfo;
    // If method is not "shipping", set to "drop off" (asked by API docs)

    return {
      // TODO: Include form input to get city value or remove it from the endpoint
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
