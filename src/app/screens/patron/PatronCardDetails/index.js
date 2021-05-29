import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';

import WhiteHeader from '@common/headers/WhiteHeader';
import SectionTitle from '@common/SectionTitle';
import Button from '@common/Button';
import NoRefTextInput from '@common/inputs/TextInput';
import CheckWithLabel from '@common/CheckWithLabel';
import formatCardNumber from '@utils/formatCardNumber';

const TextInput = React.forwardRef(NoRefTextInput);

const PatronCardDetails = () => {
  const { register, handleSubmit, formState, control } = useForm({
    mode: 'onChange',
  });

  const { isValid } = formState;
  const [formInfo, setFormInfo] = useState({
    saveCard: false,
  });
  const history = useHistory();

  const onClickCheckSave = () => {
    setFormInfo({ ...formInfo, saveCard: !formInfo.saveCard });
  };
  const onClickDone = () => {
    // TODO: Send "data" to the API endpoint
    history.goBack();
  };

  return (
    <div className="h-screen sm:w-3/5">
      <WhiteHeader onClickLeft={history.goBack} />
      <div className="px-7 pt-4 pb-24">
        <form>
          <SectionTitle label="Add card details" />
          <p className="font-gotham-book text-sm text-blue-gray my-5">
            Card Number
          </p>
          <Controller
            render={({ onChange, value }) => (
              <TextInput
                className="py-3"
                placeholder="Enter name"
                sizeClassName="text-xs"
                familyClassName="font-gotham-medium"
                onChange={(e) => {
                  const formattedCardNumber = formatCardNumber(e.target.value);
                  onChange(formattedCardNumber);
                }}
                value={value}
              />
            )}
            name="cardNumber"
            control={control}
            defaultValue=""
            rules={{ required: true }}
          />
          <div className="flex">
            <div className="w-2/7 mr-6">
              <p className="font-gotham-book text-sm text-blue-gray mt-5 mb-2">
                Expiration
              </p>
              <div className="flex">
                <TextInput
                  ref={register({ required: true })}
                  name="expirationDateMonth"
                  className="py-3"
                  sizeClassName="text-xs"
                  familyClassName="font-gotham-medium"
                  placeholder="MM"
                  maxLength={2}
                />
                <p className="font-gotham-medium text-xs text-blue-gray border-b py-3">
                  /
                </p>
                <TextInput
                  ref={register({ required: true })}
                  name="expirationDateYear"
                  className="py-3 pl-3"
                  sizeClassName="text-xs"
                  familyClassName="font-gotham-medium"
                  placeholder="YY"
                  maxLength={2}
                />
              </div>
            </div>
            <div className="w-2/7">
              <p className="font-gotham-book text-sm text-blue-gray mt-5 mb-2">
                CVV
              </p>
              <TextInput
                ref={register({ required: true })}
                name="cvv"
                className="py-3"
                sizeClassName="text-xs"
                familyClassName="font-gotham-medium"
                placeholder="Enter CVV"
                maxLength={4}
              />
            </div>
          </div>
          <div className="w-2/7 mb-6">
            <p className="font-gotham-book text-sm text-blue-gray mt-5 mb-2">
              Zip Code
            </p>
            <TextInput
              ref={register({ required: true })}
              name="zipCode"
              className="py-3"
              sizeClassName="text-xs"
              familyClassName="font-gotham-medium"
              placeholder="Enter code"
            />
          </div>
          <p className="font-gotham-book text-sm text-blue-gray mt-5 mb-2">
            Cardholder Name
          </p>
          <TextInput
            ref={register({ required: true })}
            name="cardHolder"
            className="py-3 mb-12"
            sizeClassName="text-xs"
            familyClassName="font-gotham-medium"
            placeholder="Enter cardholder name"
          />
          <CheckWithLabel
            label="Save Card"
            active={formInfo.saveCard}
            onClick={onClickCheckSave}
          />
        </form>
      </div>
      <div className="fixed bottom-5 left-0 px-4 w-full flex justify-center">
        <Button
          className="sm:w-2/6 w-full text-base font-gotham-black"
          label="Done"
          disabled={!isValid}
          onClick={handleSubmit(onClickDone)}
        />
      </div>
    </div>
  );
};

export default PatronCardDetails;
