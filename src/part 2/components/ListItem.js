import React from 'react';
import './ListItem.css';

const ListItem = ({ title, imageUrl }) => {
    return (
        <div class="list-item-container">
            <div className="left">
                <img src={imageUrl} className="thumbnail" />
            </div>
            <div className="center">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default ListItem;
