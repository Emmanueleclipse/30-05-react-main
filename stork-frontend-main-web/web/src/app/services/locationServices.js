import axios from 'axios';
import endpoints from '@utils/endpoints';

export const getLocation = () => axios.get(endpoints.location);
