import endpoints from '@utils/endpoints';
import { createQueryHook, createQueryOneHook } from '@utils/createHook';

export const useDelivery = createQueryOneHook(
  'storkDelivery',
  endpoints.storkDeliveryById,
);

export const useDeliveries = createQueryHook(
  'storkDeliveries',
  endpoints.storkDelivery,
);
