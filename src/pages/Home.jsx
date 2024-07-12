import ItemsList from './ItemsList';
import { useState } from "react";
import { useEffect } from "react";
import styles from "../styles/home.module.css"

const ItemsPage = () => {
  const [items, setItems] = useState([]);
  const [lowQuantityItems, setLowQuantityItems] = useState([]);


    useEffect(() => {
        const storedItems = localStorage.getItem('items');

        if (storedItems) {
            const itemsArray = JSON.parse(storedItems);
            // Ordenar os itens por id (assumindo que o id é a data de criação)
            const sortedItems = itemsArray.sort((a, b) => b.id - a.id);
            // Pegar os três itens mais recentes
            setItems(sortedItems.slice(0, 5));
            // Pegar os três itens cuja quantidade seja menor que 5
            const filteredLowQuantityItems = itemsArray.filter(item => item.quantity < 5);
            setLowQuantityItems(filteredLowQuantityItems.slice(0, 5));
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
  const calculateTotalQuantities = (items) => {
    let totalQuantity = 0;
    items.forEach(item => {
        totalQuantity += parseInt(item.quantity);
    });
    return totalQuantity;
  };
  const countItemsBelowFive = (items) => {
    let count = 0;
    items.forEach(item => {
        if (parseInt(item.quantity) < 5) {
            count++;
        }
    });
    return count;
};


 
  return (
    <main>
      <nav>
        React Stock
        <div className="menu">
          
          <a href= "/items" >Itens</a>
          <a href="/create">Novo Item</a>

          
        </div>
      </nav>

      <h1>Dashboard</h1>
      <div className="items-data">
        <div className="data1">
          <h4>Diversidade de Intens</h4>
          <h1>{items.length}</h1>
        </div>
        <div className="data1">
          <h4>Quantidade de Intens</h4>
          <h1>{calculateTotalQuantities(items)}</h1>
        </div>
        <div className="data1">
          <h4>Intens Recentes</h4>
          <h1>{items.length}</h1>
        </div>
        <div className="data1">
          <h4>Intens Acabando</h4>
          <h1>{countItemsBelowFive(items)}</h1>
        </div>
      </div>
      <div className="dashboard-nav">
        <div className="recent-items">
          <label htmlFor="">Itens Recentes:</label>
          <label htmlFor="">Ações:</label>
        </div>

        <div className="end-items">
          <label htmlFor="">Itens Acabando</label>
          <label htmlFor="">Ações:</label>
        </div>
      </div>

      <div className="product-section">
        <div className="recent-products">
    
        <ItemsList items={items} onDeleteItem={handleDeleteItem} />
            
        </div>
        <div className="end-products">
          
          <ItemsList items={lowQuantityItems} onDeleteItem={handleDeleteItem}/>
          
        </div>
      </div>
    </main>
  );
}; export default ItemsPage;
