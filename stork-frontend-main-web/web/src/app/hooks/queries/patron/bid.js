import endpoints from '@utils/endpoints';
import { createQueryHook, createQueryOneHook } from '@utils/createHook';

export const useBid = createQueryOneHook('patronBid', endpoints.patronBidById);

export const useBids = createQueryHook('patronBids', endpoints.patronBid);
