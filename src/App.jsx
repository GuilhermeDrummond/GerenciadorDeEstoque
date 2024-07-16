import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        localStorage.setItem('items', JSON.stringify(updatedItems));
    };

   useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    return (
        <RouterProvider router={router(items, setItems, handleDeleteItem)} />
    );
};

export default App;
