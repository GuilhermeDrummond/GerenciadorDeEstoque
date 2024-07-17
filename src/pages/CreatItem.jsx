import styles from "../styles/create.module.css"
import { useState } from "react";
import { useEffect } from "react";


const CreateMenu = () => {
    const [items, setItems] = useState([]);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');

    // Carregar itens do localStorage ao inicializar o componente
    useEffect(() => {
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    // Função para salvar itens no localStorage
    const saveItemsToLocalStorage = (items) => {
        localStorage.setItem('items', JSON.stringify(items));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            id: Date.now(),
            name,
            quantity,
            price,
            category,
            description,
        };
        const updatedItems = [...items, newItem];
        setItems(updatedItems);
        saveItemsToLocalStorage(updatedItems);
        setName('');
        setQuantity('');
        setPrice('');
        setCategory('');
        setDescription('');
    };

    return (
        <div>
            <main className={styles.mainCreate}>
                <nav>React Stock
                    <div className="menu">
                        <a href="/">Inicio</a>
                        <a href="/items">Itens</a>
                    </div>
                </nav>
                <form className={styles.createMenu} onSubmit={handleSubmit}>
                    <div>
                    <div>
                        <label htmlFor="name">Nome</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Exemplo: Celular" required/>
                    </div>
                    <div>
                        <label htmlFor="quantity">Qntd</label>
                        <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} placeholder="Exemplo: 3" required/>
                    </div>
                    <div>
                        <label htmlFor="price">Preço</label>
                        <input type="number" id="price" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Exemplo: 123,45" required/>
                    </div>
                    <div>
                        <label htmlFor="category">Categoria</label>
                        <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} placeholder="Exemplo: Eletrônicos" required/>
                    </div>
                    </div>
                    <div className={styles.textareaDiv}>
                    <div className={styles.textArea}>
                        <label htmlFor="description">Descrição</label>
                        <textarea id="description" cols="165" rows="10" value={description} onChange={(e) => setDescription(e.target.value)} maxlength="20" placeholder="Descrição breve, máximo de 20 caracteres;" ></textarea>
                        <div>
                            <button type="submit">Salvar</button>
                        </div>
                    </div>
                    </div>
                </form>
                
            </main>
        </div>
    );
};

export default CreateMenu;