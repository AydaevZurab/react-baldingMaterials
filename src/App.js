/* eslint-disable jsx-a11y/alt-text */

import React from "react"
import Card from "./components/Card";
import Cart from "./components/Cart";
import Header from "./components/Header";


function App() {
  const [items, setItems] = React.useState([])
  const [cartItems, setCartItems] = React.useState([])
  const [searchValue, setSearchValue] = React.useState('')
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

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value) 
  }

  return (
    <div className="wrapper">
      {openedCart ? <Cart items={cartItems} onClickClose = {() => setCartOpened(false)} /> : null}
      <Header onClickCart = {() => setCartOpened(true)} />
      <div className="content">
        <div className="content-search">
        <h1 className="contentH1">{searchValue ? `Поиск по запросу - ${searchValue}` : 'Все материалы'}</h1>
          <div className="search-block">
            <img src="img/search.png" alt="Search" />
            {searchValue &&  <div onClick={() => setSearchValue('')}>
              <img src="img/remove.png" alt="Clear" />
            </div>}
            <input onChange={onChangeSearchInput} value={searchValue} className="searchInput" placeholder="Поиск..." />
          </div>
        </div>
        <div className="materials">

          {items
          .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
          .map((item, index) => ( 
            <Card
              key={index}
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
