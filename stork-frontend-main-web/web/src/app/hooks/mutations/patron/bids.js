import { createMutationToUpdate } from '@utils/createHook';
import endpoints from '@utils/endpoints';

export const useMutationUpdateBid = createMutationToUpdate(
  endpoints.patronBidById,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);
