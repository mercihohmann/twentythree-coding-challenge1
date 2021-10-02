import React from 'react';
import './SearchBar.css';

const SearchBar = ({ value, onChangeText }) => {
    React.useEffect(() => {
        let input = document.querySelector('input');
        input.addEventListener('input', onChangeText);
        return input.removeEventListener('input', onChangeText);
    }, []);
    return (
        <div className="search-container">
            <input
                type="text"
                value={value}
                onChange={onChangeText}
                placeholder="Search photos and events"
            />
        </div>
    );
};

export default SearchBar;
