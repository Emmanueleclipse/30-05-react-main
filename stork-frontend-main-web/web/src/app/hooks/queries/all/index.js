import axios from 'axios';
import { useQuery } from 'react-query';

import endpoints from '@utils/endpoints';
import { createQueryHook } from '@utils/createHook';

export const useLocation = createQueryHook('location', endpoints.location);

export const useLocationByCountry = (country) => {
  const getInstances = async () => {
    const { data } = await axios.get(endpoints.locationByCountry(country));
    return data;
  };
  return useQuery(`locationByCountry=${country}`, getInstances);
};

export const useLocationByCountryRegion = (country, region) => {
  const getInstances = async () => {
    const { data } = await axios.get(
      endpoints.locationByCountryRegion(country, region),
    );
    return data;
  };
  return useQuery(`useLocationByCountryRegion=${region}`, getInstances);
};

export const useProfile = createQueryHook('profile', endpoints.profile);
export const useAccount = createQueryHook('account', endpoints.account);
export const useHistory = createQueryHook('history', endpoints.history);
export const useLegal = createQueryHook('legal', endpoints.legal);
export const useServerStatus = createQueryHook(
  'serverStatus',
  endpoints.status,
);
export const useSearchRequest = createQueryHook(
  'searchRequest',
  endpoints.searchRequest,
);
