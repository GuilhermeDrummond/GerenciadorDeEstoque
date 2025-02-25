import React, { createContext, useState } from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([]);

    const addItem = (item) => {
        setItems([...items, item]);
    };

    return (
        <ItemsContext.Provider value={{ items, addItem }}>
            {children}
        </ItemsContext.Provider>
    );
};
