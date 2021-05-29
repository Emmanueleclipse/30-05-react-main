import endpoints from '@utils/endpoints';
import { createQueryOneHook } from '@utils/createHook';

export const useRequest = createQueryOneHook(
  'storkRequest',
  endpoints.storkRequestById,
);
