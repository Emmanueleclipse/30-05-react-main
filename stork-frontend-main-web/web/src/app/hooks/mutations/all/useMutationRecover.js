import { createMutationToPost } from '@utils/createHook';
import endpoints from '@utils/endpoints';

const useMutationRecover = createMutationToPost(endpoints.recoverAccount, {
  onSuccess: () => {
    // TODO: Handle event
  },
  onError: () => {
    // TODO: Handle event
  },
});

export default useMutationRecover;
