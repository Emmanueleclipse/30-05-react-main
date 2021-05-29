import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import BlueHeader from '@common/headers/BlueHeader';
import SectionTitle from '@common/SectionTitle';
import RoundedCard from '@common/cards/RoundedCard';
import TextInput from '@common/inputs/TextInput';
import CheckWithLabel from '@common/CheckWithLabel';
import Dropdown from '@common/Dropdown';
import Button from '@common/Button';
import RangeInput from '@common/inputs/RangeInput';
import ItemRequestCard from '@common/cards/ItemRequestCard';
import LocationBlueBlock from '@common/blocks/LocationBlueBlock';
import ProcessingRequest from '@screens/patron/ProcessingRequest';

import {
  useLocation,
  useLocationByCountry,
  useLocationByCountryRegion,
} from '@queries/all';
import { useMutationCreateRequest } from '@mutations/patron/requests';
import usePostRequest from '@contexts/patron/usePostRequest';
import addItemButton from '@images/add-item-button.svg';

import { mockedShippingOptions } from './mocks';
import './styles.css';

const mapToDropdownOptions = (label, index) => {
  return {
    id: index,
    label,
  };
};

const renderItemRequest = (props) => {
  const {
    id,
    weightRange,
    priceRange,
    weightUnit,
    removeItem,
    ...otherProps
  } = props;
  const amount = priceRange.max;

  return (
    <div className="mb-4" key={id}>
      <ItemRequestCard
        {...otherProps}
        amount={`$${amount}`}
        amount1={`$${amount * otherProps.quantity}`}
        amount2="£1363.71"
        weight={weightRange.max}
        units={weightUnit.symbol}
        onClickClose={() => removeItem(id)}
        withCloseButton
      />
    </div>
  );
};

