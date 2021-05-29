import { createQueryHook } from '@utils/createHook';
import endpoints from '@utils/endpoints';

const useMutationMessage = createQueryHook('bidMessages', endpoints.bidMessages);

export default useMutationMessage;
