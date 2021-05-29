import { createMutationToPost } from '@utils/createHook';
import endpoints from '@utils/endpoints';

const useMutationSignUp = createMutationToPost(endpoints.signup, {
  onSuccess: () => {
    localStorage.removeItem('isStork');
  },
  onError: () => {
    // TODO: Handle event
  },
});

export default useMutationSignUp;
