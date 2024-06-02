import React from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import Categories from './Categories';
import CarList from './CarList';

const CarListing = () => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 min-h-screen">
      <Header />
      <SearchBar />
      <Categories />
      <CarList />
    </div>
  );
};

export default CarListing;
