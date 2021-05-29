import {
  createMutationToPost,
  createMutationToUpdate,
} from '@utils/createHook';
import endpoints from '@utils/endpoints';

export const useMutationCreateDelivery = createMutationToPost(
  endpoints.storkDelivery,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);

export const useMutationUpdateDelivery = createMutationToUpdate(
  endpoints.storkDeliveryById,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);
