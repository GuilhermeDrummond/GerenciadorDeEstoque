import React from 'react';
import styles from '../styles/items.module.css';

const ItemsList = ({ items, onDeleteItem }) => {
    const handleDelete = (id) => {
        onDeleteItem(id);
    };

    const calculateTotalQuantities = (items) => {
        let totalQuantity = 0;
        items.forEach(item => {
            const quantity = parseInt(item.quantity, 10);
            if (!isNaN(quantity)) {
                totalQuantity += quantity;
            }
        });
        return totalQuantity;
    };

    return (
        <div className={styles.itemsList}>
            {items.map(item => (
                <div className={styles.item} key={item.id}>
                    <h5>ID: {item.id}</h5>
                    <h5>Nome: {item.name}</h5>
                    <h5>Qntd: {item.quantity}</h5>
                    <h5>Preço: {item.price}</h5>
                    <h5>Categoria: {item.category}</h5>
                    <h5>Descrição: {item.description}</h5>
                    <div className={styles.buttons}>
                        <a href={`/individual/${item.id}`}>ver</a>
                        <a href={`/edit/${item.id}`}>📝</a>
                        <a href="#" onClick={() => handleDelete(item.id)}>🗑️</a>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default ItemsList;
