import React, { useMemo, useContext } from 'react';
import axios from 'axios';

const AxiosContext = React.createContext();

export const AxiosProvider = (props) => {
  const axiosValue = useMemo(() => {
    const nextAxios = axios.create();

    nextAxios.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        const headers = {
          Authorization: `Bearer ${JSON.parse(token)}`,
        };
        return { ...config, headers };
      }

      return config;
    });

    return nextAxios;
  }, []);

  return <AxiosContext.Provider value={axiosValue} {...props} />;
};

export default () => useContext(AxiosContext);
