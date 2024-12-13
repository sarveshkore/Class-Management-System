import React, { useState } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  return (
    <div className="d-flex justify-content-left align-items-center m-3">
      <input
        type="text"
        className="form-control me-2"
        placeholder="Search..."
        style={{ maxWidth: '300px' }}
      />
      <button className="btn btn-primary">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
