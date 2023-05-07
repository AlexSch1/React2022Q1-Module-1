import React from 'react';
import { ApartmentProps } from '../../shared/types/apartment-props';

export const ApartmentRealtor = ({ apartment }: ApartmentProps) => {
  return (
    <div className="apartment__realtor realtor">
      <div className="realtor__title">Realtor</div>
      <div className="realtor__person-info">
        <div className="realtor__icon">🕵🏼</div>
        <div>
          <p className="realtor__name">{apartment.agent.name}</p>
          <p className="realtor__phone">{apartment.agent.phone}</p>
        </div>
      </div>
    </div>
  );
};
