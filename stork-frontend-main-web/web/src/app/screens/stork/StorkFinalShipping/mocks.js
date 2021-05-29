export const initialInfo = {
  location: 'MARRAKESH',
  packageName: 'Moroccan oil and things',
  willingToPay: 970.84,
  shippingType: 'Standard',
  delivery: {
    name: 'Angela Christian',
    address1: 'Apt #378',
    address2: '213 St, New York City, NY, 11201, USA',
  },
  total: {
    amount1: '£21,363.71',
    amount2: '$279.85',
  },
};

export const shippingBoxes = [
  {
    id: 1,
    boxNumber: 1,
    trackingNumber: '17456346098',
    weight: '1.50 kg',
  },
  {
    id: 2,
    boxNumber: 2,
    trackingNumber: '13460986745',
    weight: '1.50 kg',
  },
];

export const storkCompensation = [
  {
    id: 1,
    label: 'Items',
    amount: '£18,941.08',
  },
  {
    id: 2,
    label: 'Fees',
    amount: '£177.99',
  },
  {
    id: 3,
    label: 'Shipping',
    weight: '3.00 kg',
    amount: '£970.84',
  },
  {
    id: 4,
    label: 'Stork Profit',
    amount: '£1,273.80',
  },
];
