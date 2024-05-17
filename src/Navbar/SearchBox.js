import React from 'react';
import './SearchBox.css';

function SearchBox() {
    return (
        <div className="search-container">
            <input type="text" placeholder="What do you want to play?" className="search-box" />
        </div>
    );
}

export default SearchBox;
