import { createMutationToPost } from '@utils/createHook';
import endpoints from '@utils/endpoints';

const useMutationPostBidMessage = createMutationToPost(endpoints.bidMessages, {
  onSuccess: () => {
    // TODO: Handle event
  },
  onError: () => {
    // TODO: Handle event
  },
});

export default useMutationPostBidMessage;
