import React from 'react';

const SearchComponent = ({ searchText, searchFunction }) => {
  return (
    <div className="text-center">
      <input
        className="font-semibold w-[30%] border rounded-lg px-4 py-2 bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
        type="text"
        placeholder="Search restaurant.."
        value={searchText}
        onChange={searchFunction}
      />
    </div>
  );
};

export default SearchComponent;
