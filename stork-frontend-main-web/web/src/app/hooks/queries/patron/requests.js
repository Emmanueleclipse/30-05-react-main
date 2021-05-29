import endpoints from '@utils/endpoints';
import { createQueryHook, createQueryOneHook } from '@utils/createHook';

export const useRequest = createQueryOneHook(
  'patronRequest',
  endpoints.patronRequestById,
);

export const useRequests = createQueryHook(
  'patronRequests',
  endpoints.patronRequest,
);
