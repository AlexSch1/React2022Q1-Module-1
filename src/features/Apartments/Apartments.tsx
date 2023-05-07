import { apartments } from '../../db/apartmens';
import './Apartments.scss';
import { Apartment } from '../../components/ui/Apartment';
import { SearchBar } from '../../components/ui/SearchBar/SearchBar';
import React from 'react';
import { NavBar } from '../../components/layout/navigation/NavBar/NavBar';

export const Apartments = () => {
  // const { apartment } = useLoaderData();

  // console.log(apartment);
  return (
    <>
      <NavBar></NavBar>
      <SearchBar></SearchBar>
      <div className="apartments">
        {apartments.map((apartment) => (
          <Apartment key={apartment._id} apartment={apartment} />
        ))}
      </div>
    </>
  );
};
