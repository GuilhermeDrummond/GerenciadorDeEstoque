import styles from "../styles/items.module.css"


    const AllItems = () => {
        return (
            <div>
                 <main>
          
                    <nav>React Stock
            
                        <div className="menu">
                            <a href="/">Inicio</a>
                            <a href="/create">Novo Item</a>
                            
                        </div>
                        
                    </nav>

                    <div className={styles.itemData}>
                      <label htmlFor="">ID</label>
                      <label htmlFor="">Nome</label>
                      <label htmlFor="">Estoque</label>
                      <label htmlFor="">Categoria</label>
                      <label htmlFor="">Ações</label>
                    </div>
                    <div className={styles.description}>
                      <h4>101</h4>
                      <h4>Iphone</h4>
                      <h4>12</h4>
                      <h4>Celular</h4>
                      <div>
                        <button>ver</button>
                        <button>edit</button>
                        <button>lixo</button>
                      </div>

                    </div>



                    
                </main>
            </div>
        );
    };
    export default AllItems;