import React from 'react';

const SearchBar = ({ onChange }) => {
    return (
        <>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Cari Pokemon..." onChange={onChange} />
            </div>
        </>
    );
};

export default SearchBar;
