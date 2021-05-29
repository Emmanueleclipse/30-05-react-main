import React, { useMemo, useContext, useState } from 'react';

const PostRequestContext = React.createContext();

export const PostRequestProvider = (props) => {
  const initialLocationState = {
    id: null,
    label: 'Select Country',
  };
  const [items, setItems] = useState([]);
  const [location, setLocation] = useState(initialLocationState);

  const updateLocation = (data) => {
    const nextLocation = { ...location, ...data };
    setLocation(nextLocation);
  };
  const addItem = (item) => {
    const id = items.length + 1;
    setItems([...items, { ...item, id }]);
  };
  const removeItem = (itemId) => {
    const filteredItems = items.filter(({ id }) => id !== itemId);
    setItems([...filteredItems]);
  };
  const mapItemToPost = (item) => {
    const { priceRange, weightRange, quantity, weightUnit } = item;
    return {
      name: item.itemName,
      price_range_high: priceRange.max,
      price_range_low: priceRange.min,
      weight_range_high: weightRange.max / 1000,
      weight_range_low: weightRange.min / 1000,
      weight_unit: weightUnit.symbol,
      quantity_max: quantity,
      quantity_min: quantity,
      description: item.description,
    };
  };
  const mapDataToPost = (formInfo) => {
    const { country, region } = location;
    const { willingToPay, shipping, shippingOption } = formInfo;
    // If method is not "shipping", set to "drop off" (asked by API docs)
    const shippingMethod = shipping ? shippingOption.label : 'drop off';

    return {
      // TODO: Include form input to get city value or remove it from the endpoint
      city: 'City value',

      name: formInfo.orderTitle,
      country,
      region,
      delivery_method: 0,
      delivery_date_flexible: formInfo.flexible,
      delivery_date_range_start: formInfo.startDate,
      delivery_date_range_end: formInfo.endDate,
      stork_pay_range_high: willingToPay.max,
      stork_pay_range_low: willingToPay.min,
      shipping_method: shippingMethod,
      items: items.map(mapItemToPost),
    };
  };
  const resetInfo = () => {
    setLocation(initialLocationState);
    setItems([]);
  };

  const value = useMemo(() => {
    return {
      location,
      updateLocation,
      resetInfo,
      items,
      addItem,
      removeItem,
      mapDataToPost,
    };
  }, [location, items]);

  return <PostRequestContext.Provider value={value} {...props} />;
};

export default () => useContext(PostRequestContext);
