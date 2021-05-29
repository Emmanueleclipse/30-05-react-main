import {
  createMutationToPost,
  createMutationToUpdate,
  createMutationToDelete,
} from '@utils/createHook';
import endpoints from '@utils/endpoints';

export const useMutationCreateBid = createMutationToPost(endpoints.storkBid, {
  onSuccess: () => {
    // TODO: Handle event
  },
  onError: () => {
    // TODO: Handle event
  },
});

export const useMutationUpdateBid = createMutationToUpdate(
  endpoints.storkBidById,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);

export const useMutationDeleteBid = createMutationToDelete(
  endpoints.storkBidById,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);
