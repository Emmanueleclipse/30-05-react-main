import { createMutationToPost } from '@utils/createHook';
import endpoints from '@utils/endpoints';

const useMutationLogin = createMutationToPost(endpoints.login, {
  onSuccess: ({ data }) => {
    localStorage.setItem('token', JSON.stringify(data.access_token));
  },
  onError: () => {
    // TODO: Handle event
  },
});

export default useMutationLogin;
