import endpoints from '@utils/endpoints';
import { createQueryHook } from '@utils/createHook';

export const useProfile = createQueryHook('profile', endpoints.profile);
export const useAccount = createQueryHook('account', endpoints.account);
export const useLocation = createQueryHook('location', endpoints.location);
export const useHistory = createQueryHook('history', endpoints.history);
export const useLegal = createQueryHook('legal', endpoints.legal);
export const useBimbo = createQueryHook('bimbo', endpoints.tests);
export const useServerStatus = createQueryHook(
  'serverStatus',
  endpoints.status,
);
export const useSearchRequest = createQueryHook(
  'searchRequest',
  endpoints.searchRequest,
);
