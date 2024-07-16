import styles from "../styles/items.module.css";
import ItemsList from './ItemsList';
import { useState, useEffect } from "react";

const ItemsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    const saveItemsToLocalStorage = (items) => {
        localStorage.setItem('items', JSON.stringify(items));
    };

    const handleDeleteItem = (id) => {
        const updatedItems = items.filter(item => item.id !== id);
        setItems(updatedItems);
        saveItemsToLocalStorage(updatedItems);
    };

    return (
        <div>
            <main className={styles.main}>
                <nav>React Stock
                    <div className="menu">
                        <a href="/">Inicio</a>
                        <a href="/create">Novo Item</a>
                    </div>
                </nav>
                <ItemsList items={items} onDeleteItem={handleDeleteItem} />
            </main>
        </div>
    );
};

export default ItemsPage;

