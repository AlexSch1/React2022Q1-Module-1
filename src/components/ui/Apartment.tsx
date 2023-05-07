import React from 'react';
import { ApartmentInfo } from './ApartmentInfo';
import { ApartmentProps } from '../../shared/types/apartment-props';
import { ApartmentRooms } from './ApartmentRooms';
import { ApartmentRealtor } from './ApartmentRealtor';

export const Apartment = ({ apartment }: ApartmentProps) => {
  return (
    <div className="apartment">
      {apartment.isPremium && <div className="apartment__status">⭐️</div>}

      <div className="apartment__picture">{apartment.icon}</div>
      <ApartmentInfo apartment={apartment}></ApartmentInfo>
      <ApartmentRooms apartment={apartment}></ApartmentRooms>
      <ApartmentRealtor apartment={apartment}></ApartmentRealtor>
    </div>
  );
};
