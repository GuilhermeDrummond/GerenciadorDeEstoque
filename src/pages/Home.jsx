
export default function home() {
  
    return (
      <main>
        
        <nav>React Stock

        <div className="menu">
            <a href="">Inicio</a>
            <a href="">Items</a>
        </div>
            
            
        </nav>
    
          <h1>Dashboard</h1>
          <div className="items-data">
            <div className="data1">
              <h4>Diversidade de Intens</h4>
              <h1>5</h1>
            </div>
            <div className="data1">
              <h4>Quantidade de Intens</h4>
              <h1>5</h1>
            </div>
            <div className="data1">
              <h4>Intens Recentes</h4>
              <h1>5</h1>
            </div>
            <div className="data1">
              <h4>Intens Acabando</h4>
              <h1>5</h1>
            </div>
          </div>
          <div className="dashboard-nav">
            <div className="recent-items">
              <label htmlFor="">Itens Recentes</label>
              <label htmlFor="">Ações:</label>
            </div>
  
            <div className="end-items">
              <label htmlFor="">Itens Acabando</label>
              <label htmlFor="">Qtd.</label>
              <label htmlFor="">Ações:</label>
            </div>            
          </div>
  
          <div className="product-section">
            <div className="recent-products">
  
                <div>
                      <label htmlFor="">Product1</label>
                      <button>Ver</button>
                </div>
  
                <div>
                      <label htmlFor="">Product1</label>
                      <button>Ver</button>
                </div>
  
                </div>
                <div className="end-products">
  
                <div>
                      <label htmlFor="">Product1</label>
                      <h4>8</h4>
                      <button>Ver</button>
                </div>
  
                <div>
                <label htmlFor="">Product1</label>
                      <h4>8</h4>
                      <button>Ver</button>
                </div>
  
              </div>
          </div>
          
          
      </main>
  )
  }