/**
 * Link to zeplin -> https://app.zeplin.io/project/5f32a696c67e6b208a7b4079/screen/5f32c9a75b8ba9222567b3f4
 */

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import ScreenContainer from '@common/ScreenContainer';
import SectionTitle from '@common/SectionTitle';
import TextInput from '@common/inputs/TextInput';
import RangeInput from '@common/inputs/RangeInput';
import WhiteHeader from '@common/headers/WhiteHeader';
import Button from '@common/Button';
import addPhotoButton from '@images/add-photo-button.svg';
import addQuantityImage from '@images/add-quantity-button.svg';
import subtractQuantityImage from '@images/subtract-quantity-button.svg';
import fileToBase64 from '@utils/fileToBase64';

import { initialInfo } from './mocks';

const StorkFinalAdjustmentItem = () => {
  const [proofPictures, setProofPictures] = useState([]);
  const [formInfo, setFormInfo] = useState({
    itemPrice: initialInfo.itemPrice,
    storeName: initialInfo.storeName,
    weightRange: {
      min: initialInfo.minWeight,
      max: initialInfo.maxWeight,
    },
    quantity: initialInfo.quantity,
  });
  const [storeNameEditable, setStoreNameEditable] = useState(false);
  const { min: minWeight, max: maxWeight } = formInfo.weightRange;
  const history = useHistory();
  const HeaderComponent = () => <WhiteHeader onClickLeft={history.goBack} />;

  const onChangeImage = async (e) => {
    const { files } = e.target;
    const file = files?.[0] ?? null;
    try {
      const source = await fileToBase64(file);
      const nextProofPictures = [...proofPictures, { key: Date.now(), source }];
      setProofPictures(nextProofPictures);
    } catch (err) {
      // TODO: Handle error
    }
  };
  const onChange = (key) => (value) => {
    setFormInfo({ ...formInfo, [key]: value });
  };
  const onChangeQuantity = (quantity) => () => {
    if (quantity >= 0) {
      setFormInfo({ ...formInfo, quantity });
    }
  };
  const onChangeStoreName = ({ target }) => {
    setFormInfo({ ...formInfo, storeName: target.value });
  };
  const onClickSaveItem = () => {
    // TODO: Call API service
    history.goBack();
  };

  return (
    <ScreenContainer HeaderComponent={HeaderComponent}>
      <div className="flex flex-col px-4 pb-4 pt-7">
        <div className="px-3">
          <div className="mb-5">
            <SectionTitle label="Item Photos" />
            <img
              className="rounded-xl mt-3 w-26 h-26"
              src={initialInfo.photoUrl}
              alt=""
            />
          </div>
          <div className="mb-7">
            <SectionTitle label="Your Photos" />
            <div className="flex mt-3 overflow-x-scroll">
              {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
              <label className="inline-block cursor-pointer flex-shrink-0">
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
                  className="cursor-pointer w-26 h-26"
                  src={addPhotoButton}
                  alt="add-button"
                />
              </label>
              {proofPictures.map((picture) => (
                <img
                  className="w-26 h-26 ml-3 rounded-xl flex-shrink-0"
                  key={picture.key}
                  src={picture.source}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <SectionTitle label={initialInfo.packageName} />
            <p className="font-gotham-book text-blue-gray text-sm mt-2">
              {initialInfo.packageDescription}
            </p>
          </div>
          <div className="mb-6">
            <SectionTitle label="Store Name" />
            <div className="relative">
              <TextInput
                className="py-3 pr-10"
                sizeClassName="text-sm"
                familyClassName="font-gotham-book"
                placeholder="Enter Store Name"
                value={formInfo.storeName}
                onChange={onChangeStoreName}
                disabled={!storeNameEditable}
                required
              />
              <div
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
                onClick={() => setStoreNameEditable(!storeNameEditable)}
                role="presentation"
              >
                <p className="font-gotham-book text-blue-gray text-2xs">Edit</p>
              </div>
            </div>
          </div>
          <div className="mb-4">
            <SectionTitle label="Item Price" />
            <p className="font-gotham-bold text-blue-gray text-lg mb-1 mt-2">
              £{formInfo.itemPrice / 100}
            </p>
            <RangeInput
              minValue={10}
              maxValue={70000}
              value={formInfo.itemPrice}
              onChange={onChange('itemPrice')}
              color="orange"
            />
          </div>
          <div className="mb-6">
            <SectionTitle label="Weight Range" />
            <p className="font-gotham-bold text-blue-gray text-lg mb-1 mt-2">
              {minWeight / 100} kg - {maxWeight / 100} kg
            </p>
            <RangeInput
              minValue={100}
              maxValue={500}
              value={formInfo.weightRange}
              onChange={onChange('weightRange')}
              color="teal"
            />
          </div>
          <div className="mb-6">
            <SectionTitle label="Quantity" />
            <div className="flex items-center mt-3 -ml-2">
              <img
                src={subtractQuantityImage}
                alt="subtract-quantity"
                onClick={onChangeQuantity(formInfo.quantity - 1)}
                role="presentation"
              />
              <p className="font-gotham-bold text-blue-gray mx-4">
                {formInfo.quantity}
              </p>
              <img
                src={addQuantityImage}
                alt="add-quantity"
                onClick={onChangeQuantity(formInfo.quantity + 1)}
                role="presentation"
              />
            </div>
          </div>
        </div>
        <Button
          className="text-base"
          label="SAVE ITEM"
          disabled={false}
          onClick={onClickSaveItem}
        />
      </div>
    </ScreenContainer>
  );
};

export default StorkFinalAdjustmentItem;
