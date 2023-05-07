import React from 'react';
import { ApartmentProps } from '../../shared/types/apartment-props';

export const ApartmentInfo = ({ apartment }: ApartmentProps) => {
  return (
    <div className="apartment__info info">
      <p className="info__title">{apartment.title}</p>
      <p className="info__price">{apartment.price}</p>
      <p className="info__address">{apartment.address}</p>
    </div>
  );
};
