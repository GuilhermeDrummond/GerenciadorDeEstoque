import React from 'react';
import { useParams } from 'react-router-dom';
import styles from '../styles/individual.module.css';
import { useNavigate } from 'react-router-dom';

const Individual = ({ items, onDeleteItem }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    if (!items || items.length === 0) {
        return <div>Carregando...</div>;
    }

    const item = items.find(item => item.id === parseInt(id, 10));

    if (!item) {
        return <div>Item não encontrado</div>;
    }

    const handleDelete = (id) => {
        onDeleteItem(id);
        navigate('/');
    };
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
                    <label htmlFor="">ID:<p>{item.id}</p></label>
                    
                    <label htmlFor="">Categoria:<p>{item.category}</p></label>
                    
                    <label htmlFor="">Qntd:<p>{item.quantity}</p></label>
                    
                    <label htmlFor="">Preço:<p>R$ {item.price}</p></label>

                    
                </div>
            </main>
        </div>
    );
};

export default Individual;

