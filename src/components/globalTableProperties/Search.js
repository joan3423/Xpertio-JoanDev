import React from 'react';

const SearchTable = ({ setSearch, classPropertie, changePage }) => (
    <div className={` d-flex justify-content-end w-100 ${classPropertie}`}>
        <div className="search">
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