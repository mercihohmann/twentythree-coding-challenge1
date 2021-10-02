import React from 'react';
import ListItem from './ListItem';
import './CategoryList.css';

const CategoryList = ({ results, category, type }) => {
    return (
        <div>
            <h2 className="category">{category}</h2 >
            {results.map((result, index) => (
                <div key={index}>
                    {result.type == type ?
                        <ListItem
                            title={result.title}
                            imageUrl={`https://your.service.com/api${result.url}`}
                        /> :
                        <></>
                    }
                </div>
            ))}
        </div>
    );
};

export default CategoryList;
