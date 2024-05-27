import React from 'react';
import './SearchBox.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import fetchHits from "../api/fetchHits";

function SearchBox({ query, setQuery }) {

    return (
        <div className="search-container">
            <input 
                type="text" 
                placeholder="What do you want to play?" 
                className="search-box"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
            />
            
        </div>
    );
}

export default SearchBox;
