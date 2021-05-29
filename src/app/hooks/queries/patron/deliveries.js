import endpoints from '@utils/endpoints';
import { createQueryHook, createQueryOneHook } from '@utils/createHook';

export const useDelivery = createQueryOneHook(
  'patronDelivery',
  endpoints.patronDeliveryById,
);

export const useDeliveries = createQueryHook(
  'patronDeliveries',
  endpoints.patronDelivery,
);
