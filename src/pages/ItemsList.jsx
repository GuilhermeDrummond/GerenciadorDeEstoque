import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/items.module.css';

const ItemsList = ({ items, onDeleteItem }) => {
    const [editItemId, setEditItemId] = useState(null);
    const [editedItem, setEditedItem] = useState({
        id: null,
        name: '',
        quantity: '',
        price: '',
        category: '',
        description: ''
    });

    const openEditModal = (id) => {
        const itemToEdit = items.find(item => item.id === id);
        setEditItemId(id);
        setEditedItem(itemToEdit);
    };

    const closeEditModal = () => {
        setEditItemId(null);
        setEditedItem({
            id: null,
            name: '',
            quantity: '',
            price: '',
            category: '',
            description: ''
        });
    };

    const handleInputChange = (e, field) => {
        setEditedItem({
            ...editedItem,
            [field]: e.target.value
        });
    };

    const handleUpdateItem = () => {
        const updatedItems = items.map(item => {
            if (item.id === editedItem.id) {
                return editedItem; // Atualiza completamente o item editado na lista
            }
            return item;
        });

        // Atualiza a lista de itens no componente pai (simulando localStorage neste exemplo)
        localStorage.setItem('items', JSON.stringify(updatedItems));

        // Recarrega a página para refletir as alterações
        window.location.reload();
    };

    const handleDelete = (id) => {
        onDeleteItem(id);

        // Recarrega a página para refletir as alterações
        window.location.reload();
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
                        <Link to={`/individual/${item.id}`}>Ver</Link>
                        <button onClick={() => openEditModal(item.id)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Lixo</button>
                    </div>
                    {editItemId === item.id && (
                        <div className={styles.modal}>
                            <h2>Editando Item: {item.name}</h2>
                            <form className={styles.createMenu} onSubmit={(e) => { e.preventDefault(); handleUpdateItem(); }}>
                                <div>
                                    <div>
                                        <label htmlFor="editName">Nome:</label>
                                        <input type="text" id="editName" value={editedItem.name} onChange={(e) => handleInputChange(e, 'name')} />
                                    </div>
                                    <div>
                                        <label htmlFor="editQuantity">Quantidade:</label>
                                        <input type="number" id="editQuantity" value={editedItem.quantity} onChange={(e) => handleInputChange(e, 'quantity')} />
                                    </div>
                                    <div>
                                        <label htmlFor="editPrice">Preço:</label>
                                        <input type="number" id="editPrice" value={editedItem.price} onChange={(e) => handleInputChange(e, 'price')} />
                                    </div>
                                    <div>
                                        <label htmlFor="editCategory">Categoria:</label>
                                        <input type="text" id="editCategory" value={editedItem.category} onChange={(e) => handleInputChange(e, 'category')} />
                                    </div>
                                </div>
                                <div className={styles.textareaDiv}>
                                    <div className={styles.textArea}>
                                        <label htmlFor="editDescription">Descrição:</label>
                                        <textarea id="editDescription" value={editedItem.description} onChange={(e) => handleInputChange(e, 'description')}></textarea>
                                    </div>
                                    <div>
                                        <button type="submit">Salvar</button>
                                        <button type="button" onClick={closeEditModal}>Cancelar</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ItemsList;
