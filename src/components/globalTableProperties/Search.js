import React from 'react';

const SearchTable = ({ setSearch, classSearchPropertie, changePage }) => (
    <div className={` d-flex justify-content-end w-100`}>
        <div className={`search ${classSearchPropertie}`}>
            <input
                name="searchKeyword"
                id="searchKeyword"
                placeholder="search"
                onChange={(event) => { changePage(0); setSearch(event.target.value); }}
            />
            <span
                className="search-icon"
            >
                <i className="simple-icon-magnifier" />
            </span>
        </div>
    </div>
)
export default SearchTable;