import {
  createMutationToPost,
  createMutationToDelete,
} from '@utils/createHook';
import endpoints from '@utils/endpoints';

export const useMutationCreateRequest = createMutationToPost(
  endpoints.patronRequest,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);

export const useMutationDeleteRequest = createMutationToDelete(
  endpoints.patronRequestById,
  {
    onSuccess: () => {
      // TODO: Handle event
    },
    onError: () => {
      // TODO: Handle event
    },
  },
);