const PatronRequest = () => {
  const history = useHistory();

  const mutation = useMutationCreateRequest();
  const {
    location,
    items,
    removeItem,
    mapDataToPost,
    resetInfo,
  } = usePostRequest();
  const initialOrderTitleStyle = 'text-2xs border-b-2';

  /**
   * Dropdowns hooks for country, region and city
   * TODO: Make them searchable by text input
   */
  const [showCountryOptions, setShowCountryOptions] = useState(false);
  const [countryOption, setCountryOption] = useState({
    id: null,
    label: 'Enter Country',
  });
  const [showRegionOptions, setShowRegionOptions] = useState(false);
  const [regionOption, setRegionOption] = useState({
    id: null,
    label: 'Enter Region/State',
  });
  const [showCityOptions, setShowCityOptions] = useState(false);
  const [cityOption, setCityOption] = useState({
    id: null,
    label: 'Enter City',
  });

  const { data: dataCountries } = useLocation();
  const countryOptions =
    dataCountries?.countries?.map(mapToDropdownOptions) ?? [];

  const { data: dataRegions } = useLocationByCountry(countryOption.label);
  const regionOptions = dataRegions?.regions?.map(mapToDropdownOptions) ?? [];

  const { data: dataCities } = useLocationByCountryRegion(
    countryOption.label,
    regionOption.label,
  );
  const cityOptions = dataCities?.cities?.map(mapToDropdownOptions) ?? [];

  const onSelectCountryOption = (optionSelected) => {
    setCountryOption(optionSelected);
    setShowCountryOptions(false);
  };
  const onSelectRegionOption = (optionSelected) => {
    setRegionOption(optionSelected);
    setShowRegionOptions(false);
  };
  const onSelectCityOption = (optionSelected) => {
    setCityOption(optionSelected);
    setShowCityOptions(false);
  };

  const [showShippingOptions, setShowShippingOptions] = useState(false);
  const [orderTitleStyles, setOrderTitleStyles] = useState(
    initialOrderTitleStyle,
  );
  const [shippingOption, setShippingOption] = useState({
    id: null,
    label: 'Select shipping option',
  });
  const [formInfo, setFormInfo] = useState({
    orderTitle: '',
    name: '',
    address1: '',
    address2: '',
    zipCode: '',
    startDate: '',
    endDate: '',
    flexible: true,
    shipping: true,
    willingToPay: {
      min: 10,
      max: 11,
    },
  });
  const questionClassName = 'font-gotham-book text-sm text-blue-gray mb-2';

  const onClickAddItem = () => {
    history.push('add-item');
  };
  const onClickAddPayment = () => {
    /**
     * TODO: Do a validation to know if navigation is to "Patron Request Pay"
     * or "Patron Pay Card Details".
     */
    history.push('request-pay');
  };
  const onChange = (key) => ({ target }) => {
    setFormInfo({ ...formInfo, [key]: target.value });

    if (key === 'orderTitle' && !target.value) {
      setOrderTitleStyles(initialOrderTitleStyle);
    }
  };

  const onChangeData = (data) => () => {
    setFormInfo({ ...formInfo, ...data });
  };
  const onSelectShippingOption = (optionSelected) => {
    setShippingOption(optionSelected);
    setShowShippingOptions(false);
  };

  const onClickPostRequest = () => {
    const data = mapDataToPost({ ...formInfo, shippingOption });
    mutation.mutate(data, {
      onSuccess: () => {
        resetInfo();
        history.push('dashboard');
      },
      onError: () => {
        // TODO: Handle error
      },
    });
  };

  const onChangeAmountToPay = (willingToPay) => {
    setFormInfo({ ...formInfo, willingToPay });
  };

  const onBlurOrderTitle = () => {
    if (formInfo.orderTitle) {
      setOrderTitleStyles('text-lg border-b-0 tracking-wide');
    }
  };

  return mutation.isLoading ? (
    <ProcessingRequest
      title="Posting your request!"
      paragraph1="We’ll notify you when Storks"
      paragraph2="start bidding."
    />
  ) : (
    <div className="h-screen">
      <BlueHeader roundedClass="rounded-b-none" onClickLeft={history.goBack}>
        <LocationBlueBlock
          title={location.label?.toUpperCase()}
          className="pt-1 pb-5"
        >
          <input
            className={`font-gotham-bold text-white placeholder-white bg-transparent pb-1 w-full ${orderTitleStyles}`}
            type="text"
            placeholder="Enter Order Title"
            onBlur={onBlurOrderTitle}
            value={formInfo.orderTitle}
            onChange={onChange('orderTitle')}
          />
        </LocationBlueBlock>
      </BlueHeader>
      <div className="bg-blue-gray">
        <div className="rounded-tl-4xl bg-white">
          <div className="px-3 pt-8 pb-36">
            <div className="mb-6">
              <SectionTitle
                className="px-3 mb-3"
                label="Your Location Requests"
              />
              {items.map((props) => {
                return renderItemRequest({ ...props, removeItem });
              })}
              <div className="flex items-center justify-end px-3 pt-4">
                <p className="text-blue-gray font-gotham-bold text-sm mr-3">
                  Add Item
                </p>
                <img
                  className="cursor-pointer shadow-lg rounded-full"
                  src={addItemButton}
                  alt="add-item-button"
                  onClick={onClickAddItem}
                  role="presentation"
                />
              </div>
            </div>
            <div className="mb-6">
              <SectionTitle className="pl-3 mb-3" label="Stork Compensation" />
              <div className="mb-3">
                <RoundedCard paddingVertical="py-0">
                  <div className="flex justify-between">
                    <p className="font-gotham-book text-2xs text-blue-gray border-r py-5 w-10/12">
                      Fees
                    </p>
                    <p className="font-gotham-medium text-2xs text-blue-gray py-5 -mr-3">
                      0$
                    </p>
                  </div>
                </RoundedCard>
              </div>
              <RoundedCard>
                <p className={questionClassName}>
                  How much are you willing to pay your Stork for their service?
                </p>
                <p className="font-gotham-bold text-blue-gray">
                  {formInfo.willingToPay.min}$ - {formInfo.willingToPay.max}$
                </p>
                <div className="mt-2 mb-1">
                  <RangeInput
                    minValue={10}
                    maxValue={500}
                    value={formInfo.willingToPay}
                    onChange={onChangeAmountToPay}
                  />
                </div>
              </RoundedCard>
            </div>
            <div className="mb-6">
              <SectionTitle
                className="pl-3 mb-3"
                label="Delivery Information"
              />
              <div className="mb-3">
                <RoundedCard paddingVertical="py-5">
                  <p className={questionClassName}>Pay with</p>
                  <div
                    className="flex items-center"
                    onClick={onClickAddPayment}
                    role="presentation"
                  >
                    <div className="h-4 w-8 border-2 mr-4 rounded-sm" />
                    <p className="font-gotham-medium text-xs text-gray-400 cursor-pointer">
                      Add payment method
                    </p>
                  </div>
                </RoundedCard>
              </div>
              <div className="mb-3">
                <RoundedCard paddingVertical="py-5">
                  <p className={questionClassName}>
                    Your exact address will remain private until items are ready
                    for shipping.
                  </p>
                  <TextInput
                    placeholder="Enter name"
                    value={formInfo.name}
                    onChange={onChange('name')}
                    required
                  />
                  <TextInput
                    placeholder="Enter Address Line 1"
                    value={formInfo.address1}
                    onChange={onChange('address1')}
                  />
                  <TextInput
                    placeholder="Enter Address Line 2"
                    value={formInfo.address2}
                    onChange={onChange('address2')}
                  />
                  <TextInput
                    placeholder="Enter Zip Code"
                    value={formInfo.zipCode}
                    onChange={onChange('zipCode')}
                  />
                  <Dropdown
                    className="py-3 justify-start border-b"
                    imageClassName="h-3 w-3 right-2"
                    labelClassName="font-gotham-medium text-xs ml-3"
                    onClick={() => setShowCountryOptions(!showCountryOptions)}
                    value={countryOption.label}
                    selected={countryOption.id !== null}
                    showOptions={showCountryOptions}
                    options={countryOptions}
                    onSelect={onSelectCountryOption}
                  />
                  <Dropdown
                    className="py-3 justify-start border-b"
                    imageClassName="h-3 w-3 right-2"
                    labelClassName="font-gotham-medium text-xs ml-3"
                    onClick={() => setShowRegionOptions(!showRegionOptions)}
                    value={regionOption.label}
                    selected={regionOption.id !== null}
                    showOptions={showRegionOptions}
                    options={regionOptions}
                    onSelect={onSelectRegionOption}
                  />
                  <Dropdown
                    className="py-3 justify-start border-b"
                    imageClassName="h-3 w-3 right-2"
                    labelClassName="font-gotham-medium text-xs ml-3"
                    onClick={() => setShowCityOptions(!showCityOptions)}
                    value={cityOption.label}
                    selected={cityOption.id !== null}
                    showOptions={showCityOptions}
                    options={cityOptions}
                    onSelect={onSelectCityOption}
                  />
                  <p className="font-gotham-bold text-blue-gray text-xs mt-6">
                    <input
                      type="date"
                      className="no-calendar"
                      onChange={onChange('startDate')}
                      value={formInfo.startDate}
                    />
                    <span className="mr-3">—</span>
                    <input
                      type="date"
                      className="no-calendar"
                      onChange={onChange('endDate')}
                      value={formInfo.endDate}
                    />
                  </p>
                  <div className="flex mt-2">
                    <CheckWithLabel
                      className="flex-3"
                      label="Flexible"
                      active={formInfo.flexible}
                      onClick={onChangeData({ flexible: true })}
                    />
                    <CheckWithLabel
                      className="flex-4"
                      label="Not Flexible"
                      active={!formInfo.flexible}
                      onClick={onChangeData({ flexible: false })}
                    />
                  </div>
                </RoundedCard>
              </div>
              <RoundedCard paddingVertical="py-5">
                <p className={questionClassName}>
                  What is your preferred delivery method?
                </p>
                <div className="flex py-4">
                  <CheckWithLabel
                    className="flex-3"
                    label="Shipping"
                    active={formInfo.shipping}
                    onClick={onChangeData({ shipping: true })}
                  />
                  <CheckWithLabel
                    className="flex-4"
                    label="Drop-off"
                    active={!formInfo.shipping}
                    onClick={onChangeData({ shipping: false })}
                    description="Due to COVID19 this option is not currently available."
                  />
                </div>
                {formInfo.shipping && (
                  <div className="pt-4 border-t">
                    <p className={questionClassName}>Shipping Options</p>
                    <Dropdown
                      className="py-3 justify-start border-2 rounded-xl"
                      imageClassName="h-3 w-3 right-4"
                      labelClassName="font-gotham-medium text-xs ml-4"
                      onClick={() => {
                        setShowShippingOptions(!showShippingOptions);
                      }}
                      value={shippingOption.label}
                      selected={shippingOption.id !== null}
                      showOptions={showShippingOptions}
                      options={mockedShippingOptions}
                      onSelect={onSelectShippingOption}
                    />
                  </div>
                )}
              </RoundedCard>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 h-36 border-t bg-white container fixed bottom-0 flex flex-col justify-center">
        <div className="flex justify-between px-4 mb-6">
          <p className="font-gotham-medium text-blue-gray">TOTAL</p>
          <p className="font-gotham-medium text-blue-gray text-2xl -mt-1">—</p>
        </div>
        <Button
          className="w-full text-base font-gotham-black"
          label="POST REQUEST"
          onClick={onClickPostRequest}
          disabled={false}
        />
      </div>
    </div>
  );
};

export default PatronRequest;
