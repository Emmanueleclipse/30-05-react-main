import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import addPhoto from '@images/add-photo-button.svg';
import addQuantityImage from '@images/add-quantity-button.svg';
import subtractQuantityImage from '@images/subtract-quantity-button.svg';

import Dropdown from '@common/Dropdown';
import SectionTitle from '@common/SectionTitle';
import WhiteHeader from '@common/headers/WhiteHeader';
import TextInput from '@common/inputs/TextInput';
import RangeInput from '@common/inputs/RangeInput';
import Button from '@common/Button';
import fileToBase64 from '@utils/fileToBase64';
import usePostRequest from '@contexts/patron/usePostRequest';

import { unitOptions } from './mocks';

const PatronAddItem = () => {
  const history = useHistory();
  const { addItem } = usePostRequest();
  const [showUnitOptions, setShowUnitOptions] = useState(false);
  const [unitOption, setUnitOption] = useState(unitOptions[0]);
  const [formInfo, setFormInfo] = useState({
    photoUrl: null,
    itemName: '',
    storeName: '',
    description: '',
    priceRange: {
      min: 100,
      max: 200,
    },
    weightRange: {
      min: 1000,
      max: 2000,
    },
    quantity: 0,
  });

  const onChangeImage = async (e) => {
    const { files } = e.target;
    const file = files?.[0] ?? null;
    try {
      const photoUrl = await fileToBase64(file);
      setFormInfo({ ...formInfo, photoUrl });
    } catch (err) {
      // TODO: Handle error
    }
  };
  const onChange = (key) => ({ target }) => {
    setFormInfo({ ...formInfo, [key]: target.value });
  };
  const onChangeRange = (key) => (value) => {
    setFormInfo({ ...formInfo, [key]: value });
  };
  const onChangeQuantity = (quantity) => () => {
    if (quantity >= 0) {
      setFormInfo({ ...formInfo, quantity });
    }
  };
  const onSelectUnitOption = (optionSelected) => {
    setUnitOption(optionSelected);
    setShowUnitOptions(false);
  };

  const onClickSaveItem = () => {
    addItem({
      ...formInfo,
      weightUnit: unitOption,
    });
    history.goBack();
  };

  const { itemName, storeName, description, quantity, photoUrl } = formInfo;
  const isFormInvalid = !(
    itemName &&
    storeName &&
    description &&
    photoUrl &&
    quantity > 0
  );

  return (
    <div className="h-screen">
      <WhiteHeader onClickLeft={history.goBack} />
      <div className="p-4">
        <div className="px-3">
          <div className="mb-6 relative">
            {photoUrl && (
              <button
                type="button"
                className="text-xs font-gotham-medium text-blue-gray absolute right-3 bottom-3"
                onClick={() => setFormInfo({ ...formInfo, photoUrl: null })}
              >
                Clean
              </button>
            )}
            <SectionTitle label="Item Photo" className="mb-2" />
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="inline-block cursor-pointer">
              <input
                className="hidden"
                type="file"
                onChange={onChangeImage}
                accept="image/x-png,image/jpeg,image/gif"
                onClick={(e) => {
                  e.target.value = null;
                }}
              />
              <img
                className="cursor-pointer"
                src={formInfo.photoUrl ?? addPhoto}
                alt="add-button"
              />
            </label>
          </div>
          <div className="mb-8">
            <SectionTitle label="What’s the item?" />
            <TextInput
              className="py-2"
              placeholder="Enter item name"
              value={itemName}
              onChange={onChange('itemName')}
              required
            />
          </div>
          <div className="mb-8">
            <SectionTitle label="Store Name" />
            <TextInput
              className="py-2"
              placeholder="Enter store name"
              value={storeName}
              onChange={onChange('storeName')}
              required
            />
          </div>
          <div className="mb-5">
            <SectionTitle label="Item Price Range" />
            <p className="font-gotham-bold text-blue-gray mt-3 mb-2">
              {formInfo.priceRange.min}$ - {formInfo.priceRange.max}$
            </p>
            <RangeInput
              minValue={1}
              maxValue={500}
              value={formInfo.priceRange}
              onChange={onChangeRange('priceRange')}
            />
          </div>
          <div className="mb-8">
            <SectionTitle label="Weight Range" />
            <div className="flex justify-between mt-3 mb-2">
              <p className="font-gotham-bold text-blue-gray">
                {formInfo.weightRange.min / 1000} {unitOption.symbol} -{' '}
                {formInfo.weightRange.max / 1000} {unitOption.symbol}
              </p>
              <Dropdown
                className="w-32 justify-center"
                imageClassName="h-3 w-3 right-0"
                labelClassName="text-center font-gotham-bold"
                onClick={() => setShowUnitOptions(!showUnitOptions)}
                value={unitOption.label}
                selected={unitOption.id !== null}
                showOptions={showUnitOptions}
                options={unitOptions}
                onSelect={onSelectUnitOption}
              />
            </div>
            <RangeInput
              minValue={100}
              maxValue={3000}
              value={formInfo.weightRange}
              onChange={onChangeRange('weightRange')}
              color="teal"
            />
          </div>
        </div>
        <div className="mb-6">
          <SectionTitle label="Description" className="pl-3" />
          <textarea
            className="rounded-xl w-full border-2 border-grady-300 mt-4 p-3 text-blue-gray font-gotham-book text-sm"
            rows="4"
            placeholder="Enter a description"
            value={description}
            onChange={onChange('description')}
          />
        </div>
        <div className="mb-7">
          <SectionTitle label="Quantity" className="pl-3 mb-2" />
          <div className="flex items-center pl-2">
            <img
              src={addQuantityImage}
              alt="add-quantity"
              onClick={onChangeQuantity(quantity + 1)}
              role="presentation"
            />
            <p className="font-gotham-bold text-blue-gray mx-4">{quantity}</p>
            <img
              src={subtractQuantityImage}
              alt="subtract-quantity"
              onClick={onChangeQuantity(quantity - 1)}
              role="presentation"
            />
          </div>
        </div>
        <Button
          className="w-full text-base"
          label="SAVE ITEM"
          onClick={onClickSaveItem}
          disabled={isFormInvalid}
        />
      </div>
    </div>
  );
};

export default PatronAddItem;
