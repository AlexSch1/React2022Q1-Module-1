import React from 'react';
import { ApartmentProps } from '../../shared/types/apartment-props';

export const ApartmentRooms = ({ apartment }: ApartmentProps) => {
  return (
    <div className="apartment__rooms rooms">
      <div className="rooms__item">
        <span className="rooms__icon">🛏️</span>

        <p className="rooms__text">
          <span className="rooms__count">{apartment.rooms.bedrooms}</span> Bedrooms
        </p>
      </div>
      <div className="rooms__item">
        <span className="rooms__icon">🛁</span>
        <p className="rooms__text">
          <span className="rooms__count">{apartment.rooms.bathrooms}</span> Bathrooms
        </p>
      </div>
    </div>
  );
};
