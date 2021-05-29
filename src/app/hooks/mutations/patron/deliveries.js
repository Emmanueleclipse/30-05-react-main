import { createMutationToUpdate } from '@utils/createHook';
import endpoints from '@utils/endpoints';

export const useMutationUpdateDelivery = createMutationToUpdate(
  endpoints.patronDeliveryById,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);
