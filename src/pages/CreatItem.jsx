import styles from "../styles/create.module.css"


    const CreateMenu = () => {
        return (
            <div>
                 <main className={styles.mainCreate}>
          
                    <nav>React Stock
            
                        <div className="menu">
                            <a href="/">Inicio</a>
                            <a href="/items">Itens</a>
                            
                        </div>
                        
                    </nav>

                    <div className={styles.createMenu}>
                        <div>
                            <label htmlFor="">Nome</label>
                            <input type="text" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Qntd</label>
                            <input type="number" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Preço</label>
                            <input type="number" name="" id="" />
                        </div>
                        <div>
                            <label htmlFor="">Categoria</label>
                            <input type="dropdown" name="" id="" />
                        </div>
                        
                    </div>
                    <div className={styles.textArea}>
                        <label htmlFor="">Descrição</label>
                        <textarea name="descrcao" id="" cols="150" rows="10"></textarea>
                        <div>
                            <button>Salvar</button>
                        </div>
                    </div>

                    
                </main>
            </div>
        );
    };
    export default CreateMenu;
