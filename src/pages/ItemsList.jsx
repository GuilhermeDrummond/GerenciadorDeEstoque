import React from 'react';
import styles from '../styles/items.module.css';

const ItemsList = ({ items }) => {
    return (
        <div className={styles.itemsList}>
            {items.map(item => (
                <div className={styles.item} key={item.id}>
                    <h4>ID: {item.id}</h4>
                    <h4>Nome: {item.name}</h4>
                    <h4>Qntd: {item.quantity}</h4>
                    <h4>Preço: {item.price}</h4>
                    <h4>Categoria: {item.category}</h4>
                    <h4>Descrição: {item.description}</h4>
                    <div className=''>
                        <a href="/individual">ver</a>
                        <a href="/edit">edit</a>
                        <a href="">lixo</a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemsList;
