import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/individual.module.css';

const Individual = ({ items }) => {
    const { id } = useParams();

    // Adicionando uma verificação para garantir que items esteja definido
    if (!items || items.length === 0) {
        return <div>Carregando...</div>;
    }

    const item = items.find(item => item.id === parseInt(id, 10));

    if (!item) {
        return <div>Item não encontrado</div>;
    }

    return (
        <div className={styles.itemDetail}>
            <main>
                <nav>React Stock
                    <div className="menu">
                        <a href="/">Inicio</a>
                        <a href="/items">Itens</a>
                    </div>
                </nav>
                <div className={styles.itemData}>
                    <label htmlFor="">Nome do Produto:</label>
                    <h4>{item.name}</h4>
                </div>
                <div className={styles.description}>
                    <label htmlFor="">Descrição:</label>
                    <p>{item.description}</p>
                </div>
                <div className={styles.itemInformation}>
                    <label htmlFor="">ID:</label>
                    <p>{item.id}</p>
                    <label htmlFor="">Categoria:</label>
                    <p>{item.category}</p>
                    <label htmlFor="">Qntd:</label>
                    <p>{item.quantity}</p>
                    <label htmlFor="">Preço:</label>
                    <p>{item.price}</p>
                </div>
            </main>
        </div>
    );
};

export default Individual;

