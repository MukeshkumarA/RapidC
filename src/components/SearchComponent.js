import React from 'react';

const SearchComponent = ({ searchText, searchFunction }) => {
  return (
    <div className="text-center">
      <input
        className="border-2 border-black w-[20%]"
        type="text"
        placeholder="Search restaurant.."
        value={searchText}
        onChange={searchFunction}
      />
    </div>
  );
};

export default SearchComponent;
