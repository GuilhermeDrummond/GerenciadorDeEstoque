
export default function Home() {
  return (
    <main>
      <nav>
        React Stock
        <div className="menu">
          
          <a href= "/items" >Itens</a>
          
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
            <label htmlFor="">Product1</label>
            <a href="/individual">ver</a>
        </div>
        <div className="end-products">
          
            <label htmlFor="">Product2</label>
            <h4>8</h4>
            <a href="/individual">ver</a>
         

          
        </div>
      </div>
    </main>
  );
}
