import styles from "../styles/items.module.css"
import ItemsList from './ItemsList';
import { useState } from "react";
import { useEffect } from "react";

const ItemsPage = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    return (
        <div>
            <main className={styles.main}>
                <nav>React Stock
                    <div className="menu">
                        <a href="/">Inicio</a>
                        <a href="/create">Nove Item</a>
                    </div>
                </nav>
                <ItemsList items={items} />
            </main>
        </div>
    );
};

export default ItemsPage;
