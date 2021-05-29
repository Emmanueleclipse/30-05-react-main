// const { REACT_APP_API_URL: API_URL } = process.env;

const API_URL = 'http://storkapidev-env.eba-5yhprdy3.us-east-2.elasticbeanstalk.com:80';

export default {
  login: `${API_URL}/api/login`,
  account: `${API_URL}/api/account`,
  profile: `${API_URL}/api/profile`,
  signup: `${API_URL}/api/signup`,
  recoverAccount: `${API_URL}/api/recover-account`,
  verifyEmail: `${API_URL}/api/verify-email`,
  bidMessages: `${API_URL}/api/bid/messages`,
  storkDelivery: `${API_URL}/api/stork/delivery`,
  storkDeliveryById: (deliveryId) => {
    return `${API_URL}/api/stork/delivery?id=${deliveryId}`;
  },
  patronDelivery: `${API_URL}/api/patron/delivery`,
  patronDeliveryById: (deliveryId) => {
    return `${API_URL}/api/patron/delivery?id=${deliveryId}`;
  },
  location: `${API_URL}/api/location`,
  locationByCountry: (country) => `${API_URL}/api/location?country=${country}`,
  locationByCountryRegion: (country, region) => {
    return `${API_URL}/api/location?country=${country}&&region=${region}`;
  },
  patronRequest: `${API_URL}/api/patron/request`,
  patronRequestById: (requestId) => {
    return `${API_URL}/api/patron/request?request_number=${requestId}`;
  },
  storkRequestById: (requestId) => {
    return `${API_URL}/api/stork/request?request_number=${requestId}`;
  },
  searchRequest: ({ region, country }) => {
    return `${API_URL}/api/search/request?region=${region}&country=${country}`;
  },
  storkBid: `${API_URL}/api/stork/bid`,
  storkBidById: (bidId) => {
    return `${API_URL}/api/stork/bid?bid_number=${bidId}`;
  },
  patronBid: `${API_URL}/api/patron/bid`,
  patronBidById: (bidId) => {
    return `${API_URL}/api/patron/bid?bid_number=${bidId}`;
  },
  history: `${API_URL}/api/history`,
  legal: `${API_URL}/api/legal`,
  status: `${API_URL}/api/status`,
};
