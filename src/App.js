/* eslint-disable jsx-a11y/alt-text */

import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper">
      <Cart />
      <Header />
      <div className="content">
        <div className="content-search">
          <h1 className="contentH1">Все материалы</h1>
          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input className="searchInput" placeholder="Поиск..." />
          </div>
        </div>
        <div className="materials">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
