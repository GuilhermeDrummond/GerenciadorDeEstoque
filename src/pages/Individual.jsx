import styles from "../styles/individual.module.css"


    const Item = () => {
        return (
            <div>
                 <main>
          
                    <nav>React Stock
            
                        <div className="menu">
                            <a href="/">Inicio</a>
                            <a href="/items">Itens</a>
                            
                        </div>
                        
                    </nav>

                    <div className={styles.itemData}>

                      <label htmlFor="">Nome do Produto:</label>
                    
                    </div>
                    <div className={styles.description}>
                      <h4>Iphone</h4>
                      <div>
                        <a href="/edit">edit</a>
                        <a href="">lixo</a>
                      </div>
                      

                    </div>

                    <div className={styles.itemInformation}>
                        <label htmlFor="">Categoria:</label>
                        <label htmlFor="">Qntd:</label>
                        <label htmlFor="">Preço:</label>
                    </div>

                </main>
            </div>
        );
    };
    export default Item;