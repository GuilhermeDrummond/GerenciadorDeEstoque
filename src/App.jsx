import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';

const App = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    return (
        <RouterProvider router={router(items, setItems)} />
    );
};

export default App;
