import React from 'react';

import './styles.css'

export default function SearchBar({placeholder, search}){
    return (
        <div className="search-bar">
            <input type="text" onChange={search} placeholder={placeholder}/>
        </div>
    )
}