/* eslint-disable jsx-a11y/alt-text */

import React from "react"
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [openedCart, setCartOpened] = React.useState(false)

  React.useEffect(() => {
    fetch('https://654fede5358230d8f0cdcd5b.mockapi.io/items')
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      setItems(json)
    });
  }, [])

  const onAddToCart = (obj) => {
    setCartItems(prew => [...prew, obj])
  }

  return (
    <div className="wrapper">
      {openedCart ? <Cart items={cartItems} onClickClose = {() => setCartOpened(false)} /> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content">
        <div className="content-search">
          <h1 className="contentH1">Все материалы</h1>
          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            <input className="searchInput" placeholder="Поиск..." />
          </div>
        </div>
        <div className="materials">

          {items.map((item) => (
            <Card
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))}

        </div>
      </div>
    </div>
  );
}

export default App;
