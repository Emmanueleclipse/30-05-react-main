export const itemRequests = [
  {
    id: 1,
    photoUrl:
      'https://i.picsum.photos/id/358/75/90.jpg?hmac=oLUzAZjOpV4ukGPOVuHzCOD6gSdV25l2H9B-aW_Sb34',
    itemName: 'Sixth of October Market',
    packageName: 'Turkish Coffee Beans',
    amount: '$12.00',
    weight: '0.3',
    units: 'kg',
    amount1: '$84.00',
    amount2: '£1363.71',
    quantity: '7',
  },
  {
    id: 2,
    photoUrl:
      'https://i.picsum.photos/id/966/76/91.jpg?hmac=HkOIBu3g3af1Q3hPh8KyoVYvVAExspeFxes0MO0OeEE',
    itemName: 'Any local market',
    packageName: 'Handmade scarves',
    amount: '$12.00',
    weight: '0.34',
    units: 'kg',
    amount1: '$40.00',
    amount2: '£1363.71',
    quantity: '7',
  },
];

export const initialInfo = {
  location: 'CAIRO',
  packageName: 'Coffee and Scarves',
  willingToPay: 40,
  fees: '$11',
  shipping: {
    type: 'Standard',
    weight: '2.98 kg',
    amount: '£973.80',
  },
  deliveryInfo: {
    address1: 'Apt #378',
    address2: '213 St, Boston, MA, 02115, USA',
    startDate: '06/12/20',
    endDate: '06/30/20',
    flexible: true,
  },
  total: {
    dollars: '$244.00',
    euros: '£3716.65',
  },
};
