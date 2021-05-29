import endpoints from '@utils/endpoints';
import { createQueryHook, createQueryOneHook } from '@utils/createHook';

export const useBid = createQueryOneHook('storkBid', endpoints.storkBidById);

export const useBids = createQueryHook('storkBids', endpoints.storkBid);
