import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import BlueHeader from '@common/headers/BlueHeader';
import TitleBold from '@common/TitleBold';
import StorkCard from '@common/cards/StorkCard';
import Dropdown from '@common/Dropdown';
import { useLocation } from '@queries/all';
import usePostRequest from '@contexts/patron/usePostRequest';

import yellowEllipse from '@images/yellow-ellipse.svg';
import orangeHalfEllipse from '@images/orange-half-ellipse.svg';
import greyEllipse from '@images/grey-ellipse.svg';
import tealHalfEllipse from '@images/teal-half-ellipse.svg';

import { mockedUsers } from './mocks';

const PatronDashboard = () => {
  const history = useHistory();
  const { data } = useLocation();

  const { location, updateLocation } = usePostRequest();
  const [showRegions, setShowRegions] = useState(false);
  const [regions, setRegions] = useState([]);

  useEffect(() => {
    const newLocation = data?.countries?.map((country, index) => {
        return {
          id: index + 1,
          label: country[0].toUpperCase() + country.slice(1),
          country,
          region: country,
        };
      });

    setRegions(newLocation);
  }, []);

  const onSelectRegion = (regionSelected) => {
    updateLocation(regionSelected);
    setShowRegions(false);
  };

  const onClickPostRequest = () => {
    history.push('request');
  };

  return (
    <div className="h-screen relative overflow-x-hidden">
      <div className="fixed sm:relative container top-72">
        <div className="absolute top-4 -right-7">
          <img src={yellowEllipse} alt="yellow-ellipse" />
        </div>
        <div className="absolute top-28">
          <img src={orangeHalfEllipse} alt="orange-half-ellipse" />
        </div>
        <div className="absolute top-44 -right-10">
          <img src={greyEllipse} alt="grey-ellipse" />
        </div>
        <div className="absolute top-96 right-0">
          <img src={tealHalfEllipse} alt="teal-half-ellipse" />
        </div>
      </div>
      <div className="relative flex flex-col ">
        <BlueHeader
          withRightIcons
          withAvatar
          buttonDisabled={location.id === null}
          onClickButton={onClickPostRequest}
          withBottomButton
          onClickLeft={history.goBack}
        >
          <div className="pt-5 pb-14">
            <TitleBold
              text={'FULFILL YOUR\nCULTURAL PALETTE'}
              className="text-center"
            />
            <div className="flex justify-center mt-8">
              <Dropdown
                labelClassName="font-gotham-medium text-center"
                className="w-72 justify-center py-4 rounded-3xl"
                onClick={() => setShowRegions(!showRegions)}
                value={location.label}
                selected={location.id !== null}
                showOptions={showRegions}
                options={regions}
                onSelect={onSelectRegion}
              />
            </div>
          </div>
        </BlueHeader>
        <div className="flex flex-col p-4 mt-8">
          {mockedUsers.map(StorkCard)}
        </div>
      </div>
    </div>
  );
};

export default PatronDashboard;
